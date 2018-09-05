/**
 * Created by UTOPIA SOFTWARE on 26/7/2018.
 */

/**
 * file defines all View-Models, Controllers and Event Listeners used by the app
 *
 * The 'utopiasoftware_app_namespace' namespace variable has being defined in the base js file.
 * The author uses the terms 'method' and function interchangeably; likewise the terms 'attribute' and 'property' are
 * also used interchangeably
 */

// define the controller namespace
utopiasoftware[utopiasoftware_app_namespace].controller = {

    /**
     * property holds the Map objects which will contain a reference to dynamically loaded ES modules.
     * NOTE: modules MUST BE deleted from this property i.e. the Map object when no longer need.
     * This is to enable garbage collection and prevent memory leaks.
     * NOTE: the keys used within the map will be identical to the same map value used in the SystemJS.config()
     */
    LOADED_MODULES: new Map(),
    /**
     * method contains the stratup/bootstrap code needed to initiate app logic execution
     */
    startup: function(){

        // initialise the app libraries and plugins
        ons.ready(async function () {
            // set the default handler for the app
            ons.setDefaultDeviceBackButtonListener(function(){
                // does nothing for now!!
            });

            // displaying prepping message
            $('#loader-modal-message').html("Loading App...");
            $('#loader-modal').get(0).show(); // show loader


            if(window.localStorage.getItem("utopiasoftware-edpms-app-status") &&
                window.localStorage.getItem("utopiasoftware-edpms-app-status") !== ""){ // there is a previous logged in user
                // load the app main page
                $('ons-splitter').get(0).content.load("app-main-template");
            }
            else{ // there is no previously logged in user
                // load the login page
                $('ons-splitter').get(0).content.load("login-template");
            }

            // START ALL CORDOVA PLUGINS CONFIGURATIONS
            try{
                // lock the orientation of the device to 'PORTRAIT'
                screen.orientation.lock('portrait');
            }
            catch(err){}

            try { // START ALL THE CORDOVA PLUGINS CONFIGURATION WHICH REQUIRE PROMISE SYNTAX

                // prepare the inapp browser plugin by removing the default window.open() functionality
                delete window.open;

                // note: for most promises, we will use async-wait syntax

                // create the pouchdb app database
                utopiasoftware[utopiasoftware_app_namespace].model.appDatabase = new PouchDB('ptrackerdatabase.db', {
                    adapter: 'cordova-sqlite',
                    location: 'default',
                    androidDatabaseImplementation: 2
                });

                // generate a password for encrypting the app database (if it does NOT already exist)
                if(!window.localStorage.getItem("utopiasoftware-edpms-rid") ||
                    window.localStorage.getItem("utopiasoftware-edpms-rid") === "") {
                    window.localStorage.setItem("utopiasoftware-edpms-rid",
                        Random.uuid4(Random.engines.browserCrypto));
                }
                await new Promise(function(resolve, reject){
                    utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.
                    crypto(window.localStorage.getItem("utopiasoftware-edpms-rid"), {ignore: '_attachments',
                        cb: function(err, key){
                        if(err){ // there is an error
                            reject(err); // reject Promise
                        }
                        else{ // no error
                            resolve(key); // resolve Promise
                        }
                    }});
                });

                // create the database indexes used by the app
                await Promise.all([utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.createIndex({
                    index: {
                        fields: ['TYPE'],
                        name: 'DOC_TYPE_INDEX',
                        ddoc: 'ptracker-index-designdoc'
                    }}),
                    utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.createIndex({
                        index: {
                            fields: ['PROJECTID', 'TYPE'],
                            name: 'FIND_PROJECT_BY_ID_INDEX',
                            ddoc: 'ptracker-index-designdoc'
                        }
                    })]);

            }
            catch(err){
                console.log("ERROR");
            }
            finally{
                 // set status bar color
                 StatusBar.backgroundColorByHexString("#00B2A0");
                 navigator.splashscreen.hide(); // hide the splashscreen
                 utopiasoftware[utopiasoftware_app_namespace].model.isAppReady = true; // flag that app is fullyt loaded and ready
            }

        }); // end of ons.ready()

    },


    /**
     * this is the view-model/controller for the LOGIN page
     */
    loginPageViewModel: {

        /**
         * used to hold the parsley form validation object for the sign-in page
         */
        formValidator: null,

        /**
         * event is triggered when page is initialised
         */
        pageInit: function(event){

            var $thisPage = $(event.target); // get the current page shown
            // disable the swipeable feature for the app splitter
            $('ons-splitter-side').removeAttr("swipeable");

            // call the function used to initialise the app page if the app is fully loaded
            loadPageOnAppReady();

            //function is used to initialise the page if the app is fully ready for execution
            async function loadPageOnAppReady(){
                // check to see if onsen is ready and if all app loading has been completed
                if(!ons.isReady() || utopiasoftware[utopiasoftware_app_namespace].model.isAppReady === false){
                    setTimeout(loadPageOnAppReady, 500); // call this function again after half a second
                    return;
                }

                // listen for the back button event
                $('#login-navigator').get(0).topPage.onDeviceBackButton = function(){
                    ons.notification.confirm('Do you want to close the app?', {title: 'Exit App',
                        buttonLabels: ['No', 'Yes'], modifier: 'utopiasoftware-alert-dialog'}) // Ask for confirmation
                        .then(function(index) {
                            if (index === 1) { // OK button
                                navigator.app.exitApp(); // Close the app
                            }
                        });
                };

                // adjust the window/view-port settings for when the soft keyboard is displayed
                window.SoftInputMode.set('adjustPan'); // let the window/view-port 'pan' when the soft keyboard is displayed

                // initialise the login form validation
                utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.formValidator =
                    $('#login-form').parsley();

                // listen for log in form field validation failure event
                utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.formValidator.on('field:error', function(fieldInstance) {
                    // get the element that triggered the field validation error and use it to display tooltip
                    // display tooltip
                    $(fieldInstance.$element).addClass("hint--always hint--success hint--medium hint--rounded hint--no-animate");
                    $(fieldInstance.$element).attr("data-hint", fieldInstance.getErrorsMessages()[0]);
                });

                // listen for log in form field validation success event
                utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.formValidator.on('field:success', function(fieldInstance) {
                    // remove tooltip from element
                    $(fieldInstance.$element).removeClass("hint--always hint--success hint--medium hint--rounded hint--no-animate");
                    $(fieldInstance.$element).removeAttr("data-hint");
                });

                // listen for log in form validation success
                utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.formValidator.on('form:success',
                    utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.formValidated);

                // hide the loader
                $('#loader-modal').get(0).hide();

                //$('#determinate-progress-modal').get(0).show();
            }

        },

        /**
         * method is triggered when page is shown
         */
        pageShow: function(){
            // disable the swipeable feature for the app splitter
            $('ons-splitter-side').removeAttr("swipeable");

            // adjust the window/view-port settings for when the soft keyboard is displayed
            window.SoftInputMode.set('adjustPan'); // let the window/view-port 'pan' when the soft keyboard is displayed
        },


        /**
         * method is triggered when page is hidden
         */
        pageHide: function(){
            // adjust the window/view-port settings for when the soft keyboard is displayed
            // window.SoftInputMode.set('adjustResize'); // let the view 'resize' when the soft keyboard is displayed

            try {
                // remove any tooltip being displayed on all forms on the page
                $('#login-page [data-hint]').removeClass("hint--always hint--success hint--medium hint--rounded hint--no-animate");
                $('#login-page [data-hint]').removeAttr("data-hint");
                // reset the form validator object on the page
                utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.formValidator.reset();
            }
            catch(err){}
        },

        /**
         * method is triggered when page is destroyed
         */
        pageDestroy: function(){

            try {
                // remove any tooltip being displayed on all forms on the page
                $('#login-page [data-hint]').removeClass("hint--always hint--success hint--medium hint--rounded hint--no-animate");
                $('#login-page [data-hint]').removeAttr("data-hint");
                // reset the form validator object on the page
                utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.formValidator.destroy();
            }
            catch(err){}
        },


        /**
         * method is triggered when the "Sign In / Log In" button is clicked
         *
         * @returns {Promise<void>}
         */
        async loginButtonClicked(){

            // run the validation method for the sign-in form
            utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.formValidator.whenValidate();
        },

        /**
         * method is triggered when the enter button is clicked on the device keyboard
         *
         * @param keyEvent
         * @returns {Promise<void>}
         */
        async enterButtonClicked(keyEvent){
            // check which key was pressed
            if(keyEvent.which === kendo.keys.ENTER) // if the enter key was pressed
            {
                // prevent the default action from occurring
                keyEvent.preventDefault();
                keyEvent.stopImmediatePropagation();
                keyEvent.stopPropagation();
                // hide the device keyboard
                Keyboard.hide();
            }
        },

        /**
         * method is triggered when the form is successfully validated
         *
         * @returns {Promise<void>}
         */
        async formValidated(){

            // check if Internet Connection is available before proceeding
            if(navigator.connection.type === Connection.NONE){ // no Internet Connection
                // inform the user that they cannot proceed without Internet
                window.plugins.toast.showWithOptions({
                    message: "You cannot sign in with an Internet Connection",
                    duration: 4000,
                    position: "top",
                    styling: {
                        opacity: 1,
                        backgroundColor: '#ff0000', //red
                        textColor: '#FFFFFF',
                        textSize: 14
                    }
                }, function(toastEvent){
                    if(toastEvent && toastEvent.event == "touch"){ // user tapped the toast, so hide toast immediately
                        window.plugins.toast.hide();
                    }
                });

                return; // exit method immediately
            }

            // inform user that login validation is taking place
            $('#loader-modal #loader-modal-message').html("Signing You In...");
            await $('#loader-modal').get(0).show();

            try{
                // create the form data to be submitted
                let formData = {
                    username: $('#login-page #login-email').val().trim(),
                    password: $('#login-page #login-password').val().trim()
                };

                let serverResponse = await Promise.resolve($.ajax(
                    {
                        url: utopiasoftware[utopiasoftware_app_namespace].model.appBaseUrl + "/mobile/login.php",
                        type: "post",
                        contentType: "application/x-www-form-urlencoded",
                        beforeSend: function(jqxhr) {
                            jqxhr.setRequestHeader("X-PTRACKER-APP", "mobile");
                        },
                        dataType: "text",
                        timeout: 240000, // wait for 4 minutes before timeout of request
                        processData: true,
                        data: formData
                    }
                ));
                // convert the response to an object
                serverResponse = JSON.parse(serverResponse.trim());

                // check if the user login was successful
                if(serverResponse.status !== "success"){ // user log was NOT successful
                    throw serverResponse; // throw error
                }

                // save the user's details
                utopiasoftware[utopiasoftware_app_namespace].model.userDetails = {
                    _id: "userDetails",
                    userDetails: {firstname: serverResponse.firstname, username: serverResponse.username},
                    type: "userDetails",
                    _rev: (window.localStorage.getItem("utopiasoftware-edpms-app-status") &&
                        window.localStorage.getItem("utopiasoftware-edpms-app-status") !== "") ?
                        window.localStorage.getItem("utopiasoftware-edpms-app-status") : null
                };

                // check if the user wants to remain signed in
                if($('#login-page #login-remember-me').get(0).checked){ // the user wants to remian signed in
                    // save the user's details to persistent database
                    let databaseResponse = await utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.put(
                        utopiasoftware[utopiasoftware_app_namespace].model.userDetails);
                    // save the returned user details rev id
                    window.localStorage.setItem("utopiasoftware-edpms-app-status", databaseResponse.rev);
                }
                else{ // user does not want to remain signed in
                    // remove the user details rev id from storage
                    window.localStorage.removeItem("utopiasoftware-edpms-app-status");
                }

                // flag that the user just completed a sign in for this session
                window.sessionStorage.setItem("utopiasoftware-edpms-user-logged-in", "yes");

                // move user to the main menu page
                await Promise.all([$('ons-splitter').get(0).content.load("app-main-template"),
                    $('#loader-modal').get(0).hide()]);
                // display a toast to the user
                //ons.notification.toast(`<ons-icon icon="md-check" size="20px" style="color: #00D5C3"></ons-icon> Welcome ${serverResponse.firstname}`, {timeout:3000});
            }
            catch(err){
                $('#loader-modal').get(0).hide();
                ons.notification.confirm(err.message, {title: '<span style="color: red">Sign In Failed</span>',
                    buttonLabels: ['OK'], modifier: 'utopiasoftware-alert-dialog'});
            }
        }

    },

    /**
     * this is the view-model/controller for the Search Project page
     */
    searchProjectPageViewModel: {

        /**
         * used to hold the parsley form validation object for the sign-in page
         */
        formValidator: null,

        /**
         * object holds the currently searched and chosen project object
         */
        currentlySelectedProject: null,

        /**
         * event is triggered when page is initialised
         */
        pageInit: function(event){

            var $thisPage = $(event.target); // get the current page shown
            // disable the swipeable feature for the app splitter
            $('ons-splitter-side').removeAttr("swipeable");

            // call the function used to initialise the app page if the app is fully loaded
            loadPageOnAppReady();

            //function is used to initialise the page if the app is fully ready for execution
            async function loadPageOnAppReady(){
                // check to see if onsen is ready and if all app loading has been completed
                if(!ons.isReady() || utopiasoftware[utopiasoftware_app_namespace].model.isAppReady === false){
                    setTimeout(loadPageOnAppReady, 500); // call this function again after half a second
                    return;
                }

                // listen for the back button event
                $('#app-main-navigator').get(0).topPage.onDeviceBackButton =
                    utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.backButtonClicked;

                // initialise the login form validation
                utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.formValidator =
                    $('#search-project-form').parsley();

                // listen for log in form field validation failure event
                utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.formValidator.on('field:error', function(fieldInstance) {
                    // get the element that triggered the field validation error and use it to display tooltip
                    // display tooltip
                    $(fieldInstance.$element).addClass("hint--always hint--success hint--medium hint--rounded hint--no-animate");
                    $(fieldInstance.$element).attr("data-hint", fieldInstance.getErrorsMessages()[0]);
                });

                // listen for log in form field validation success event
                utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.
                formValidator.on('field:success', function(fieldInstance) {
                    // remove tooltip from element
                    $(fieldInstance.$element).removeClass("hint--always hint--success hint--medium hint--rounded hint--no-animate");
                    $(fieldInstance.$element).removeAttr("data-hint");
                });

                // listen for log in form validation success
                utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.formValidator.on('form:success',
                    utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.formValidated);

                try{
                    // keep device awake during the downloading process
                    window.plugins.insomnia.keepAwake();
                    // check if the user just completed a signin or log-in
                    if(window.sessionStorage.getItem("utopiasoftware-edpms-user-logged-in") === "yes") {
                        // beginning uploading app data
                        $('#determinate-progress-modal .modal-message').html('Downloading projects data for offline use...');
                        $('#determinate-progress-modal').get(0).show();
                        $('#determinate-progress-modal #determinate-progress').get(0).value = 30;

                        // get the projects data to be cached
                        let serverResponse = await Promise.resolve($.ajax(
                            {
                                url: utopiasoftware[utopiasoftware_app_namespace].model.appBaseUrl + "/mobile/loadprojects.php",
                                type: "post",
                                contentType: "application/x-www-form-urlencoded",
                                beforeSend: function(jqxhr) {
                                    jqxhr.setRequestHeader("X-PTRACKER-APP", "mobile");
                                },
                                dataType: "text",
                                timeout: 240000, // wait for 4 minutes before timeout of request
                                processData: true,
                                data: {}
                            }
                        ));

                        serverResponse = JSON.parse(serverResponse); // convert the response to JSON object

                        $('#determinate-progress-modal #determinate-progress').get(0).value = 35;

                        // delete all previous project data/docs
                        let allProjects = await utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.find({
                            selector: {
                                "TYPE": {
                                    "$eq": "projects"
                                }},
                            fields: ["_id", "_rev", "PROJECTID", "TITLE", "CONTRACTSUM", "CONTRACTOR", "MDAID", "TYPE"],
                            use_index: ["ptracker-index-designdoc", "DOC_TYPE_INDEX"]
                        });

                        // get all the returned projects and delete them
                        allProjects = allProjects.docs.map((currentValue, index, array) => {
                            currentValue._deleted = true; // mark the document as deleted
                            return currentValue;
                        });

                        // check if there are any project data to delete
                        if(allProjects.length > 0){
                            // delete the already saved projects
                            await utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.bulkDocs(allProjects);
                        }

                        $('#determinate-progress-modal #determinate-progress').get(0).value = 45;

                        // store the all the project data received
                        await utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.bulkDocs(serverResponse);
                        // inform the user that milestone data is being downloaded for offline use
                        $('#determinate-progress-modal .modal-message').html('Downloading milestones data for offline use...');

                        $('#determinate-progress-modal #determinate-progress').get(0).value = 50;

                        // get the milestones data to be cached
                        serverResponse = await Promise.resolve($.ajax(
                            {
                                url: utopiasoftware[utopiasoftware_app_namespace].model.appBaseUrl + "/mobile/loadboq.php",
                                type: "post",
                                contentType: "application/x-www-form-urlencoded",
                                beforeSend: function(jqxhr) {
                                    jqxhr.setRequestHeader("X-PTRACKER-APP", "mobile");
                                },
                                dataType: "text",
                                timeout: 240000, // wait for 4 minutes before timeout of request
                                processData: true,
                                data: {}
                            }
                        ));

                        serverResponse = JSON.parse(serverResponse); // convert the response to JSON object

                        $('#determinate-progress-modal #determinate-progress').get(0).value = 75;

                        // delete all previous milestones /docs
                        allProjects = await utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.find({
                            selector: {
                                "TYPE": {
                                    "$eq": "BOQ"
                                }},
                            fields: ["_id", "_rev", "CATEGORY", "AMOUNT", "RATE", "PROJECTID", "DDATE", "BOQID", "TYPE"],
                            use_index: ["ptracker-index-designdoc", "DOC_TYPE_INDEX"]
                        });

                        // get all the returned milestones and delete them
                        allProjects = allProjects.docs.map((currentValue, index, array) => {
                            currentValue._deleted = true; // mark the document as deleted
                            return currentValue;
                        });

                        // check if there are any milestone data to delete
                        if(allProjects.length > 0){
                            // delete the already saved milestone data
                            await utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.bulkDocs(allProjects);
                        }

                        $('#determinate-progress-modal #determinate-progress').get(0).value = 100;

                        // store the all the milestone data received
                        await utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.bulkDocs(serverResponse);
                    }

                    // check if the user just completed a signin or log-in
                    if(window.sessionStorage.getItem("utopiasoftware-edpms-user-logged-in") !== "yes") { // user did NOT just log in / sign in
                        // get the userDetails data from the app database
                        utopiasoftware[utopiasoftware_app_namespace].model.userDetails =
                            (await utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.get("userDetails"));
                    }

                    // hide the progress loader
                    await Promise.all([$('#determinate-progress-modal').get(0).hide(),
                        $('#loader-modal').get(0).hide()]);
                    // display a toast to the user
                    ons.notification.toast(`<ons-icon icon="md-check" size="20px" style="color: #00D5C3"></ons-icon> Welcome ${utopiasoftware[utopiasoftware_app_namespace].model.userDetails.userDetails.firstname}`, {timeout:3000});
                }
                catch(err){
                    // display error message indicating that projects data could not be loaded
                    $('#search-project-page .project-data-download-error').css("display", "block");
                    $('#determinate-progress-modal').get(0).hide();
                    $('#loader-modal').get(0).hide();
                }
                finally {
                    window.plugins.insomnia.allowSleepAgain(); // the device can go to sleep now
                }
            }

        },

        /**
         * method is triggered when page is shown
         */
        pageShow: function(){
            // disable the swipeable feature for the app splitter
            $('ons-splitter-side').removeAttr("swipeable");

            // adjust the window/view-port settings for when the soft keyboard is displayed
            window.SoftInputMode.set('adjustPan'); // let the window/view-port 'pan' when the soft keyboard is displayed
        },


        /**
         * method is triggered when page is hidden
         */
        pageHide: function(){
            // adjust the window/view-port settings for when the soft keyboard is displayed
            // window.SoftInputMode.set('adjustResize'); // let the view 'resize' when the soft keyboard is displayed
            try {
                // remove any tooltip being displayed on all forms on the page
                $('#search-project-page [data-hint]').removeClass("hint--always hint--success hint--medium hint--rounded hint--no-animate");
                $('#search-project-page [data-hint]').removeAttr("data-hint");
                // reset the form validator object on the page
                utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.formValidator.reset();
            }
            catch(err){}
        },

        /**
         * method is triggered when page is destroyed
         */
        pageDestroy: function(){
            // remove any tooltip being displayed on all forms on the page
            $('#search-project-page [data-hint]').removeClass("hint--always hint--success hint--medium hint--rounded hint--no-animate");
            $('#search-project-page [data-hint]').removeAttr("data-hint");
            // reset the form validator object on the page
            utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.formValidator.destroy();
            // destroy the currently selected project object
            utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.
                currentlySelectedProject = null;
        },


        /**
         * method is triggered when the "Project Search" button is clicked
         *
         * @returns {Promise<void>}
         */
        async searchButtonClicked(keyEvent){

            // check which key was pressed
            if(keyEvent.which === kendo.keys.ENTER) // if the enter key was pressed
            {
                // run the validation method for the project search form
                utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.formValidator.whenValidate();
                keyEvent.preventDefault();
                keyEvent.stopImmediatePropagation();
                keyEvent.stopPropagation();
            }
        },

        /**
         * method is triggered when the download of projects data fails and
         * the user hits the "Please Retry" button
         *
         * @returns {Promise<void>}
         */
        async retryProjectDataDownloadButtonClicked(){

            // hide the page preloader
            $('#search-project-page .page-preloader').css("display", "none");
            // hide the previous project details being displayed
            $('#search-project-page #search-project-details').css("display", "none");
            // hide all previous error messages (if any)
            $('#search-project-page .no-project-found').css("display", "none");
            $('#search-project-page .project-data-download-error').css("display", "none");
            // hide the device keyboard
            Keyboard.hide();

            try {
                // call the method used to load app project data into the persistent database
                await utopiasoftware[utopiasoftware_app_namespace].appCachedData.loadProjectData(true);
                // error the project data download error message
                $('#search-project-page .project-data-download-error').css("display", "none");
            }
            catch(err){
                // display the project data download error message
                $('#search-project-page .project-data-download-error').css("display", "block");
            }
        },


        /**
         * method is triggered when the project search search/find form is successfully validated
         * @returns {Promise<void>}
         */
        async formValidated(){
            // show the page preloader
            $('#search-project-page .page-preloader').css("display", "block");
            // hide the previous project details being displayed
            $('#search-project-page #search-project-details').css("display", "none");
            // hide all previous error messages (if any)
            $('#search-project-page .no-project-found').css("display", "none");
            $('#search-project-page .project-data-download-error').css("display", "none");
            // hide the bottom toolbar of the page
            $('#search-project-page ons-bottom-toolbar').css("display", "none");

            // hide the device keyboard
            Keyboard.hide();

            try{

                // search the app database for the project id provided
                let dbQueryResult = await utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.find({
                    selector: {
                        "PROJECTID": {
                            "$eq": $('#search-project-page #search-project-search-input').get(0).value.trim().toLocaleUpperCase()
                        },
                        "TYPE": {
                          "$eq": "projects"
                        }},
                    fields: ["_id", "_rev", "PROJECTID", "TITLE", "CONTRACTSUM", "CONTRACTOR", "MDAID", "TYPE"],
                    use_index: ["ptracker-index-designdoc", "FIND_PROJECT_BY_ID_INDEX"]
                });

                // check that the requested project was found
                if(dbQueryResult.docs.length == 0){ // search project was NOT FOUND
                    // hide the page preloader
                    $('#search-project-page .page-preloader').css("display", "none");
                    // inform user that no project was found
                    $('#search-project-page .no-project-found').css("display", "block");
                    // hide the previous project details being displayed
                    $('#search-project-page #search-project-details').css("display", "none");
                    // hide all previous error messages
                    $('#search-project-page .project-data-download-error').css("display", "none");
                    // hide the bottom toolbar of the page
                    $('#search-project-page ons-bottom-toolbar').css("display", "none");
                    return; // exit the method here
                }

                // if the method gets to this point, it means a project was found
                // assign the searched project object as the currently searched and chosen project object
                utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.
                    currentlySelectedProject = dbQueryResult.docs[0];
                // create the searched project details to be displayed
                let searchedProjectDetails = `<div class="col-xs-6" style="font-weight: bold; color: #000000; padding: 1rem;">Project ID</div>`;
                searchedProjectDetails += `<div class="col-xs-6" style="color: #000000; text-transform: uppercase; padding: 1rem;">${dbQueryResult.docs[0].PROJECTID}</div>`;
                searchedProjectDetails += `<div class="col-xs-6" style="font-weight: bold; color: #000000; padding: 1rem;">Title</div>`;
                searchedProjectDetails += `<div class="col-xs-6" style="color: #000000; text-transform: capitalize; padding: 1rem;">${dbQueryResult.docs[0].TITLE}</div>`;
                searchedProjectDetails += `<div class="col-xs-6" style="font-weight: bold; color: #000000; padding: 1rem;">Contractor</div>`;
                searchedProjectDetails += `<div class="col-xs-6" style="color: #000000; text-transform: capitalize; padding: 1rem;">${dbQueryResult.docs[0].CONTRACTOR}</div>`;
                searchedProjectDetails += `<div class="col-xs-6" style="font-weight: bold; color: #000000; padding: 1rem;">Contract Sum</div>`;
                searchedProjectDetails += `<div class="col-xs-6" style="color: #000000; text-transform: capitalize; padding: 1rem;">${kendo.toString(kendo.parseFloat(dbQueryResult.docs[0].CONTRACTSUM), "n2")}</div>`;

                // attach the generated project details to the page
                $('#search-project-page #search-project-details').html(searchedProjectDetails);

                // hide the page preloader
                $('#search-project-page .page-preloader').css("display", "none");

                // perform actions to reveal result
                kendo.fx($('#search-project-page #search-project-details')).fade("in").duration(550).play();
                await Promise.
                resolve(kendo.fx($('#search-project-page ons-bottom-toolbar')).slideIn("up").duration(600).play());
                $('#search-project-page ons-bottom-toolbar').css("display", "block");
            }
            catch(err){
                // hide the page preloader
                $('#search-project-page .page-preloader').css("display", "none");
                // inform user that no project was found
                $('#search-project-page .no-project-found').css("display", "block");
                // hide the previous project details being displayed
                $('#search-project-page #search-project-details').css("display", "none");
                // hide the project data download error
                $('#search-project-page .project-data-download-error').css("display", "none");
                // hide the bottom toolbar of the page
                $('#search-project-page ons-bottom-toolbar').css("display", "none");
            }
        },


        /**
         * method is triggered when the device back button is clicked OR a similar action is triggered
         */
        backButtonClicked(){
            ons.notification.confirm('Do you want to close the app?', {title: 'Exit App',
                buttonLabels: ['No', 'Yes'], modifier: 'utopiasoftware-alert-dialog'}) // Ask for confirmation
                .then(function(index) {
                    if (index === 1) { // OK button
                        navigator.app.exitApp(); // Close the app
                    }
                });
        },


        /**
         * method is triggered when the 'Proceed' button is clicked
         */
        proceedButtonClicked(){

            // move to the project evaluation page. Also pass along the currently chosen project object
            $('#app-main-navigator').get(0).pushPage("project-evaluation-page.html", {animation: "lift-md",
            data: {projectData: utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.
                    currentlySelectedProject}});
        }

    },

    /**
     * this is the view-model/controller for the Project Evaluation page
     */
    projectEvaluationPageViewModel: {

        /**
         * used to hold the parsley form validation object for the sign-in page
         */
        formValidator: null,

        /**
         * event is triggered when page is initialised
         */
        pageInit: function(event){

            var $thisPage = $(event.target); // get the current page shown
            // disable the swipeable feature for the app splitter
            $('ons-splitter-side').removeAttr("swipeable");

            // call the function used to initialise the app page if the app is fully loaded
            loadPageOnAppReady();

            //function is used to initialise the page if the app is fully ready for execution
            async function loadPageOnAppReady(){
                // check to see if onsen is ready and if all app loading has been completed
                if(!ons.isReady() || utopiasoftware[utopiasoftware_app_namespace].model.isAppReady === false
                || !ej || !Viewer){
                    setTimeout(loadPageOnAppReady, 500); // call this function again after half a second
                    return;
                }

                // listen for the back button event
                $('#app-main-navigator').get(0).topPage.onDeviceBackButton =
                    utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.backButtonClicked;

                // show the page preloader
                /*$('#project-evaluation-page .page-preloader').css("display", "block");
                // hide the items that are not to be displayed
                $('#project-evaluation-page .project-evaluation-instructions, #project-evaluation-page .content').
                css("display", "none");

                // pick the project data object for which milestones are to be evaluated
                let projectData = $('#app-main-navigator').get(0).topPage.data.projectData;

                try{

                    // search the app database for milestones using the project id provided
                    let dbQueryResult = await utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.find({
                        selector: {
                            "PROJECTID": {
                                "$eq": projectData.PROJECTID
                            },
                            "TYPE": {
                                "$eq": "BOQ"
                            }},
                        use_index: ["ptracker-index-designdoc", "FIND_PROJECT_BY_ID_INDEX"]
                    });

                    // check if any milestones were returned
                    if(dbQueryResult.docs.length == 0) { // no milestones were found for the project

                    }
                    // create the evaluation carousel item based on the milestones retrieved

                }
                catch (e) {

                }*/

                // create the slider elements
                $('#project-evaluation-page .project-evaluation-slider').
                each(function(index, element){
                    let aSlider = new ej.inputs.Slider({
                        min: 0,
                        max: 100,
                        value: 0,
                        step: 1,
                        orientation: 'Horizontal',
                        type: 'MinRange',
                        created: function(){
                            $('.e-handle', element).text(this.value);
                        },
                        change: function(changeEvent){
                            $('.e-handle', element).text(changeEvent.value);
                        }
                    });
                    aSlider.appendTo(element);
                });

                new Viewer($('#project-evaluation-page .project-evaluation-images-container').get(0));



                // hide the loader
                $('#loader-modal').get(0).hide();
            }

        },

        /**
         * method is triggered when page is shown
         */
        pageShow: function(){
            // disable the swipeable feature for the app splitter
            $('ons-splitter-side').removeAttr("swipeable");

            // adjust the window/view-port settings for when the soft keyboard is displayed
            window.SoftInputMode.set('adjustPan'); // let the window/view-port 'pan' when the soft keyboard is displayed
        },


        /**
         * method is triggered when page is hidden
         */
        pageHide: function(){
            // adjust the window/view-port settings for when the soft keyboard is displayed
            // window.SoftInputMode.set('adjustResize'); // let the view 'resize' when the soft keyboard is displayed
        },

        /**
         * method is triggered when page is destroyed
         */
        pageDestroy: function(){
        },


        /**
         * method is triggered when the device back button is clicked OR a similar action is triggered
         */
        backButtonClicked(){

            // move to the project evaluation page
            $('#app-main-navigator').get(0).popPage();
        },

        /**
         * method is triggered when the "project evaluation carousel" is changed
         * @param event
         */
        carouselChanged(event){
            // change the css display the prev fab button
            $('#project-evaluation-prev-button').css("display", "inline-block");
             // check if the carousel is at the last item
            if(event.originalEvent.activeIndex === 2) { // this is the last carousel item, so hide the next slide button
                // hide the next fab button
                $('#project-evaluation-next-button').css("transform", "scale(0)");
            }
            else if(event.originalEvent.activeIndex === 0) { // this is the first carousel item, so hide the prev slide button
                // hide the prev fab button
                $('#project-evaluation-prev-button').css("transform", "scale(0)");
            }
            else { // this is not the first or last item
                $('#project-evaluation-prev-button,#project-evaluation-next-button').css("transform", "scale(1)");
            }

            // change the milestone number
            $('#project-evaluation-milestone-badge').html(`Milestone ${event.originalEvent.activeIndex + 1}`)

        },


        /**
         * method is triggered when the "prev button" for the carousel is clicked
         */
        prevButtonClicked(){
            $('#project-evaluation-page #project-evaluation-carousel').get(0).prev();
        },

        /**
         * method is triggered when the "next button" for the carousel is clicked
         */
        nextButtonClicked(){
            $('#project-evaluation-page #project-evaluation-carousel').get(0).next();
        }

    }
};


