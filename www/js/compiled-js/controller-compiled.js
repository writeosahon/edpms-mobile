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
                            return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.createIndex({
                                index: {
                                    fields: ['TYPE'],
                                    name: 'DOC_TYPE_INDEX',
                                    ddoc: 'ptracker-index-designdoc'
                                }
                            });

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
                                    window.SoftInputMode.set('adjustPan'); // let the window/view-port 'pan' when the soft keyboard is displayed

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
                                    message: "You cannot sign in with an Internet Connection",
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
                                ons.notification.confirm(_context5.t0.message, { title: '<span style="color: red">Sign In Failed</span>',
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
                                        fields: ["_id", "_rev", "PROJECTID"],
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
                                        fields: ["_id", "_rev", "BOQID"],
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
                                    ons.notification.toast('<ons-icon icon="md-check" size="20px" style="color: #00D5C3"></ons-icon> Welcome ' + utopiasoftware[utopiasoftware_app_namespace].model.userDetails.userDetails.firstname, { timeout: 3000 });
                                    _context6.next = 60;
                                    break;

                                case 55:
                                    _context6.prev = 55;
                                    _context6.t0 = _context6['catch'](8);

                                    console.log(_context6.t0);
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
        },

        /**
         * method is triggered when page is destroyed
         */
        pageDestroy: function pageDestroy() {},

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
                                        // run the validation method for the sign-in form
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
         * method is triggered when the project search search/find form is successfully validated
         * @returns {Promise<void>}
         */
        formValidated: function () {
            var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                        switch (_context8.prev = _context8.next) {
                            case 0:
                                // hide the device keyboard
                                Keyboard.hide();
                                // perform actions to reveal result
                                kendo.fx($('#search-project-page #search-project-details')).fade("in").duration(550).play();
                                _context8.next = 4;
                                return Promise.resolve(kendo.fx($('#search-project-page ons-bottom-toolbar')).slideIn("up").duration(600).play());

                            case 4:
                                $('#search-project-page ons-bottom-toolbar').css("display", "block");

                            case 5:
                            case 'end':
                                return _context8.stop();
                        }
                    }
                }, _callee8, this);
            }));

            function formValidated() {
                return _ref8.apply(this, arguments);
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

            // move to the project evaluation page
            $('#app-main-navigator').get(0).pushPage("project-evaluation-page.html", { animation: "lift-md" });
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
        pageInit: function pageInit(event) {

            //function is used to initialise the page if the app is fully ready for execution
            var loadPageOnAppReady = function () {
                var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                        while (1) {
                            switch (_context9.prev = _context9.next) {
                                case 0:
                                    if (!(!ons.isReady() || utopiasoftware[utopiasoftware_app_namespace].model.isAppReady === false || !ej)) {
                                        _context9.next = 3;
                                        break;
                                    }

                                    setTimeout(loadPageOnAppReady, 500); // call this function again after half a second
                                    return _context9.abrupt('return');

                                case 3:

                                    // listen for the back button event
                                    $('#app-main-navigator').get(0).topPage.onDeviceBackButton = utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.backButtonClicked;

                                    // create the slider elements
                                    $('#project-evaluation-page .project-evaluation-slider').each(function (index, element) {
                                        var aSlider = new ej.inputs.Slider({
                                            min: 0,
                                            max: 100,
                                            value: 25,
                                            step: 1,
                                            orientation: 'Horizontal',
                                            type: 'MinRange',
                                            created: function created() {
                                                $('.e-handle', element).text(this.value);
                                            },
                                            change: function change(changeEvent) {
                                                $('.e-handle', element).text(changeEvent.value);
                                            }
                                        });
                                        aSlider.appendTo(element);
                                    });

                                    // hide the loader
                                    $('#loader-modal').get(0).hide();

                                case 6:
                                case 'end':
                                    return _context9.stop();
                            }
                        }
                    }, _callee9, this);
                }));

                return function loadPageOnAppReady() {
                    return _ref9.apply(this, arguments);
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
        },

        /**
         * method is triggered when page is destroyed
         */
        pageDestroy: function pageDestroy() {},

        /**
         * method is triggered when the device back button is clicked OR a similar action is triggered
         */
        backButtonClicked: function backButtonClicked() {

            // move to the project evaluation page
            $('#app-main-navigator').get(0).popPage();
        },


        /**
         * method is triggered when the "project evaluation carousel" is changed
         * @param event
         */
        carouselChanged: function carouselChanged(event) {
            // change the css display the prev fab button
            $('#project-evaluation-prev-button').css("display", "inline-block");
            // check if the carousel is at the last item
            if (event.originalEvent.activeIndex === 2) {
                // this is the last carousel item, so hide the next slide button
                // hide the next fab button
                $('#project-evaluation-next-button').css("transform", "scale(0)");
            } else if (event.originalEvent.activeIndex === 0) {
                // this is the first carousel item, so hide the prev slide button
                // hide the prev fab button
                $('#project-evaluation-prev-button').css("transform", "scale(0)");
            } else {
                // this is not the first or last item
                $('#project-evaluation-prev-button,#project-evaluation-next-button').css("transform", "scale(1)");
            }

            // change the milestone number
            $('#project-evaluation-milestone-badge').html('Milestone ' + (event.originalEvent.activeIndex + 1));
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