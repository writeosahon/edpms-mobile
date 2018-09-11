'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
    startup: function startup() {

        // initialise the app libraries and plugins
        ons.ready(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            // set the default handler for the app
                            ons.setDefaultDeviceBackButtonListener(function () {
                                // does nothing for now!!
                            });

                            // displaying prepping message
                            $('#loader-modal-message').html("Loading App...");
                            $('#loader-modal').get(0).show(); // show loader


                            if (window.localStorage.getItem("utopiasoftware-edpms-app-status") && window.localStorage.getItem("utopiasoftware-edpms-app-status") !== "") {
                                // there is a previous logged in user
                                // load the app main page
                                $('ons-splitter').get(0).content.load("app-main-template");
                            } else {
                                // there is no previously logged in user
                                // load the login page
                                $('ons-splitter').get(0).content.load("login-template");
                            }

                            // START ALL CORDOVA PLUGINS CONFIGURATIONS
                            try {
                                // lock the orientation of the device to 'PORTRAIT'
                                screen.orientation.lock('portrait');
                            } catch (err) {}

                            _context.prev = 5;
                            // START ALL THE CORDOVA PLUGINS CONFIGURATION WHICH REQUIRE PROMISE SYNTAX

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
                            if (!window.localStorage.getItem("utopiasoftware-edpms-rid") || window.localStorage.getItem("utopiasoftware-edpms-rid") === "") {
                                window.localStorage.setItem("utopiasoftware-edpms-rid", Random.uuid4(Random.engines.browserCrypto));
                            }
                            _context.next = 11;
                            return new Promise(function (resolve, reject) {
                                utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.crypto(window.localStorage.getItem("utopiasoftware-edpms-rid"), { ignore: '_attachments',
                                    cb: function cb(err, key) {
                                        if (err) {
                                            // there is an error
                                            reject(err); // reject Promise
                                        } else {
                                            // no error
                                            resolve(key); // resolve Promise
                                        }
                                    } });
                            });

                        case 11:
                            _context.next = 13;
                            return Promise.all([utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.createIndex({
                                index: {
                                    fields: ['TYPE'],
                                    name: 'DOC_TYPE_INDEX',
                                    ddoc: 'ptracker-index-designdoc'
                                } }), utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.createIndex({
                                index: {
                                    fields: ['PROJECTID', 'TYPE'],
                                    name: 'FIND_PROJECT_BY_ID_INDEX',
                                    ddoc: 'ptracker-index-designdoc'
                                }
                            })]);

                        case 13:
                            _context.next = 18;
                            break;

                        case 15:
                            _context.prev = 15;
                            _context.t0 = _context['catch'](5);

                            console.log("ERROR");

                        case 18:
                            _context.prev = 18;

                            // set status bar color
                            StatusBar.backgroundColorByHexString("#00B2A0");
                            navigator.splashscreen.hide(); // hide the splashscreen
                            utopiasoftware[utopiasoftware_app_namespace].model.isAppReady = true; // flag that app is fullyt loaded and ready
                            return _context.finish(18);

                        case 23:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[5, 15, 18, 23]]);
        }))); // end of ons.ready()
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
        pageInit: function pageInit(event) {

            //function is used to initialise the page if the app is fully ready for execution
            var loadPageOnAppReady = function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    if (!(!ons.isReady() || utopiasoftware[utopiasoftware_app_namespace].model.isAppReady === false)) {
                                        _context2.next = 3;
                                        break;
                                    }

                                    setTimeout(loadPageOnAppReady, 500); // call this function again after half a second
                                    return _context2.abrupt('return');

                                case 3:

                                    // listen for the back button event
                                    $('#login-navigator').get(0).topPage.onDeviceBackButton = function () {
                                        ons.notification.confirm('Do you want to close the app?', { title: 'Exit App',
                                            buttonLabels: ['No', 'Yes'], modifier: 'utopiasoftware-alert-dialog' }) // Ask for confirmation
                                        .then(function (index) {
                                            if (index === 1) {
                                                // OK button
                                                navigator.app.exitApp(); // Close the app
                                            }
                                        });
                                    };

                                    // adjust the window/view-port settings for when the soft keyboard is displayed
                                    //window.SoftInputMode.set('adjustPan'); // let the window/view-port 'pan' when the soft keyboard is displayed
                                    window.SoftInputMode.set('adjustResize');

                                    // initialise the login form validation
                                    utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.formValidator = $('#login-form').parsley();

                                    // listen for log in form field validation failure event
                                    utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.formValidator.on('field:error', function (fieldInstance) {
                                        // get the element that triggered the field validation error and use it to display tooltip
                                        // display tooltip
                                        $(fieldInstance.$element).addClass("hint--always hint--success hint--medium hint--rounded hint--no-animate");
                                        $(fieldInstance.$element).attr("data-hint", fieldInstance.getErrorsMessages()[0]);
                                    });

                                    // listen for log in form field validation success event
                                    utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.formValidator.on('field:success', function (fieldInstance) {
                                        // remove tooltip from element
                                        $(fieldInstance.$element).removeClass("hint--always hint--success hint--medium hint--rounded hint--no-animate");
                                        $(fieldInstance.$element).removeAttr("data-hint");
                                    });

                                    // listen for log in form validation success
                                    utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.formValidator.on('form:success', utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.formValidated);

                                    // hide the loader
                                    $('#loader-modal').get(0).hide();

                                    //$('#determinate-progress-modal').get(0).show();

                                case 10:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));

                return function loadPageOnAppReady() {
                    return _ref2.apply(this, arguments);
                };
            }();

            var $thisPage = $(event.target); // get the current page shown
            // disable the swipeable feature for the app splitter
            $('ons-splitter-side').removeAttr("swipeable");

            // call the function used to initialise the app page if the app is fully loaded
            loadPageOnAppReady();
        },

        /**
         * method is triggered when page is shown
         */
        pageShow: function pageShow() {
            // disable the swipeable feature for the app splitter
            $('ons-splitter-side').removeAttr("swipeable");

            // adjust the window/view-port settings for when the soft keyboard is displayed
            window.SoftInputMode.set('adjustResize'); // let the window/view-port 'pan' when the soft keyboard is displayed

            // listen for when the device keyboard is hidden
            window.addEventListener("keyboardDidHide", utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.keyboardHidden);

            // listen for when the device keyboard is shown
            window.addEventListener("keyboardDidShow", utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.keyboardShown);
        },

        /**
         * method is triggered when page is hidden
         */
        pageHide: function pageHide() {
            // adjust the window/view-port settings for when the soft keyboard is displayed
            // window.SoftInputMode.set('adjustResize'); // let the view 'resize' when the soft keyboard is displayed

            try {
                // remove the listeners registered to listen for when the device keyboard is hidden and shown
                window.removeEventListener("keyboardDidHide", utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.keyboardHidden);
                window.addEventListener("keyboardDidShow", utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.keyboardShown);
                // remove any tooltip being displayed on all forms on the page
                $('#login-page [data-hint]').removeClass("hint--always hint--success hint--medium hint--rounded hint--no-animate");
                $('#login-page [data-hint]').removeAttr("data-hint");
                // reset the form validator object on the page
                utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.formValidator.reset();
            } catch (err) {}
        },

        /**
         * method is triggered when page is destroyed
         */
        pageDestroy: function pageDestroy() {

            try {
                // remove any tooltip being displayed on all forms on the page
                $('#login-page [data-hint]').removeClass("hint--always hint--success hint--medium hint--rounded hint--no-animate");
                $('#login-page [data-hint]').removeAttr("data-hint");
                // reset the form validator object on the page
                utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.formValidator.destroy();
            } catch (err) {}
        },

        /**
         * method will be triggered when the device keyboard is hidden. This is an event listener
         */
        keyboardHidden: function keyboardHidden() {
            // show the title banner on the home page
            $('#login-page .login-title-banner').css("display", "block");
        },


        /**
         * method will be triggered when the device keyboard is shown. This is an event listener
         */
        keyboardShown: function keyboardShown() {
            // hide the title banner on the home page
            $('#login-page .login-title-banner').css("display", "none");
        },


        /**
         * method is triggered when the "Sign In / Log In" button is clicked
         *
         * @returns {Promise<void>}
         */
        loginButtonClicked: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:

                                // run the validation method for the sign-in form
                                utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.formValidator.whenValidate();

                            case 1:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function loginButtonClicked() {
                return _ref3.apply(this, arguments);
            }

            return loginButtonClicked;
        }(),


        /**
         * method is triggered when the enter button is clicked on the device keyboard
         *
         * @param keyEvent
         * @returns {Promise<void>}
         */
        enterButtonClicked: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(keyEvent) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                // check which key was pressed
                                if (keyEvent.which === kendo.keys.ENTER) // if the enter key was pressed
                                    {
                                        // prevent the default action from occurring
                                        keyEvent.preventDefault();
                                        keyEvent.stopImmediatePropagation();
                                        keyEvent.stopPropagation();
                                        // hide the device keyboard
                                        Keyboard.hide();
                                    }

                            case 1:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function enterButtonClicked(_x) {
                return _ref4.apply(this, arguments);
            }

            return enterButtonClicked;
        }(),


        /**
         * method is triggered when the form is successfully validated
         *
         * @returns {Promise<void>}
         */
        formValidated: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var formData, serverResponse, databaseResponse;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                if (!(navigator.connection.type === Connection.NONE)) {
                                    _context5.next = 3;
                                    break;
                                }

                                // no Internet Connection
                                // inform the user that they cannot proceed without Internet
                                window.plugins.toast.showWithOptions({
                                    message: "You cannot sign in without an Internet Connection",
                                    duration: 4000,
                                    position: "top",
                                    styling: {
                                        opacity: 1,
                                        backgroundColor: '#ff0000', //red
                                        textColor: '#FFFFFF',
                                        textSize: 14
                                    }
                                }, function (toastEvent) {
                                    if (toastEvent && toastEvent.event == "touch") {
                                        // user tapped the toast, so hide toast immediately
                                        window.plugins.toast.hide();
                                    }
                                });

                                return _context5.abrupt('return');

                            case 3:

                                // inform user that login validation is taking place
                                $('#loader-modal #loader-modal-message').html("Signing You In...");
                                _context5.next = 6;
                                return $('#loader-modal').get(0).show();

                            case 6:
                                _context5.prev = 6;

                                // create the form data to be submitted
                                formData = {
                                    username: $('#login-page #login-email').val().trim(),
                                    password: $('#login-page #login-password').val().trim()
                                };
                                _context5.next = 10;
                                return Promise.resolve($.ajax({
                                    url: utopiasoftware[utopiasoftware_app_namespace].model.appBaseUrl + "/mobile/login.php",
                                    type: "post",
                                    contentType: "application/x-www-form-urlencoded",
                                    beforeSend: function beforeSend(jqxhr) {
                                        jqxhr.setRequestHeader("X-PTRACKER-APP", "mobile");
                                    },
                                    dataType: "text",
                                    timeout: 240000, // wait for 4 minutes before timeout of request
                                    processData: true,
                                    data: formData
                                }));

                            case 10:
                                serverResponse = _context5.sent;

                                // convert the response to an object
                                serverResponse = JSON.parse(serverResponse.trim());

                                // check if the user login was successful

                                if (!(serverResponse.status !== "success")) {
                                    _context5.next = 14;
                                    break;
                                }

                                throw serverResponse;

                            case 14:

                                // save the user's details
                                utopiasoftware[utopiasoftware_app_namespace].model.userDetails = {
                                    _id: "userDetails",
                                    userDetails: { firstname: serverResponse.firstname, username: serverResponse.username },
                                    type: "userDetails",
                                    _rev: window.localStorage.getItem("utopiasoftware-edpms-app-status") && window.localStorage.getItem("utopiasoftware-edpms-app-status") !== "" ? window.localStorage.getItem("utopiasoftware-edpms-app-status") : null
                                };

                                // check if the user wants to remain signed in

                                if (!$('#login-page #login-remember-me').get(0).checked) {
                                    _context5.next = 22;
                                    break;
                                }

                                _context5.next = 18;
                                return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.put(utopiasoftware[utopiasoftware_app_namespace].model.userDetails);

                            case 18:
                                databaseResponse = _context5.sent;

                                // save the returned user details rev id
                                window.localStorage.setItem("utopiasoftware-edpms-app-status", databaseResponse.rev);
                                _context5.next = 23;
                                break;

                            case 22:
                                // user does not want to remain signed in
                                // remove the user details rev id from storage
                                window.localStorage.removeItem("utopiasoftware-edpms-app-status");

                            case 23:

                                // flag that the user just completed a sign in for this session
                                window.sessionStorage.setItem("utopiasoftware-edpms-user-logged-in", "yes");

                                // move user to the main menu page
                                _context5.next = 26;
                                return Promise.all([$('ons-splitter').get(0).content.load("app-main-template"), $('#loader-modal').get(0).hide()]);

                            case 26:
                                _context5.next = 32;
                                break;

                            case 28:
                                _context5.prev = 28;
                                _context5.t0 = _context5['catch'](6);

                                $('#loader-modal').get(0).hide();
                                ons.notification.alert(_context5.t0.message, { title: '<span style="color: red">Sign In Failed</span>',
                                    buttonLabels: ['OK'], modifier: 'utopiasoftware-alert-dialog' });

                            case 32:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this, [[6, 28]]);
            }));

            function formValidated() {
                return _ref5.apply(this, arguments);
            }

            return formValidated;
        }()
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
        pageInit: function pageInit(event) {

            //function is used to initialise the page if the app is fully ready for execution
            var loadPageOnAppReady = function () {
                var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                    var serverResponse, allProjects;
                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                        while (1) {
                            switch (_context6.prev = _context6.next) {
                                case 0:
                                    if (!(!ons.isReady() || utopiasoftware[utopiasoftware_app_namespace].model.isAppReady === false)) {
                                        _context6.next = 3;
                                        break;
                                    }

                                    setTimeout(loadPageOnAppReady, 500); // call this function again after half a second
                                    return _context6.abrupt('return');

                                case 3:

                                    // listen for the back button event
                                    $('#app-main-navigator').get(0).topPage.onDeviceBackButton = utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.backButtonClicked;

                                    // initialise the login form validation
                                    utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.formValidator = $('#search-project-form').parsley();

                                    // listen for log in form field validation failure event
                                    utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.formValidator.on('field:error', function (fieldInstance) {
                                        // get the element that triggered the field validation error and use it to display tooltip
                                        // display tooltip
                                        $(fieldInstance.$element).addClass("hint--always hint--success hint--medium hint--rounded hint--no-animate");
                                        $(fieldInstance.$element).attr("data-hint", fieldInstance.getErrorsMessages()[0]);
                                    });

                                    // listen for log in form field validation success event
                                    utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.formValidator.on('field:success', function (fieldInstance) {
                                        // remove tooltip from element
                                        $(fieldInstance.$element).removeClass("hint--always hint--success hint--medium hint--rounded hint--no-animate");
                                        $(fieldInstance.$element).removeAttr("data-hint");
                                    });

                                    // listen for log in form validation success
                                    utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.formValidator.on('form:success', utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.formValidated);

                                    _context6.prev = 8;

                                    // keep device awake during the downloading process
                                    window.plugins.insomnia.keepAwake();
                                    // check if the user just completed a signin or log-in

                                    if (!(window.sessionStorage.getItem("utopiasoftware-edpms-user-logged-in") === "yes")) {
                                        _context6.next = 46;
                                        break;
                                    }

                                    // beginning uploading app data
                                    $('#determinate-progress-modal .modal-message').html('Downloading projects data for offline use...');
                                    $('#determinate-progress-modal').get(0).show();
                                    $('#determinate-progress-modal #determinate-progress').get(0).value = 30;

                                    // get the projects data to be cached
                                    _context6.next = 16;
                                    return Promise.resolve($.ajax({
                                        url: utopiasoftware[utopiasoftware_app_namespace].model.appBaseUrl + "/mobile/loadprojects.php",
                                        type: "post",
                                        contentType: "application/x-www-form-urlencoded",
                                        beforeSend: function beforeSend(jqxhr) {
                                            jqxhr.setRequestHeader("X-PTRACKER-APP", "mobile");
                                        },
                                        dataType: "text",
                                        timeout: 240000, // wait for 4 minutes before timeout of request
                                        processData: true,
                                        data: {}
                                    }));

                                case 16:
                                    serverResponse = _context6.sent;


                                    serverResponse = JSON.parse(serverResponse); // convert the response to JSON object

                                    $('#determinate-progress-modal #determinate-progress').get(0).value = 35;

                                    // delete all previous project data/docs
                                    _context6.next = 21;
                                    return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.find({
                                        selector: {
                                            "TYPE": {
                                                "$eq": "projects"
                                            } },
                                        fields: ["_id", "_rev", "PROJECTID", "TITLE", "CONTRACTSUM", "CONTRACTOR", "MDAID", "TYPE"],
                                        use_index: ["ptracker-index-designdoc", "DOC_TYPE_INDEX"]
                                    });

                                case 21:
                                    allProjects = _context6.sent;


                                    // get all the returned projects and delete them
                                    allProjects = allProjects.docs.map(function (currentValue, index, array) {
                                        currentValue._deleted = true; // mark the document as deleted
                                        return currentValue;
                                    });

                                    // check if there are any project data to delete

                                    if (!(allProjects.length > 0)) {
                                        _context6.next = 26;
                                        break;
                                    }

                                    _context6.next = 26;
                                    return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.bulkDocs(allProjects);

                                case 26:

                                    $('#determinate-progress-modal #determinate-progress').get(0).value = 45;

                                    // store the all the project data received
                                    _context6.next = 29;
                                    return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.bulkDocs(serverResponse);

                                case 29:
                                    // inform the user that milestone data is being downloaded for offline use
                                    $('#determinate-progress-modal .modal-message').html('Downloading milestones data for offline use...');

                                    $('#determinate-progress-modal #determinate-progress').get(0).value = 50;

                                    // get the milestones data to be cached
                                    _context6.next = 33;
                                    return Promise.resolve($.ajax({
                                        url: utopiasoftware[utopiasoftware_app_namespace].model.appBaseUrl + "/mobile/loadboq.php",
                                        type: "post",
                                        contentType: "application/x-www-form-urlencoded",
                                        beforeSend: function beforeSend(jqxhr) {
                                            jqxhr.setRequestHeader("X-PTRACKER-APP", "mobile");
                                        },
                                        dataType: "text",
                                        timeout: 240000, // wait for 4 minutes before timeout of request
                                        processData: true,
                                        data: {}
                                    }));

                                case 33:
                                    serverResponse = _context6.sent;


                                    serverResponse = JSON.parse(serverResponse); // convert the response to JSON object

                                    $('#determinate-progress-modal #determinate-progress').get(0).value = 75;

                                    // delete all previous milestones /docs
                                    _context6.next = 38;
                                    return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.find({
                                        selector: {
                                            "TYPE": {
                                                "$eq": "BOQ"
                                            } },
                                        fields: ["_id", "_rev", "CATEGORY", "AMOUNT", "RATE", "PROJECTID", "DDATE", "BOQID", "TYPE"],
                                        use_index: ["ptracker-index-designdoc", "DOC_TYPE_INDEX"]
                                    });

                                case 38:
                                    allProjects = _context6.sent;


                                    // get all the returned milestones and delete them
                                    allProjects = allProjects.docs.map(function (currentValue, index, array) {
                                        currentValue._deleted = true; // mark the document as deleted
                                        return currentValue;
                                    });

                                    // check if there are any milestone data to delete

                                    if (!(allProjects.length > 0)) {
                                        _context6.next = 43;
                                        break;
                                    }

                                    _context6.next = 43;
                                    return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.bulkDocs(allProjects);

                                case 43:

                                    $('#determinate-progress-modal #determinate-progress').get(0).value = 100;

                                    // store the all the milestone data received
                                    _context6.next = 46;
                                    return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.bulkDocs(serverResponse);

                                case 46:
                                    if (!(window.sessionStorage.getItem("utopiasoftware-edpms-user-logged-in") !== "yes")) {
                                        _context6.next = 50;
                                        break;
                                    }

                                    _context6.next = 49;
                                    return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.get("userDetails");

                                case 49:
                                    utopiasoftware[utopiasoftware_app_namespace].model.userDetails = _context6.sent;

                                case 50:
                                    _context6.next = 52;
                                    return Promise.all([$('#determinate-progress-modal').get(0).hide(), $('#loader-modal').get(0).hide()]);

                                case 52:
                                    // display a toast to the user
                                    ons.notification.toast('<ons-icon icon="md-check" size="20px" style="color: #00D5C3"></ons-icon> <span style="text-transform: capitalize; display: inline-block; margin-left: 1em">Welcome ' + utopiasoftware[utopiasoftware_app_namespace].model.userDetails.userDetails.firstname + '</span>', { timeout: 3000 });
                                    _context6.next = 60;
                                    break;

                                case 55:
                                    _context6.prev = 55;
                                    _context6.t0 = _context6['catch'](8);

                                    // display error message indicating that projects data could not be loaded
                                    $('#search-project-page .project-data-download-error').css("display", "block");
                                    $('#determinate-progress-modal').get(0).hide();
                                    $('#loader-modal').get(0).hide();

                                case 60:
                                    _context6.prev = 60;

                                    window.plugins.insomnia.allowSleepAgain(); // the device can go to sleep now
                                    return _context6.finish(60);

                                case 63:
                                case 'end':
                                    return _context6.stop();
                            }
                        }
                    }, _callee6, this, [[8, 55, 60, 63]]);
                }));

                return function loadPageOnAppReady() {
                    return _ref6.apply(this, arguments);
                };
            }();

            var $thisPage = $(event.target); // get the current page shown
            // disable the swipeable feature for the app splitter
            $('ons-splitter-side').removeAttr("swipeable");

            // call the function used to initialise the app page if the app is fully loaded
            loadPageOnAppReady();
        },

        /**
         * method is triggered when page is shown
         */
        pageShow: function pageShow() {
            // disable the swipeable feature for the app splitter
            $('ons-splitter-side').removeAttr("swipeable");

            // adjust the window/view-port settings for when the soft keyboard is displayed
            window.SoftInputMode.set('adjustPan'); // let the window/view-port 'pan' when the soft keyboard is displayed
        },

        /**
         * method is triggered when page is hidden
         */
        pageHide: function pageHide() {
            // adjust the window/view-port settings for when the soft keyboard is displayed
            // window.SoftInputMode.set('adjustResize'); // let the view 'resize' when the soft keyboard is displayed
            try {
                // remove any tooltip being displayed on all forms on the page
                $('#search-project-page [data-hint]').removeClass("hint--always hint--success hint--medium hint--rounded hint--no-animate");
                $('#search-project-page [data-hint]').removeAttr("data-hint");
                // reset the form validator object on the page
                utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.formValidator.reset();
            } catch (err) {}
        },

        /**
         * method is triggered when page is destroyed
         */
        pageDestroy: function pageDestroy() {
            // remove any tooltip being displayed on all forms on the page
            $('#search-project-page [data-hint]').removeClass("hint--always hint--success hint--medium hint--rounded hint--no-animate");
            $('#search-project-page [data-hint]').removeAttr("data-hint");
            // reset the form validator object on the page
            utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.formValidator.destroy();
            // destroy the currently selected project object
            utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.currentlySelectedProject = null;
        },

        /**
         * method is triggered when the "Project Search" button is clicked
         *
         * @returns {Promise<void>}
         */
        searchButtonClicked: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(keyEvent) {
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:

                                // check which key was pressed
                                if (keyEvent.which === kendo.keys.ENTER) // if the enter key was pressed
                                    {
                                        // run the validation method for the project search form
                                        utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.formValidator.whenValidate();
                                        keyEvent.preventDefault();
                                        keyEvent.stopImmediatePropagation();
                                        keyEvent.stopPropagation();
                                    }

                            case 1:
                            case 'end':
                                return _context7.stop();
                        }
                    }
                }, _callee7, this);
            }));

            function searchButtonClicked(_x2) {
                return _ref7.apply(this, arguments);
            }

            return searchButtonClicked;
        }(),


        /**
         * method is triggered when the download of projects data fails and
         * the user hits the "Please Retry" button
         *
         * @returns {Promise<void>}
         */
        retryProjectDataDownloadButtonClicked: function () {
            var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                        switch (_context8.prev = _context8.next) {
                            case 0:

                                // hide the page preloader
                                $('#search-project-page .page-preloader').css("display", "none");
                                // hide the previous project details being displayed
                                $('#search-project-page #search-project-details').css("display", "none");
                                // hide all previous error messages (if any)
                                $('#search-project-page .no-project-found').css("display", "none");
                                $('#search-project-page .project-data-download-error').css("display", "none");
                                // hide the device keyboard
                                Keyboard.hide();

                                _context8.prev = 5;
                                _context8.next = 8;
                                return utopiasoftware[utopiasoftware_app_namespace].appCachedData.loadProjectData(true);

                            case 8:
                                // error the project data download error message
                                $('#search-project-page .project-data-download-error').css("display", "none");
                                _context8.next = 14;
                                break;

                            case 11:
                                _context8.prev = 11;
                                _context8.t0 = _context8['catch'](5);

                                // display the project data download error message
                                $('#search-project-page .project-data-download-error').css("display", "block");

                            case 14:
                            case 'end':
                                return _context8.stop();
                        }
                    }
                }, _callee8, this, [[5, 11]]);
            }));

            function retryProjectDataDownloadButtonClicked() {
                return _ref8.apply(this, arguments);
            }

            return retryProjectDataDownloadButtonClicked;
        }(),


        /**
         * method is triggered when the project search search/find form is successfully validated
         * @returns {Promise<void>}
         */
        formValidated: function () {
            var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                var dbQueryResult, searchedProjectDetails;
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                        switch (_context9.prev = _context9.next) {
                            case 0:
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

                                _context9.prev = 6;
                                _context9.next = 9;
                                return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.find({
                                    selector: {
                                        "PROJECTID": {
                                            "$eq": $('#search-project-page #search-project-search-input').get(0).value.trim().toLocaleUpperCase()
                                        },
                                        "TYPE": {
                                            "$eq": "projects"
                                        } },
                                    fields: ["_id", "_rev", "PROJECTID", "TITLE", "CONTRACTSUM", "CONTRACTOR", "MDAID", "TYPE"],
                                    use_index: ["ptracker-index-designdoc", "FIND_PROJECT_BY_ID_INDEX"]
                                });

                            case 9:
                                dbQueryResult = _context9.sent;

                                if (!(dbQueryResult.docs.length == 0)) {
                                    _context9.next = 17;
                                    break;
                                }

                                // search project was NOT FOUND
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
                                return _context9.abrupt('return');

                            case 17:

                                // if the method gets to this point, it means a project was found
                                // assign the searched project object as the currently searched and chosen project object
                                utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.currentlySelectedProject = dbQueryResult.docs[0];
                                // create the searched project details to be displayed
                                searchedProjectDetails = '<div class="col-xs-6" style="font-weight: bold; color: #000000; padding: 1rem;">Project ID</div>';

                                searchedProjectDetails += '<div class="col-xs-6" style="color: #000000; text-transform: uppercase; padding: 1rem;">' + dbQueryResult.docs[0].PROJECTID + '</div>';
                                searchedProjectDetails += '<div class="col-xs-6" style="font-weight: bold; color: #000000; padding: 1rem;">Title</div>';
                                searchedProjectDetails += '<div class="col-xs-6" style="color: #000000; text-transform: capitalize; padding: 1rem;">' + dbQueryResult.docs[0].TITLE + '</div>';
                                searchedProjectDetails += '<div class="col-xs-6" style="font-weight: bold; color: #000000; padding: 1rem;">Contractor</div>';
                                searchedProjectDetails += '<div class="col-xs-6" style="color: #000000; text-transform: capitalize; padding: 1rem;">' + dbQueryResult.docs[0].CONTRACTOR + '</div>';
                                searchedProjectDetails += '<div class="col-xs-6" style="font-weight: bold; color: #000000; padding: 1rem;">Contract Sum</div>';
                                searchedProjectDetails += '<div class="col-xs-6" style="color: #000000; text-transform: capitalize; padding: 1rem;">' + kendo.toString(kendo.parseFloat(dbQueryResult.docs[0].CONTRACTSUM), "n2") + '</div>';

                                // attach the generated project details to the page
                                $('#search-project-page #search-project-details').html(searchedProjectDetails);

                                // hide the page preloader
                                $('#search-project-page .page-preloader').css("display", "none");

                                // perform actions to reveal result
                                kendo.fx($('#search-project-page #search-project-details')).fade("in").duration(550).play();
                                _context9.next = 31;
                                return Promise.resolve(kendo.fx($('#search-project-page ons-bottom-toolbar')).slideIn("up").duration(600).play());

                            case 31:
                                $('#search-project-page ons-bottom-toolbar').css("display", "block");
                                _context9.next = 41;
                                break;

                            case 34:
                                _context9.prev = 34;
                                _context9.t0 = _context9['catch'](6);

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

                            case 41:
                            case 'end':
                                return _context9.stop();
                        }
                    }
                }, _callee9, this, [[6, 34]]);
            }));

            function formValidated() {
                return _ref9.apply(this, arguments);
            }

            return formValidated;
        }(),


        /**
         * method is triggered when the device back button is clicked OR a similar action is triggered
         */
        backButtonClicked: function backButtonClicked() {
            ons.notification.confirm('Do you want to close the app?', { title: 'Exit App',
                buttonLabels: ['No', 'Yes'], modifier: 'utopiasoftware-alert-dialog' }) // Ask for confirmation
            .then(function (index) {
                if (index === 1) {
                    // OK button
                    navigator.app.exitApp(); // Close the app
                }
            });
        },


        /**
         * method is triggered when the 'Proceed' button is clicked
         */
        proceedButtonClicked: function proceedButtonClicked() {

            // move to the project evaluation page. Also pass along the currently chosen project object
            $('#app-main-navigator').get(0).pushPage("project-evaluation-page.html", { animation: "lift-md",
                data: { projectData: utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.currentlySelectedProject } });
        }
    },

    /**
     * this is the view-model/controller for the Project Evaluation page
     */
    projectEvaluationPageViewModel: {

        /**
         * used to hold the parsley form validation object for the page
         */
        formValidator: null,

        /**
         * used to hold the Viewer object used to display the evaluations snapshots
         */
        pictureViewer: null,

        /**
         * used to hold the retrieved project milestones
         */
        projectMilestones: null,

        /**
         * holds the project picturesUrls array.
         * the 1st element of the array is ALWAYS null with subsequent elements holds the url for the pictures
         */
        projectPicturesUrls: [null],

        /**
         * holds the Google Map object used to display the current location of the project being evaluated
         */
        projectEvaluationMap: null,

        /**
         * holds the Geo location object for the project. The object is gotten from the device's GPS
         */
        projectGeoPosition: null,

        /**
         * this property indicates if the picture viewer widget is being displayed or not
         */
        isPictureViewerShowing: false,

        /**
         * property indicates if project evaluation has commenced on the selected/chosen project.
         * Project evaluation is marked has 'started' if any of the initial states for evaluation is changed by the user
         */
        hasProjectEvaluationStarted: false,

        /**
         * event is triggered when page is initialised
         */
        pageInit: function pageInit(event) {

            //function is used to initialise the page if the app is fully ready for execution
            var loadPageOnAppReady = function () {
                var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                    var projectData, dbQueryResult, carouselContent, index;
                    return regeneratorRuntime.wrap(function _callee10$(_context10) {
                        while (1) {
                            switch (_context10.prev = _context10.next) {
                                case 0:
                                    if (!(!ons.isReady() || utopiasoftware[utopiasoftware_app_namespace].model.isAppReady === false || !ej || !Viewer)) {
                                        _context10.next = 3;
                                        break;
                                    }

                                    setTimeout(loadPageOnAppReady, 500); // call this function again after half a second
                                    return _context10.abrupt('return');

                                case 3:

                                    // listen for the back button event
                                    $('#app-main-navigator').get(0).topPage.onDeviceBackButton = utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.backButtonClicked;

                                    // show the page preloader
                                    $('#project-evaluation-page .page-preloader').css("display", "block");
                                    // hide the items that are not to be displayed
                                    $('#project-evaluation-page .project-evaluation-instructions, ' + '#project-evaluation-page .content, #project-evaluation-page .no-milestone-found').css("display", "none");

                                    // pick the project data object for which milestones are to be evaluated
                                    projectData = $('#app-main-navigator').get(0).topPage.data.projectData;
                                    _context10.prev = 7;
                                    _context10.next = 10;
                                    return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.find({
                                        selector: {
                                            "PROJECTID": {
                                                "$eq": projectData.PROJECTID
                                            },
                                            "TYPE": {
                                                "$eq": "BOQ"
                                            } },
                                        use_index: ["ptracker-index-designdoc", "FIND_PROJECT_BY_ID_INDEX"]
                                    });

                                case 10:
                                    dbQueryResult = _context10.sent;

                                    if (!(dbQueryResult.docs.length == 0)) {
                                        _context10.next = 13;
                                        break;
                                    }

                                    throw "error";

                                case 13:

                                    // if the code gets to this point, milestones were returned
                                    utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectMilestones = dbQueryResult.docs; // update the current project milestones

                                    // create the evaluation carousel item based on the milestones retrieved
                                    carouselContent = "";

                                    for (index = 0; index < dbQueryResult.docs.length; index++) {
                                        carouselContent = '\n                        <ons-carousel-item style="overflow-y: auto">\n                            <ons-card>\n                                <div style="font-size: 1.2em">\n                                    ' + dbQueryResult.docs[index].CATEGORY + '\n                                </div>\n                                <div class="project-evaluation-slider"></div>\n                                <div class="project-evaluation-milestone-amount" style="margin-top: 1em; font-size: 1em;">\n                                    <span style="display: inline-block; font-style: italic; margin-right: 1em;">Milestone Value </span> \n                                    ' + kendo.toString(kendo.parseFloat(dbQueryResult.docs[index].AMOUNT), "n2") + '\n                                </div>\n                                <div class="project-evaluation-milestone-current-value" style="font-size: 1em;">\n                                    <span style="display: inline-block; font-style: italic; margin-right: 1em;">Value Completed </span> \n                                    ' + kendo.toString(kendo.parseFloat(0), "n2") + '\n                                </div>\n                            </ons-card>\n                        </ons-carousel-item>';
                                        $('#project-evaluation-page #project-evaluation-carousel').append(carouselContent);
                                    } // end of for loop

                                    // append the carousel content used for displaying evaluation pictures
                                    carouselContent = '\n                    <ons-carousel-item style="overflow-y: scroll">\n                        <div class="row project-evaluation-images-container" style="margin-top: 1.5em;">\n                            <div class="col-xs-6" style="padding: 0.5em; position: relative">\n                                <div style="position: absolute; top: 5px;">\n                                    <ons-speed-dial id="project-evaluation-picture-speed-dial-1" direction="down">\n                                        <ons-fab modifier="utopiasoftware-pic-capture-speed-dial"\n                                                 class="utopiasoftware-pic-capture-speed-dial" \n                                                 onclick="utopiasoftware[utopiasoftware_app_namespace].controller.\n                                                 projectEvaluationPageViewModel.pictureSpeedDialClicked(1)">\n                                            <ons-icon icon="md-image-o"></ons-icon>\n                                        </ons-fab>\n                                        <ons-speed-dial-item modifier="utopiasoftware-pic-capture-speed-dial-item"\n                                                             class="utopiasoftware-pic-capture-speed-dial" \n                                                             onclick="utopiasoftware[utopiasoftware_app_namespace].controller.\n                                                 projectEvaluationPageViewModel.pictureCaptureButtonClicked(1)">\n                                            <ons-icon icon="md-camera"></ons-icon>\n                                        </ons-speed-dial-item>\n                                        <ons-speed-dial-item modifier="utopiasoftware-pic-capture-speed-dial-item"\n                                                             class="utopiasoftware-pic-capture-speed-dial" \n                                                             onclick="utopiasoftware[utopiasoftware_app_namespace].controller.\n                                                 projectEvaluationPageViewModel.deletePictureButtonClicked(1)">\n                                            <ons-icon icon="md-delete"></ons-icon>\n                                        </ons-speed-dial-item>\n                                    </ons-speed-dial>\n                                </div>\n                                <img id="project-evaluation-picture-1" src="css/app-images/project-evaluation-photo-placeholder.png" style="width: 100%; border: 2px darkgray groove" alt="Picture 1">\n                            </div>\n                            <div class="col-xs-6" style="padding: 0.5em; position: relative">\n                                <div style="position: absolute; top: 5px;">\n                                    <ons-speed-dial id="project-evaluation-picture-speed-dial-2" direction="down">\n                                        <ons-fab modifier="utopiasoftware-pic-capture-speed-dial"\n                                                 class="utopiasoftware-pic-capture-speed-dial" \n                                                 onclick="utopiasoftware[utopiasoftware_app_namespace].controller.\n                                                 projectEvaluationPageViewModel.pictureSpeedDialClicked(2)">\n                                            <ons-icon icon="md-image-o"></ons-icon>\n                                        </ons-fab>\n                                        <ons-speed-dial-item modifier="utopiasoftware-pic-capture-speed-dial-item"\n                                                             class="utopiasoftware-pic-capture-speed-dial" \n                                                             onclick="utopiasoftware[utopiasoftware_app_namespace].controller.\n                                                 projectEvaluationPageViewModel.pictureCaptureButtonClicked(2)">\n                                            <ons-icon icon="md-camera"></ons-icon>\n                                        </ons-speed-dial-item>\n                                        <ons-speed-dial-item modifier="utopiasoftware-pic-capture-speed-dial-item"\n                                                             class="utopiasoftware-pic-capture-speed-dial" \n                                                             onclick="utopiasoftware[utopiasoftware_app_namespace].controller.\n                                                 projectEvaluationPageViewModel.deletePictureButtonClicked(2)">\n                                            <ons-icon icon="md-delete"></ons-icon>\n                                        </ons-speed-dial-item>\n                                    </ons-speed-dial>\n                                </div>\n                                <img id="project-evaluation-picture-2" src="css/app-images/project-evaluation-photo-placeholder.png" style="width: 100%; border: 2px darkgray groove" alt="Picture 2">\n                            </div>\n                            <div class="col-xs-offset-3 col-xs-6" style="padding: 0.5em; position: relative">\n                                <div style="position: absolute; top: 5px;">\n                                    <ons-speed-dial id="project-evaluation-picture-speed-dial-3" direction="down">\n                                        <ons-fab modifier="utopiasoftware-pic-capture-speed-dial"\n                                                 class="utopiasoftware-pic-capture-speed-dial" \n                                                 onclick="utopiasoftware[utopiasoftware_app_namespace].controller.\n                                                 projectEvaluationPageViewModel.pictureSpeedDialClicked(3)">\n                                            <ons-icon icon="md-image-o"></ons-icon>\n                                        </ons-fab>\n                                        <ons-speed-dial-item modifier="utopiasoftware-pic-capture-speed-dial-item"\n                                                             class="utopiasoftware-pic-capture-speed-dial" \n                                                             onclick="utopiasoftware[utopiasoftware_app_namespace].controller.\n                                                 projectEvaluationPageViewModel.pictureCaptureButtonClicked(3)">\n                                            <ons-icon icon="md-camera"></ons-icon>\n                                        </ons-speed-dial-item>\n                                        <ons-speed-dial-item modifier="utopiasoftware-pic-capture-speed-dial-item"\n                                                             class="utopiasoftware-pic-capture-speed-dial" \n                                                             onclick="utopiasoftware[utopiasoftware_app_namespace].controller.\n                                                 projectEvaluationPageViewModel.deletePictureButtonClicked(3)">\n                                            <ons-icon icon="md-delete"></ons-icon>\n                                        </ons-speed-dial-item>\n                                    </ons-speed-dial>\n                                </div>\n                                <img id="project-evaluation-picture-3" src="css/app-images/project-evaluation-photo-placeholder.png" style="width: 100%; border: 2px darkgray groove" alt="Picture 3">\n                            </div>\n                        </div>\n                    </ons-carousel-item>';
                                    // append the generated carousel content to the project evaluation carousel
                                    $('#project-evaluation-page #project-evaluation-carousel').append(carouselContent);

                                    // append the carousel content used for displaying project location on a map
                                    carouselContent = '\n                    <ons-carousel-item style="position: relative;">\n                        <div id="project-evaluation-map" style="position: absolute; top: 0; left: 0; width: 100%; \n                            height: 100%; bottom: 0; border: 1px #00d5c3 solid; text-align: center;">\n                            <ons-button style="background-color: #3f51b5; position: relative; top: 3px;\n                            display: inline-block;"\n                            onclick="utopiasoftware[utopiasoftware_app_namespace].\n                            controller.projectEvaluationPageViewModel.getProjectGeoLocationButtonClicked()">Get Project Location</ons-button>\n                            <ons-progress-circular id="project-evaluation-gps-progress" indeterminate modifier="project-gps-location-progress" \n                            style="position: relative; display: none; top: 65px"></ons-progress-circular>\n                        </div>\n                    </ons-carousel-item>';
                                    // append the generated carousel content to the project evaluation carousel
                                    $('#project-evaluation-page #project-evaluation-carousel').append(carouselContent);

                                    // create the project evaluation slider elements
                                    $('#project-evaluation-page .project-evaluation-slider').each(function (index, element) {
                                        element._ptracker_index = index; //  store the index position of the element within the collection on the element itself
                                        // create each milestone evaluation slider
                                        var aSlider = new ej.inputs.Slider({
                                            min: 0,
                                            max: 100,
                                            value: 0,
                                            step: 1,
                                            orientation: 'Horizontal',
                                            type: 'MinRange',
                                            created: function created() {
                                                $('.e-handle', element).text(this.value);
                                            },
                                            change: function change(changeEvent) {
                                                $('.e-handle', element).text(changeEvent.value);
                                                // update the project evaluation started flag to indicate evaluation has started
                                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.hasProjectEvaluationStarted = true;
                                            },
                                            changed: function changed(changedEvent) {
                                                // update the milestone current value based on changes in the slider
                                                $('.project-evaluation-milestone-current-value', $(element).parents('ons-card')).html('<span style="display: inline-block; font-style: italic; margin-right: 1em;">Value Completed </span> \n                                    ' + kendo.toString(kendo.parseFloat(changedEvent.value / 100 * kendo.parseFloat(dbQueryResult.docs[element._ptracker_index].AMOUNT)), "n2"));
                                            }
                                        });
                                        aSlider.appendTo(element);
                                    });

                                    // create the Viewer widget used to view the project evaluation photos
                                    utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.pictureViewer = new Viewer($('#project-evaluation-page .project-evaluation-images-container').get(0), { inline: false,
                                        toolbar: {
                                            prev: {
                                                show: true,
                                                size: 'large'
                                            },
                                            next: {
                                                show: true,
                                                size: 'large'
                                            },
                                            zoomIn: {
                                                show: true,
                                                size: 'large'
                                            },
                                            zoomOut: {
                                                show: true,
                                                size: 'large'
                                            },
                                            oneToOne: {
                                                show: true,
                                                size: 'large'
                                            },
                                            reset: {
                                                show: true,
                                                size: 'large'
                                            },
                                            play: {
                                                show: false,
                                                size: 'large'
                                            },
                                            rotateLeft: {
                                                show: false,
                                                size: 'large'
                                            },
                                            rotateRight: {
                                                show: false,
                                                size: 'large'
                                            },
                                            flipHorizontal: {
                                                show: false,
                                                size: 'large'
                                            },
                                            flipVertical: {
                                                show: false,
                                                size: 'large'
                                            }
                                        },
                                        backdrop: 'static',
                                        shown: function shown() {
                                            // event is triggered when Picture Viewer is shown
                                            // indicate that the picture viewer widget is showing
                                            utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.isPictureViewerShowing = true;
                                        },
                                        hidden: function hidden() {
                                            // event is triggered when Picture Viewer is hidden
                                            // indicate that the picture viewer widget is hidden
                                            utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.isPictureViewerShowing = false;
                                        } });

                                    // hide the page preloader
                                    $('#project-evaluation-page .page-preloader').css("display", "none");
                                    // show the items that are to be displayed
                                    $('#project-evaluation-page .project-evaluation-instructions, #project-evaluation-page .content').css("display", "block");
                                    $('#project-evaluation-page #project-evaluation-next-button').css("display", "inline-block");
                                    _context10.next = 33;
                                    break;

                                case 27:
                                    _context10.prev = 27;
                                    _context10.t0 = _context10['catch'](7);

                                    // hide the page preloader
                                    $('#project-evaluation-page .page-preloader').css("display", "none");
                                    // hide the items that are not to be displayed
                                    $('#project-evaluation-page .project-evaluation-instructions, #project-evaluation-page .content').css("display", "none");
                                    $('#project-evaluation-page #project-evaluation-prev-button, #project-evaluation-page #project-evaluation-next-button').css("display", "none");
                                    // display the message to inform user that there are no milestones available for the project
                                    $('#project-evaluation-page .no-milestone-found').css("display", "block");

                                case 33:
                                    _context10.prev = 33;

                                    // hide the loader
                                    $('#loader-modal').get(0).hide();
                                    return _context10.finish(33);

                                case 36:
                                case 'end':
                                    return _context10.stop();
                            }
                        }
                    }, _callee10, this, [[7, 27, 33, 36]]);
                }));

                return function loadPageOnAppReady() {
                    return _ref10.apply(this, arguments);
                };
            }();

            var $thisPage = $(event.target); // get the current page shown
            // disable the swipeable feature for the app splitter
            $('ons-splitter-side').removeAttr("swipeable");

            // call the function used to initialise the app page if the app is fully loaded
            loadPageOnAppReady();
        },

        /**
         * method is triggered when page is shown
         */
        pageShow: function pageShow() {
            // disable the swipeable feature for the app splitter
            $('ons-splitter-side').removeAttr("swipeable");

            // adjust the window/view-port settings for when the soft keyboard is displayed
            window.SoftInputMode.set('adjustPan'); // let the window/view-port 'pan' when the soft keyboard is displayed
        },

        /**
         * method is triggered when page is hidden
         */
        pageHide: function pageHide() {
            // adjust the window/view-port settings for when the soft keyboard is displayed
            // window.SoftInputMode.set('adjustResize'); // let the view 'resize' when the soft keyboard is displayed

            // REMOVE the app background transparency, map np longer showing
            $('html, body').removeClass('utopiasoftware-transparent');

            // check if Map already exists and is ready to be used
            if (utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap && utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap.projectEvaluationMap_ptracker_isMapReady === true) {
                // hide the map object
                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.setVisible(false);
            }
        },

        /**
         * method is triggered when page is destroyed
         */
        pageDestroy: function pageDestroy() {
            // destroy the pictures Viewer widget instance
            utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.pictureViewer.destroy();
            // reset other object properties
            utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectMilestones = null;
            utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectPicturesUrls = [null];
            utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.hasProjectEvaluationStarted = false;

            // check if Map already exists and is ready to be used
            if (utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap && utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap.projectEvaluationMap_ptracker_isMapReady === true) {
                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap.remove();
            }

            utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap = null;
            utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectGeoPosition = null;
        },

        /**
         * method is triggered when the device back button is clicked OR a similar action is triggered
         */
        backButtonClicked: function () {
            var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                var leaveProjectEvaluation;
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) {
                        switch (_context11.prev = _context11.next) {
                            case 0:
                                if (!(utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.isPictureViewerShowing === true)) {
                                    _context11.next = 3;
                                    break;
                                }

                                // Picture Viewer is showing
                                // hide it
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.pictureViewer.hide();
                                return _context11.abrupt('return');

                            case 3:
                                if (!( // update the project evaluation started flag to indicate evaluation has started
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.hasProjectEvaluationStarted === true)) {
                                    _context11.next = 9;
                                    break;
                                }

                                _context11.next = 6;
                                return ons.notification.confirm('', { title: '<ons-icon icon="md-alert-triangle" style="color: #3f51b5" size="33px"></ons-icon> <span style="color: #3f51b5; display: inline-block; margin-left: 1em;">Warning</span>',
                                    messageHTML: 'You have NOT completed the evaluation. If you leave now, all evaluation data will be cancelled.<br><br> Do you want to leave the project evaluation?',
                                    buttonLabels: ['No', 'Yes'], modifier: 'utopiasoftware-alert-dialog' });

                            case 6:
                                leaveProjectEvaluation = _context11.sent;

                                if (!(leaveProjectEvaluation == 0)) {
                                    _context11.next = 9;
                                    break;
                                }

                                return _context11.abrupt('return');

                            case 9:

                                // move to the project evaluation page
                                $('#app-main-navigator').get(0).popPage();

                            case 10:
                            case 'end':
                                return _context11.stop();
                        }
                    }
                }, _callee11, this);
            }));

            function backButtonClicked() {
                return _ref11.apply(this, arguments);
            }

            return backButtonClicked;
        }(),


        /**
         * method is used to control the behaviour of the picture speed dials
         *
         * @param pictureNumber {Integer} holds the number/position of the picture.
         * The position of pictures starts from 1 (i.e. 1-based counting)
         */
        pictureSpeedDialClicked: function pictureSpeedDialClicked(pictureNumber) {

            // handler conditions for each picture speed-dial
            switch (pictureNumber) {// determine what to do based on the picture number value

                case 1:
                    // check if the speed-dial widget that was clicked is currently opened
                    if (!$('#project-evaluation-page #project-evaluation-picture-speed-dial-1').get(0).isOpen()) {
                        // speed-dial is open
                        // close all other picture speed-dials
                        $('#project-evaluation-page #project-evaluation-picture-speed-dial-2').get(0).hideItems();
                        $('#project-evaluation-page #project-evaluation-picture-speed-dial-3').get(0).hideItems();
                    }
                    break;

                case 2:
                    if (!$('#project-evaluation-page #project-evaluation-picture-speed-dial-2').get(0).isOpen()) {
                        // speed-dial is open
                        // close all other picture speed-dials
                        $('#project-evaluation-page #project-evaluation-picture-speed-dial-1').get(0).hideItems();
                        $('#project-evaluation-page #project-evaluation-picture-speed-dial-3').get(0).hideItems();
                    }
                    break;

                case 3:
                    if (!$('#project-evaluation-page #project-evaluation-picture-speed-dial-3').get(0).isOpen()) {
                        // speed-dial is open
                        // close all other picture speed-dials
                        $('#project-evaluation-page #project-evaluation-picture-speed-dial-1').get(0).hideItems();
                        $('#project-evaluation-page #project-evaluation-picture-speed-dial-2').get(0).hideItems();
                    }
                    break;
            }
        },


        /**
         * method is used to capture project evaluation photos with the user's camera
         *
         * @param pictureNumber {Integer} holds the number/position of the picture.
         * The position of pictures starts from 1 (i.e. 1-based counting)
         */
        pictureCaptureButtonClicked: function () {
            var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(pictureNumber) {
                var permissionStatuses, imageUrl;
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                    while (1) {
                        switch (_context12.prev = _context12.next) {
                            case 0:
                                permissionStatuses = null; // holds the statuses of the runtime permissions requested

                                _context12.prev = 1;
                                _context12.next = 4;
                                return new Promise(function (resolve, reject) {
                                    cordova.plugins.diagnostic.requestRuntimePermissions(resolve, reject, [cordova.plugins.diagnostic.permission.CAMERA]);
                                });

                            case 4:
                                permissionStatuses = _context12.sent;

                                if (!(!permissionStatuses || permissionStatuses[cordova.plugins.diagnostic.permission.CAMERA] !== cordova.plugins.diagnostic.permissionStatus.GRANTED)) {
                                    _context12.next = 7;
                                    break;
                                }

                                throw "error - no runtime permissions";

                            case 7:

                                // disable screen orientation lock
                                screen.orientation.unlock();

                                // open the device camera app and capture a photo
                                _context12.next = 10;
                                return new Promise(function (resolve, reject) {
                                    navigator.camera.getPicture(resolve, reject, {
                                        quality: 70,
                                        destinationType: Camera.DestinationType.FILE_URI,
                                        sourceType: Camera.PictureSourceType.CAMERA,
                                        allowEdit: false,
                                        encodingType: Camera.EncodingType.JPEG,
                                        correctOrientation: false,
                                        saveToPhotoAlbum: false,
                                        cameraDirection: Camera.Direction.BACK
                                    });
                                });

                            case 10:
                                imageUrl = _context12.sent;
                                _context12.t0 = pictureNumber;
                                _context12.next = _context12.t0 === 1 ? 14 : _context12.t0 === 2 ? 17 : _context12.t0 === 3 ? 20 : 23;
                                break;

                            case 14:
                                // store the image url in the correct picturesUrls array index
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectPicturesUrls[pictureNumber] = imageUrl;
                                // update the image src for the correct project picture, so that picture can be displayed
                                $('#project-evaluation-page #project-evaluation-picture-1').attr("src", imageUrl);
                                return _context12.abrupt('break', 23);

                            case 17:
                                // store the image url in the correct picturesUrls array index
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectPicturesUrls[pictureNumber] = imageUrl;
                                // update the image src for the correct project picture, so that picture can be displayed
                                $('#project-evaluation-page #project-evaluation-picture-2').attr("src", imageUrl);
                                return _context12.abrupt('break', 23);

                            case 20:
                                // store the image url in the correct picturesUrls array index
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectPicturesUrls[pictureNumber] = imageUrl;
                                // update the image src for the correct project picture, so that picture can be displayed
                                $('#project-evaluation-page #project-evaluation-picture-3').attr("src", imageUrl);
                                return _context12.abrupt('break', 23);

                            case 23:

                                // update the project evaluation started flag to indicate evaluation has started
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.hasProjectEvaluationStarted = true;

                                // update the picture viewer widget
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.pictureViewer.update();
                                _context12.next = 30;
                                break;

                            case 27:
                                _context12.prev = 27;
                                _context12.t1 = _context12['catch'](1);

                                // inform the user of the error
                                window.plugins.toast.showWithOptions({
                                    message: "Photo Capture Failed - " + _context12.t1,
                                    duration: 4000,
                                    position: "top",
                                    styling: {
                                        opacity: 1,
                                        backgroundColor: '#ff0000', //red
                                        textColor: '#FFFFFF',
                                        textSize: 14
                                    }
                                }, function (toastEvent) {
                                    if (toastEvent && toastEvent.event == "touch") {
                                        // user tapped the toast, so hide toast immediately
                                        window.plugins.toast.hide();
                                    }
                                });

                            case 30:
                                _context12.prev = 30;

                                // lock the device orientation back to 'portrait'
                                screen.orientation.lock('portrait');
                                return _context12.finish(30);

                            case 33:
                            case 'end':
                                return _context12.stop();
                        }
                    }
                }, _callee12, this, [[1, 27, 30, 33]]);
            }));

            function pictureCaptureButtonClicked(_x3) {
                return _ref12.apply(this, arguments);
            }

            return pictureCaptureButtonClicked;
        }(),


        /**
         * method is used to delete/remove project evaluation photos from the collection and display
         *
         * @param pictureNumber {Integer} holds the number/position of the picture.
         * The position of pictures starts from 1 (i.e. 1-based counting)
         */
        deletePictureButtonClicked: function () {
            var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(pictureNumber) {
                var deletePhoto;
                return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) {
                        switch (_context13.prev = _context13.next) {
                            case 0:
                                if (utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectPicturesUrls[pictureNumber]) {
                                    _context13.next = 2;
                                    break;
                                }

                                return _context13.abrupt('return');

                            case 2:
                                _context13.next = 4;
                                return ons.notification.confirm('Do you want to delete the photo?', { title: '<ons-icon icon="md-delete" style="color: #3f51b5" size="33px"></ons-icon> <span style="color: #3f51b5; display: inline-block; margin-left: 1em;">Delete Photo</span>',
                                    buttonLabels: ['No', 'Yes'], modifier: 'utopiasoftware-alert-dialog' });

                            case 4:
                                deletePhoto = _context13.sent;

                                if (!(deletePhoto == 0)) {
                                    _context13.next = 7;
                                    break;
                                }

                                return _context13.abrupt('return');

                            case 7:

                                // remove the image url in the correct picturesUrls array index
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectPicturesUrls[pictureNumber] = null;
                                // update the image src to the "no photo" display
                                $('#project-evaluation-page #project-evaluation-picture-' + pictureNumber).attr("src", "css/app-images/project-evaluation-photo-placeholder.png");

                                // update the picture viewer widget
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.pictureViewer.update();

                            case 10:
                            case 'end':
                                return _context13.stop();
                        }
                    }
                }, _callee13, this);
            }));

            function deletePictureButtonClicked(_x4) {
                return _ref13.apply(this, arguments);
            }

            return deletePictureButtonClicked;
        }(),


        /**
         * method is used to retrieve the project location by using the current GPS location of the device
         *
         * @returns {Promise<void>}
         */
        getProjectGeoLocationButtonClicked: function () {
            var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                var permissionStatuses, isGPSEnabled, geoPosition;
                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                    while (1) {
                        switch (_context14.prev = _context14.next) {
                            case 0:
                                permissionStatuses = null; // holds the statuses of the runtime permissions requested

                                _context14.prev = 1;
                                _context14.next = 4;
                                return new Promise(function (resolve, reject) {
                                    cordova.plugins.diagnostic.requestRuntimePermissions(resolve, reject, [cordova.plugins.diagnostic.permission.ACCESS_FINE_LOCATION]);
                                });

                            case 4:
                                permissionStatuses = _context14.sent;

                                if (!(!permissionStatuses || permissionStatuses[cordova.plugins.diagnostic.permission.ACCESS_FINE_LOCATION] !== cordova.plugins.diagnostic.permissionStatus.GRANTED)) {
                                    _context14.next = 7;
                                    break;
                                }

                                throw "error - no location permission";

                            case 7:
                                _context14.next = 9;
                                return new Promise(function (resolve, reject) {
                                    cordova.plugins.diagnostic.isGpsLocationEnabled(resolve, reject);
                                });

                            case 9:
                                isGPSEnabled = _context14.sent;

                                if (!(isGPSEnabled === false)) {
                                    _context14.next = 19;
                                    break;
                                }

                                _context14.next = 13;
                                return ons.notification.alert('', { title: '<ons-icon icon="md-pin" style="color: #3f51b5" size="33px"></ons-icon> <span style="color: #3f51b5; display: inline-block; margin-left: 1em;">Location Service</span>',
                                    messageHTML: 'You need to enable you device location service to capture the project location. <br>Switch to Location Settings or enable the location service directly?',
                                    buttonLabels: ['Proceed'], modifier: 'utopiasoftware-alert-dialog' });

                            case 13:
                                _context14.next = 15;
                                return new Promise(function (resolve, reject) {
                                    cordova.plugins.locationAccuracy.request(function () {
                                        resolve(true);
                                    }, function () {
                                        resolve(false);
                                    }, cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
                                });

                            case 15:
                                isGPSEnabled = _context14.sent;

                                if (!(isGPSEnabled === false)) {
                                    _context14.next = 19;
                                    break;
                                }

                                // GPS IS STILL NOT ENABLED
                                // switch to the Location Settings screen, so user can manually enable Location Services
                                cordova.plugins.diagnostic.switchToLocationSettings();

                                return _context14.abrupt('return');

                            case 19:

                                // if method get here, GPS has been successfully enabled and app has authorisation to use it
                                // show the circular progress to indicate app has started working on getting user gps
                                $('#project-evaluation-page #project-evaluation-gps-progress').css("display", "block");
                                // get project's current location using device's gps geolocation
                                _context14.next = 22;
                                return new Promise(function (resolve, reject) {
                                    navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true, timeout: 300000, maximumAge: 5000 });
                                });

                            case 22:
                                geoPosition = _context14.sent;

                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectGeoPosition = geoPosition; // assign the retrieved geo position object to its appropriate object property

                                // flag that progress evaluation has started
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.hasProjectEvaluationStarted = true;

                                // make the app background transparent, so the map can show
                                $('html, body').addClass('utopiasoftware-transparent');

                                // check if Map already exists and is ready to be used

                                if (!(utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap && utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap.projectEvaluationMap_ptracker_isMapReady === true)) {
                                    _context14.next = 30;
                                    break;
                                }

                                // map has previously been created and is ready for use
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap.setVisible(true);
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap.animateCamera({
                                    target: { lat: geoPosition.coords.latitude,
                                        lng: geoPosition.coords.longitude },
                                    bearing: geoPosition.coords.heading,
                                    tilt: 45
                                });

                                return _context14.abrupt('return');

                            case 30:

                                // generate the geo map for the project evaluation
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap = plugin.google.maps.Map.getMap($('#project-evaluation-page #project-evaluation-map').get(0), {
                                    'mapType': plugin.google.maps.MapTypeId.ROADMAP,
                                    'camera': {
                                        target: {
                                            lat: geoPosition.coords.latitude,
                                            lng: geoPosition.coords.longitude
                                        },
                                        zoom: 20,
                                        bearing: geoPosition.coords.heading,
                                        tilt: 90
                                    },
                                    'preferences': {
                                        'zoom': {
                                            'minZoom': 20,
                                            'maxZoom': 30
                                        },
                                        'building': false
                                    }
                                });

                                // listen for when the map object is successfully created
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap.one(plugin.google.maps.event.MAP_READY, function () {
                                    // hide circular progress display
                                    $('#project-evaluation-page #project-evaluation-gps-progress').css("display", "none");
                                    // flag an internal property that indicates the the map is ready to be used
                                    utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap_ptracker_isMapReady = true;
                                });
                                _context14.next = 37;
                                break;

                            case 34:
                                _context14.prev = 34;
                                _context14.t0 = _context14['catch'](1);

                                // inform the user of the error
                                window.plugins.toast.showWithOptions({
                                    message: "Location Capture Failed - " + (typeof _context14.t0 === "string" ? _context14.t0 : _context14.t0.message),
                                    duration: 4000,
                                    position: "top",
                                    styling: {
                                        opacity: 1,
                                        backgroundColor: '#ff0000', //red
                                        textColor: '#FFFFFF',
                                        textSize: 14
                                    }
                                }, function (toastEvent) {
                                    if (toastEvent && toastEvent.event == "touch") {
                                        // user tapped the toast, so hide toast immediately
                                        window.plugins.toast.hide();
                                    }
                                });

                            case 37:
                            case 'end':
                                return _context14.stop();
                        }
                    }
                }, _callee14, this, [[1, 34]]);
            }));

            function getProjectGeoLocationButtonClicked() {
                return _ref14.apply(this, arguments);
            }

            return getProjectGeoLocationButtonClicked;
        }(),


        /**
         * method is triggered when the "project evaluation carousel" is changed
         * @param event
         */
        carouselChanged: function carouselChanged(event) {
            // change the css display the prev fab button
            $('#project-evaluation-page #project-evaluation-prev-button').css("display", "inline-block");
            // REMOVE the app background transparency, map np longer showing
            $('html, body').removeClass('utopiasoftware-transparent');

            // update the stay of the the fab "prev" or "next" buttons
            // check if the carousel is at the last item
            if (event.originalEvent.activeIndex === event.originalEvent.carousel.itemCount - 1) {
                // this is the last carousel item, so hide the next slide button
                // hide the next fab button
                $('#project-evaluation-page #project-evaluation-next-button').css("transform", "scale(0)");
            } else if (event.originalEvent.activeIndex === 0) {
                // this is the first carousel item, so hide the prev slide button
                // hide the prev fab button
                $('#project-evaluation-page #project-evaluation-prev-button').css("transform", "scale(0)");
            } else {
                // this is not the first or last item
                $('#project-evaluation-page #project-evaluation-prev-button,#project-evaluation-page #project-evaluation-next-button').css("transform", "scale(1)");
            }

            // update the primary instruction and the milestone badge
            if (event.originalEvent.activeIndex < utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectMilestones.length) // the carousel active index is less than the number of project milestones
                {
                    // change the primary instructions
                    $('#project-evaluation-page #project-evaluation-primary-instruction').html('Evaluate the milestones of project completion on a scale of 0 - 100%');
                    // change the milestone number
                    $('#project-evaluation-page #project-evaluation-milestone-badge').html('Milestone ' + (event.originalEvent.activeIndex + 1));
                    return;
                }
            if (event.originalEvent.activeIndex == utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectMilestones.length) // the carousel active index is at the picture capture point
                {
                    // change the primary instructions
                    $('#project-evaluation-page #project-evaluation-primary-instruction').html('Capture the project progress in photos');
                    // change the milestone number
                    $('#project-evaluation-page #project-evaluation-milestone-badge').html('Project Photos');

                    // check if Map already exists and is ready to be used
                    if (utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap && utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap.projectEvaluationMap_ptracker_isMapReady === true) {
                        // make the map invisible
                        utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap.setVisible(false);
                    }

                    return;
                }
            if (event.originalEvent.activeIndex == utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectMilestones.length + 1) // the carousel active index is at the geolocation capture point
                {
                    // change the primary instructions
                    $('#project-evaluation-page #project-evaluation-primary-instruction').html('Capture the project geographical location');
                    // change the milestone number
                    $('#project-evaluation-page #project-evaluation-milestone-badge').html('Project Location');

                    // make the app background transparent, so the map can show
                    $('html, body').addClass('utopiasoftware-transparent');

                    // check if Map already exists and is ready to be used
                    if (utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap && utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap.projectEvaluationMap_ptracker_isMapReady === true) {
                        // make the map visible
                        utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap.setVisible(true);
                    }
                    return;
                }
            if (event.originalEvent.activeIndex == utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectMilestones.length + 2) // the carousel active index is at the project remarks point
                {
                    // change the primary instructions
                    $('#project-evaluation-page #project-evaluation-primary-instruction').html('Provide any remarks on the project evaluation (optional)');
                    // change the milestone number
                    $('#project-evaluation-page #project-evaluation-milestone-badge').html('Project Evaluation Remarks');

                    // check if Map already exists and is ready to be used
                    if (utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap && utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap.projectEvaluationMap_ptracker_isMapReady === true) {
                        // make the map invisible
                        utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap.setVisible(false);
                    }
                    return;
                }
        },


        /**
         * method is triggered when the "prev button" for the carousel is clicked
         */
        prevButtonClicked: function prevButtonClicked() {
            $('#project-evaluation-page #project-evaluation-carousel').get(0).prev();
        },


        /**
         * method is triggered when the "next button" for the carousel is clicked
         */
        nextButtonClicked: function nextButtonClicked() {
            $('#project-evaluation-page #project-evaluation-carousel').get(0).next();
        }
    }
};

//# sourceMappingURL=controller-compiled.js.map