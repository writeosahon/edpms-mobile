"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

                            if (!(window.localStorage.getItem("utopiasoftware-edpms-reload-app") && window.localStorage.getItem("utopiasoftware-edpms-reload-app") !== "")) {
                                _context.next = 16;
                                break;
                            }

                            _context.next = 4;
                            return new Promise(function (resolve, reject) {
                                setTimeout(resolve, 200);
                            });

                        case 4:
                            _context.next = 6;
                            return $('ons-splitter').get(0).right.open();

                        case 6:
                            $('#determinate-progress-modal .modal-message').html('Prepping Evaluation Report for Upload...');
                            _context.next = 9;
                            return $('#determinate-progress-modal').get(0).show();

                        case 9:
                            $('#determinate-progress-modal #determinate-progress').get(0).value = 1;
                            // flag to the app that you are going back to a page that needs to be refreshed
                            window.sessionStorage.setItem("utopiasoftware-edpms-refresh-page", "yes");
                            utopiasoftware[utopiasoftware_app_namespace].model.userDetails = JSON.parse(window.localStorage.getItem("utopiasoftware-edpms-user-details"));

                            // load the app main page
                            _context.next = 14;
                            return $('ons-splitter').get(0).content.load("app-main-template");

                        case 14:
                            _context.next = 20;
                            break;

                        case 16:
                            navigator.splashscreen.show(); // show the splashscreen
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

                        case 20:

                            // START ALL CORDOVA PLUGINS CONFIGURATIONS
                            try {
                                // lock the orientation of the device to 'PORTRAIT'
                                screen.orientation.lock('portrait');
                            } catch (err) {}

                            _context.prev = 21;
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
                            _context.next = 27;
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

                        case 27:
                            _context.next = 29;
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
                            }), utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.createIndex({
                                index: {
                                    fields: ['BOQID'],
                                    name: 'FIND_BOQ_BY_ID_INDEX',
                                    ddoc: 'ptracker-index-designdoc'
                                }
                            }), utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.createIndex({
                                index: {
                                    fields: ['TYPE', 'evaluatedBy'],
                                    name: 'FIND_SAVED_REPORT_BY_EVALUATED_BY',
                                    ddoc: 'ptracker-index-designdoc'
                                }
                            })]);

                        case 29:
                            _context.prev = 29;
                            _context.next = 32;
                            return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.put({
                                _id: '_design/saved_reports_view',
                                views: {
                                    get_report_evaluated_by: {
                                        map: function (doc) {
                                            if (doc.TYPE === "saved report") {
                                                emit([doc.TYPE, doc.evaluatedBy, doc.dateStamp], doc._id);
                                            }
                                        }.toString()
                                    }
                                }
                            });

                        case 32:
                            _context.next = 36;
                            break;

                        case 34:
                            _context.prev = 34;
                            _context.t0 = _context["catch"](29);

                        case 36:

                            if (window.localStorage.getItem("utopiasoftware-edpms-reload-app") && window.localStorage.getItem("utopiasoftware-edpms-reload-app") !== "") {

                                window.localStorage.removeItem("utopiasoftware-edpms-reload-app");
                                window.localStorage.removeItem("utopiasoftware-edpms-user-details");
                                //$('#app-main-navigator').get(0).resetToPage("search-project-page.html", {pop: true});
                                // call the side menu click button
                                utopiasoftware[utopiasoftware_app_namespace].controller.sideMenuPageViewModel.uploadReportsButtonClicked();
                            }

                            _context.next = 42;
                            break;

                        case 39:
                            _context.prev = 39;
                            _context.t1 = _context["catch"](21);

                            console.log("APP LOADING ERROR", _context.t1);

                        case 42:
                            _context.prev = 42;

                            // set status bar color
                            StatusBar.backgroundColorByHexString("#00B2A0");
                            navigator.splashscreen.hide(); // hide the splashscreen
                            utopiasoftware[utopiasoftware_app_namespace].model.isAppReady = true; // flag that app is fullyt loaded and ready
                            return _context.finish(42);

                        case 47:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this, [[21, 39, 42, 47], [29, 34]]);
        }))); // end of ons.ready()
    },

    /**
     * this is the view-model/controller for the SIDE MENU page
     */
    sideMenuPageViewModel: {

        /**
         * method is triggered when the "Sign Out" button is clicked
         * @returns {Promise<void>}
         */
        signOutButtonClicked: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                console.log("STACKS", $('#app-main-navigator').get(0).pages);
                                // remove the user details rev id from storage
                                window.localStorage.removeItem("utopiasoftware-edpms-app-status");
                                // load the login page
                                _context2.next = 4;
                                return $('ons-splitter').get(0).content.load("login-template");

                            case 4:
                                // hide the side menu
                                $('ons-splitter').get(0).right.close();

                            case 5:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function signOutButtonClicked() {
                return _ref2.apply(this, arguments);
            }

            return signOutButtonClicked;
        }(),


        /**
         * method is triggered when the "Upload Reports" button is clicked
         *
         * @param reloadApp {Boolean} flag whether triggering this method should also lead to an app reload
         *
         * @returns {Promise<void>}
         */
        uploadReportsButtonClicked: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var reloadApp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                var totalUploads;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                // upload all the report evaluation sheets
                                totalUploads = 0;
                                _context3.prev = 1;

                                if (!(reloadApp === true)) {
                                    _context3.next = 9;
                                    break;
                                }

                                // set the flag to reload the app
                                window.localStorage.setItem("utopiasoftware-edpms-reload-app", "search-project-page.html");
                                window.localStorage.setItem("utopiasoftware-edpms-user-details", JSON.stringify(utopiasoftware[utopiasoftware_app_namespace].model.userDetails));

                                /*navigator.app.exitApp(); // Close the app
                                // restart the app
                                startApp.set({
                                    action: "ACTION_VIEW",
                                    uri: "edpms://"
                                }, {"UTOPIASOFTWARE_EDPMS_RELOAD-APP": "search-project-page.html",
                                        "UTOPIASOFTWARE_EDPMS_USER_DETAILS":
                                JSON.stringify(utopiasoftware[utopiasoftware_app_namespace].model.userDetails)}).start();*/

                                _context3.next = 7;
                                return new Promise(function (resolve, reject) {
                                    window.setTimeout(resolve, 0);
                                });

                            case 7:

                                cordova.plugins.diagnostic.restart(function () {}, false);

                                return _context3.abrupt("return");

                            case 9:
                                _context3.next = 11;
                                return utopiasoftware[utopiasoftware_app_namespace].projectEvaluationReportData.uploadProjectEvaluationReports(true);

                            case 11:
                                totalUploads = _context3.sent;

                                console.log("TOTAL UPLOADS", totalUploads);

                                if (!(totalUploads === 0)) {
                                    _context3.next = 18;
                                    break;
                                }

                                _context3.next = 16;
                                return ons.notification.alert('No evaluation reports to upload', { title: '<ons-icon icon="md-info" style="color: #3f51b5" size="33px"></ons-icon> <span style="color: #3f51b5; display: inline-block; margin-left: 1em;">No Reports Uploaded</span>',
                                    buttonLabels: ['OK'], modifier: 'utopiasoftware-alert-dialog' });

                            case 16:
                                _context3.next = 20;
                                break;

                            case 18:
                                _context3.next = 20;
                                return ons.notification.alert("All evaluation reports successfully uploaded. " + totalUploads + " in total", { title: '<ons-icon icon="fa-check" style="color: #00B2A0;" size="25px"></ons-icon> <span style="color: #00B2A0; display: inline-block; margin-left: 1em;">Uploaded Reports</span>',
                                    buttonLabels: ['OK'], modifier: 'utopiasoftware-alert-dialog' });

                            case 20:
                                _context3.next = 25;
                                break;

                            case 22:
                                _context3.prev = 22;
                                _context3.t0 = _context3["catch"](1);

                                ons.notification.alert("uploading evaluation reports failed. Please try again. " + (_context3.t0.message || ""), { title: '<span style="color: red">Uploading Reports Failed</span>',
                                    buttonLabels: ['OK'], modifier: 'utopiasoftware-alert-dialog' });

                            case 25:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[1, 22]]);
            }));

            function uploadReportsButtonClicked() {
                return _ref3.apply(this, arguments);
            }

            return uploadReportsButtonClicked;
        }(),


        /**
         * method is triggered when the "View Reports" button is clicked
         * @returns {Promise<void>}
         */
        viewReportsButtonClicked: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return $("#app-main-navigator").get(0).bringPageTop("view-reports-page.html", { animation: "slide" });

                            case 2:
                                // hide the side menu
                                $('ons-splitter').get(0).right.close();

                            case 3:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function viewReportsButtonClicked() {
                return _ref4.apply(this, arguments);
            }

            return viewReportsButtonClicked;
        }()
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
                var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                                case 0:
                                    if (!(!ons.isReady() || utopiasoftware[utopiasoftware_app_namespace].model.isAppReady === false)) {
                                        _context5.next = 3;
                                        break;
                                    }

                                    setTimeout(loadPageOnAppReady, 500); // call this function again after half a second
                                    return _context5.abrupt("return");

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

                                case 10:
                                case "end":
                                    return _context5.stop();
                            }
                        }
                    }, _callee5, this);
                }));

                return function loadPageOnAppReady() {
                    return _ref5.apply(this, arguments);
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
                window.removeEventListener("keyboardDidShow", utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.keyboardShown);
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
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:

                                // run the validation method for the sign-in form
                                utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.formValidator.whenValidate();

                            case 1:
                            case "end":
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function loginButtonClicked() {
                return _ref6.apply(this, arguments);
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
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(keyEvent) {
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
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
                            case "end":
                                return _context7.stop();
                        }
                    }
                }, _callee7, this);
            }));

            function enterButtonClicked(_x2) {
                return _ref7.apply(this, arguments);
            }

            return enterButtonClicked;
        }(),


        /**
         * method is triggered when the form is successfully validated
         *
         * @returns {Promise<void>}
         */
        formValidated: function () {
            var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                var formData, serverResponse, userDetailsDoc, databaseResponse;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                        switch (_context8.prev = _context8.next) {
                            case 0:
                                if (!(navigator.connection.type === Connection.NONE)) {
                                    _context8.next = 3;
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

                                return _context8.abrupt("return");

                            case 3:

                                // inform user that login validation is taking place
                                $('#loader-modal #loader-modal-message').html("Signing You In...");
                                _context8.next = 6;
                                return $('#loader-modal').get(0).show();

                            case 6:
                                _context8.prev = 6;

                                // create the form data to be submitted
                                formData = {
                                    username: $('#login-page #login-email').val().trim(),
                                    password: $('#login-page #login-password').val().trim()
                                };
                                _context8.next = 10;
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
                                serverResponse = _context8.sent;

                                // convert the response to an object
                                serverResponse = JSON.parse(serverResponse.trim());

                                // check if the user login was successful

                                if (!(serverResponse.status !== "success")) {
                                    _context8.next = 14;
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
                                    _context8.next = 32;
                                    break;
                                }

                                // the user wants to remian signed in
                                // save the user's details to persistent database
                                userDetailsDoc = null; // holds the previous stored user details from the database

                                _context8.prev = 17;
                                _context8.next = 20;
                                return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.get('userDetails');

                            case 20:
                                userDetailsDoc = _context8.sent;
                                _context8.next = 25;
                                break;

                            case 23:
                                _context8.prev = 23;
                                _context8.t0 = _context8["catch"](17);

                            case 25:

                                if (!userDetailsDoc) {
                                    // no userDetails object has been previous saved
                                    delete utopiasoftware[utopiasoftware_app_namespace].model.userDetails._rev; // delete the _rev property
                                } else {
                                    // user details object has been previously saved
                                    // update the _rev property of the userDetails object being used by the app
                                    utopiasoftware[utopiasoftware_app_namespace].model.userDetails._rev = userDetailsDoc._rev;
                                }

                                // saved the user details object in the app database
                                _context8.next = 28;
                                return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.put(utopiasoftware[utopiasoftware_app_namespace].model.userDetails);

                            case 28:
                                databaseResponse = _context8.sent;

                                // save the returned user details rev id
                                window.localStorage.setItem("utopiasoftware-edpms-app-status", databaseResponse.rev);
                                _context8.next = 33;
                                break;

                            case 32:
                                // user does not want to remain signed in
                                // remove the user details rev id from storage
                                window.localStorage.removeItem("utopiasoftware-edpms-app-status");

                            case 33:

                                // flag that the user just completed a sign in for this session
                                window.sessionStorage.setItem("utopiasoftware-edpms-user-logged-in", "yes");

                                // move user to the main menu page
                                _context8.next = 36;
                                return Promise.all([$('ons-splitter').get(0).content.load("app-main-template"), $('#loader-modal').get(0).hide()]);

                            case 36:
                                _context8.next = 42;
                                break;

                            case 38:
                                _context8.prev = 38;
                                _context8.t1 = _context8["catch"](6);

                                $('#loader-modal').get(0).hide();
                                ons.notification.alert(_context8.t1.message, { title: '<span style="color: red">Sign In Failed</span>',
                                    buttonLabels: ['OK'], modifier: 'utopiasoftware-alert-dialog' });

                            case 42:
                            case "end":
                                return _context8.stop();
                        }
                    }
                }, _callee8, this, [[6, 38], [17, 23]]);
            }));

            function formValidated() {
                return _ref8.apply(this, arguments);
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
                var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                    var serverResponse, allProjects;
                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                        while (1) {
                            switch (_context9.prev = _context9.next) {
                                case 0:
                                    if (!(!ons.isReady() || utopiasoftware[utopiasoftware_app_namespace].model.isAppReady === false)) {
                                        _context9.next = 3;
                                        break;
                                    }

                                    setTimeout(loadPageOnAppReady, 500); // call this function again after half a second
                                    return _context9.abrupt("return");

                                case 3:

                                    // listen for the back button event
                                    /*$('#app-main-navigator').get(0).topPage.onDeviceBackButton =
                                        utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.backButtonClicked;*/
                                    event.target.onDeviceBackButton = utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.backButtonClicked;

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

                                    _context9.prev = 8;

                                    // keep device awake during the downloading process
                                    window.plugins.insomnia.keepAwake();
                                    // check if the user just completed a signin or log-in

                                    if (!(window.sessionStorage.getItem("utopiasoftware-edpms-user-logged-in") === "yes" && window.sessionStorage.getItem("utopiasoftware-edpms-refresh-page") !== "yes")) {
                                        _context9.next = 46;
                                        break;
                                    }

                                    // beginning uploading app data
                                    $('#determinate-progress-modal .modal-message').html('Downloading projects data for offline use...');
                                    $('#determinate-progress-modal').get(0).show();
                                    $('#determinate-progress-modal #determinate-progress').get(0).value = 30;

                                    // get the projects data to be cached
                                    _context9.next = 16;
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
                                    serverResponse = _context9.sent;


                                    serverResponse = JSON.parse(serverResponse); // convert the response to JSON object

                                    $('#determinate-progress-modal #determinate-progress').get(0).value = 35;

                                    // delete all previous project data/docs
                                    _context9.next = 21;
                                    return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.find({
                                        selector: {
                                            "TYPE": {
                                                "$eq": "projects"
                                            } },
                                        fields: ["_id", "_rev", "PROJECTID", "TITLE", "CONTRACTSUM", "CONTRACTOR", "CONTRACTORID", "MDAID", "TYPE"],
                                        use_index: ["ptracker-index-designdoc", "DOC_TYPE_INDEX"]
                                    });

                                case 21:
                                    allProjects = _context9.sent;


                                    // get all the returned projects and delete them
                                    allProjects = allProjects.docs.map(function (currentValue, index, array) {
                                        currentValue._deleted = true; // mark the document as deleted
                                        return currentValue;
                                    });

                                    // check if there are any project data to delete

                                    if (!(allProjects.length > 0)) {
                                        _context9.next = 26;
                                        break;
                                    }

                                    _context9.next = 26;
                                    return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.bulkDocs(allProjects);

                                case 26:

                                    $('#determinate-progress-modal #determinate-progress').get(0).value = 45;

                                    // store the all the project data received
                                    _context9.next = 29;
                                    return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.bulkDocs(serverResponse);

                                case 29:
                                    // inform the user that milestone data is being downloaded for offline use
                                    $('#determinate-progress-modal .modal-message').html('Downloading milestones data for offline use...');

                                    $('#determinate-progress-modal #determinate-progress').get(0).value = 50;

                                    // get the milestones data to be cached
                                    _context9.next = 33;
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
                                    serverResponse = _context9.sent;


                                    serverResponse = JSON.parse(serverResponse); // convert the response to JSON object

                                    $('#determinate-progress-modal #determinate-progress').get(0).value = 75;

                                    // delete all previous milestones /docs
                                    _context9.next = 38;
                                    return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.find({
                                        selector: {
                                            "TYPE": {
                                                "$eq": "BOQ"
                                            } },
                                        fields: ["_id", "_rev", "CATEGORY", "AMOUNT", "RATE", "PROJECTID", "DDATE", "BOQID", "TYPE"],
                                        use_index: ["ptracker-index-designdoc", "DOC_TYPE_INDEX"]
                                    });

                                case 38:
                                    allProjects = _context9.sent;


                                    // get all the returned milestones and delete them
                                    allProjects = allProjects.docs.map(function (currentValue, index, array) {
                                        currentValue._deleted = true; // mark the document as deleted
                                        return currentValue;
                                    });

                                    // check if there are any milestone data to delete

                                    if (!(allProjects.length > 0)) {
                                        _context9.next = 43;
                                        break;
                                    }

                                    _context9.next = 43;
                                    return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.bulkDocs(allProjects);

                                case 43:

                                    $('#determinate-progress-modal #determinate-progress').get(0).value = 100;

                                    // store the all the milestone data received
                                    _context9.next = 46;
                                    return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.bulkDocs(serverResponse);

                                case 46:
                                    if (!(window.sessionStorage.getItem("utopiasoftware-edpms-user-logged-in") !== "yes" && !utopiasoftware[utopiasoftware_app_namespace].model.userDetails)) {
                                        _context9.next = 50;
                                        break;
                                    }

                                    _context9.next = 49;
                                    return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.get("userDetails");

                                case 49:
                                    utopiasoftware[utopiasoftware_app_namespace].model.userDetails = _context9.sent;

                                case 50:
                                    if (!(window.sessionStorage.getItem("utopiasoftware-edpms-user-logged-in") === "yes" && window.sessionStorage.getItem("utopiasoftware-edpms-refresh-page") !== "yes")) {
                                        _context9.next = 53;
                                        break;
                                    }

                                    _context9.next = 53;
                                    return Promise.all([$('#determinate-progress-modal').get(0).hide()]);

                                case 53:
                                    _context9.next = 55;
                                    return Promise.all([$('#loader-modal').get(0).hide()]);

                                case 55:

                                    // this only displays when page is NOT marked as being loaded from a user refresh request
                                    if (window.sessionStorage.getItem("utopiasoftware-edpms-refresh-page") !== "yes") {
                                        // display a toast to the user
                                        ons.notification.toast("<ons-icon icon=\"md-check\" size=\"20px\" style=\"color: #00D5C3\"></ons-icon> <span style=\"text-transform: capitalize; display: inline-block; margin-left: 1em\">Welcome " + utopiasoftware[utopiasoftware_app_namespace].model.userDetails.userDetails.firstname + "</span>", { timeout: 3000 });
                                    }
                                    _context9.next = 63;
                                    break;

                                case 58:
                                    _context9.prev = 58;
                                    _context9.t0 = _context9["catch"](8);

                                    // display error message indicating that projects data could not be loaded
                                    $('#search-project-page .project-data-download-error').css("display", "block");
                                    $('#determinate-progress-modal').get(0).hide();
                                    $('#loader-modal').get(0).hide();

                                case 63:
                                    _context9.prev = 63;

                                    // clear the page refresh marker from device session storage
                                    window.sessionStorage.removeItem("utopiasoftware-edpms-refresh-page");
                                    window.plugins.insomnia.allowSleepAgain(); // the device can go to sleep now
                                    return _context9.finish(63);

                                case 67:
                                case "end":
                                    return _context9.stop();
                            }
                        }
                    }, _callee9, this, [[8, 58, 63, 67]]);
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
            var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(keyEvent) {
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) {
                        switch (_context10.prev = _context10.next) {
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
                            case "end":
                                return _context10.stop();
                        }
                    }
                }, _callee10, this);
            }));

            function searchButtonClicked(_x3) {
                return _ref10.apply(this, arguments);
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
            var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) {
                        switch (_context11.prev = _context11.next) {
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

                                _context11.prev = 5;
                                _context11.next = 8;
                                return utopiasoftware[utopiasoftware_app_namespace].appCachedData.loadProjectData(true);

                            case 8:
                                // error the project data download error message
                                $('#search-project-page .project-data-download-error').css("display", "none");
                                _context11.next = 14;
                                break;

                            case 11:
                                _context11.prev = 11;
                                _context11.t0 = _context11["catch"](5);

                                // display the project data download error message
                                $('#search-project-page .project-data-download-error').css("display", "block");

                            case 14:
                            case "end":
                                return _context11.stop();
                        }
                    }
                }, _callee11, this, [[5, 11]]);
            }));

            function retryProjectDataDownloadButtonClicked() {
                return _ref11.apply(this, arguments);
            }

            return retryProjectDataDownloadButtonClicked;
        }(),


        /**
         * method is triggered when the project search search/find form is successfully validated
         * @returns {Promise<void>}
         */
        formValidated: function () {
            var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                var dbQueryResult, searchedProjectDetails;
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                    while (1) {
                        switch (_context12.prev = _context12.next) {
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

                                _context12.prev = 6;
                                _context12.next = 9;
                                return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.find({
                                    selector: {
                                        "PROJECTID": {
                                            "$eq": $('#search-project-page #search-project-search-input').get(0).value.trim().toLocaleUpperCase()
                                        },
                                        "TYPE": {
                                            "$eq": "projects"
                                        } },
                                    fields: ["_id", "_rev", "PROJECTID", "TITLE", "CONTRACTSUM", "CONTRACTOR", "CONTRACTORID", "MDAID", "TYPE"],
                                    use_index: ["ptracker-index-designdoc", "FIND_PROJECT_BY_ID_INDEX"]
                                });

                            case 9:
                                dbQueryResult = _context12.sent;

                                if (!(dbQueryResult.docs.length == 0)) {
                                    _context12.next = 17;
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
                                return _context12.abrupt("return");

                            case 17:

                                // if the method gets to this point, it means a project was found
                                // assign the searched project object as the currently searched and chosen project object
                                utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.currentlySelectedProject = dbQueryResult.docs[0];
                                // create the searched project details to be displayed
                                searchedProjectDetails = "<div class=\"col-xs-6\" style=\"font-weight: bold; color: #000000; padding: 1rem;\">Project ID</div>";

                                searchedProjectDetails += "<div class=\"col-xs-6\" style=\"color: #000000; text-transform: uppercase; padding: 1rem;\">" + dbQueryResult.docs[0].PROJECTID + "</div>";
                                searchedProjectDetails += "<div class=\"col-xs-6\" style=\"font-weight: bold; color: #000000; padding: 1rem;\">Title</div>";
                                searchedProjectDetails += "<div class=\"col-xs-6\" style=\"color: #000000; text-transform: capitalize; padding: 1rem;\">" + dbQueryResult.docs[0].TITLE + "</div>";
                                searchedProjectDetails += "<div class=\"col-xs-6\" style=\"font-weight: bold; color: #000000; padding: 1rem;\">Contractor</div>";
                                searchedProjectDetails += "<div class=\"col-xs-6\" style=\"color: #000000; text-transform: capitalize; padding: 1rem;\">" + dbQueryResult.docs[0].CONTRACTOR + "</div>";
                                searchedProjectDetails += "<div class=\"col-xs-6\" style=\"font-weight: bold; color: #000000; padding: 1rem;\">Contract Sum</div>";
                                searchedProjectDetails += "<div class=\"col-xs-6\" style=\"color: #000000; text-transform: capitalize; padding: 1rem;\">" + kendo.toString(kendo.parseFloat(dbQueryResult.docs[0].CONTRACTSUM), "n2") + "</div>";

                                // attach the generated project details to the page
                                $('#search-project-page #search-project-details').html(searchedProjectDetails);

                                // hide the page preloader
                                $('#search-project-page .page-preloader').css("display", "none");

                                // perform actions to reveal result
                                kendo.fx($('#search-project-page #search-project-details')).fade("in").duration(550).play();
                                _context12.next = 31;
                                return Promise.resolve(kendo.fx($('#search-project-page ons-bottom-toolbar')).slideIn("up").duration(600).play());

                            case 31:
                                $('#search-project-page ons-bottom-toolbar').css("display", "block");
                                _context12.next = 41;
                                break;

                            case 34:
                                _context12.prev = 34;
                                _context12.t0 = _context12["catch"](6);

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
                            case "end":
                                return _context12.stop();
                        }
                    }
                }, _callee12, this, [[6, 34]]);
            }));

            function formValidated() {
                return _ref12.apply(this, arguments);
            }

            return formValidated;
        }(),


        /**
         * method is triggered when the device back button is clicked OR a similar action is triggered
         */
        backButtonClicked: function backButtonClicked() {

            // check if the side menu is open
            if ($('ons-splitter').get(0).right.isOpen) {
                // side menu open, so close it
                $('ons-splitter').get(0).right.close();
                return; // exit the method
            }

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
                var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                    var projectData, dbQueryResult, carouselContent, index;
                    return regeneratorRuntime.wrap(function _callee13$(_context13) {
                        while (1) {
                            switch (_context13.prev = _context13.next) {
                                case 0:
                                    if (!(!ons.isReady() || utopiasoftware[utopiasoftware_app_namespace].model.isAppReady === false || !ej || !Viewer)) {
                                        _context13.next = 3;
                                        break;
                                    }

                                    setTimeout(loadPageOnAppReady, 500); // call this function again after half a second
                                    return _context13.abrupt("return");

                                case 3:

                                    // listen for the back button event
                                    $('#app-main-navigator').get(0).topPage.onDeviceBackButton = utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.backButtonClicked;

                                    // show the page preloader
                                    $('#project-evaluation-page .page-preloader').css("display", "block");
                                    // hide the items that are not to be displayed
                                    $('#project-evaluation-page .project-evaluation-instructions, ' + '#project-evaluation-page .content, #project-evaluation-page .no-milestone-found').css("display", "none");

                                    // pick the project data object for which milestones are to be evaluated
                                    projectData = $('#app-main-navigator').get(0).topPage.data.projectData;
                                    _context13.prev = 7;
                                    _context13.next = 10;
                                    return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.find({
                                        selector: {
                                            "BOQID": {
                                                "$exists": true
                                            },
                                            "TYPE": {
                                                "$eq": "BOQ"
                                            },
                                            "PROJECTID": {
                                                "$eq": projectData.PROJECTID
                                            }
                                        },
                                        use_index: ["ptracker-index-designdoc", "FIND_BOQ_BY_ID_INDEX"]

                                    });

                                case 10:
                                    dbQueryResult = _context13.sent;

                                    if (!(dbQueryResult.docs.length == 0)) {
                                        _context13.next = 13;
                                        break;
                                    }

                                    throw "error";

                                case 13:

                                    // if the code gets to this point, milestones were returned
                                    // sort the returned milestones array
                                    dbQueryResult.docs.sort(function (firstElem, secondElement) {
                                        return window.parseInt(firstElem.BOQID) - window.parseInt(secondElement.BOQID);
                                    });

                                    utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectMilestones = dbQueryResult.docs; // update the current project milestones

                                    // create the evaluation carousel item based on the milestones retrieved
                                    carouselContent = "";

                                    for (index = 0; index < dbQueryResult.docs.length; index++) {
                                        carouselContent = "\n                        <ons-carousel-item style=\"overflow-y: auto\">\n                            <ons-card>\n                                <div style=\"font-size: 1.2em\">\n                                    " + dbQueryResult.docs[index].CATEGORY + "\n                                </div>\n                                <div class=\"project-evaluation-slider\"></div>\n                                <div class=\"project-evaluation-milestone-amount\" style=\"margin-top: 1em; font-size: 1em;\">\n                                    <span style=\"display: inline-block; font-style: italic; margin-right: 1em;\">Milestone Value </span> \n                                    " + kendo.toString(kendo.parseFloat(dbQueryResult.docs[index].AMOUNT), "n2") + "\n                                </div>\n                                <div class=\"project-evaluation-milestone-current-value\" style=\"font-size: 1em;\">\n                                    <span style=\"display: inline-block; font-style: italic; margin-right: 1em;\">Value Completed </span> \n                                    " + kendo.toString(kendo.parseFloat(0), "n2") + "\n                                </div>\n                            </ons-card>\n                        </ons-carousel-item>";
                                        $('#project-evaluation-page #project-evaluation-carousel').append(carouselContent);
                                    } // end of for loop

                                    // append the carousel content used for displaying evaluation pictures
                                    carouselContent = "\n                    <ons-carousel-item style=\"overflow-y: scroll\">\n                        <div class=\"row project-evaluation-images-container\" style=\"margin-top: 1.5em;\">\n                            <div class=\"col-xs-6\" style=\"padding: 0.5em; position: relative\">\n                                <div style=\"position: absolute; top: 5px;\">\n                                    <ons-speed-dial id=\"project-evaluation-picture-speed-dial-1\" direction=\"down\">\n                                        <ons-fab modifier=\"utopiasoftware-pic-capture-speed-dial\"\n                                                 class=\"utopiasoftware-pic-capture-speed-dial\" \n                                                 onclick=\"utopiasoftware[utopiasoftware_app_namespace].controller.\n                                                 projectEvaluationPageViewModel.pictureSpeedDialClicked(1)\">\n                                            <ons-icon icon=\"md-image-o\"></ons-icon>\n                                        </ons-fab>\n                                        <ons-speed-dial-item modifier=\"utopiasoftware-pic-capture-speed-dial-item\"\n                                                             class=\"utopiasoftware-pic-capture-speed-dial\" \n                                                             onclick=\"utopiasoftware[utopiasoftware_app_namespace].controller.\n                                                 projectEvaluationPageViewModel.pictureCaptureButtonClicked(1)\">\n                                            <ons-icon icon=\"md-camera\"></ons-icon>\n                                        </ons-speed-dial-item>\n                                        <ons-speed-dial-item modifier=\"utopiasoftware-pic-capture-speed-dial-item\"\n                                                             class=\"utopiasoftware-pic-capture-speed-dial\" \n                                                             onclick=\"utopiasoftware[utopiasoftware_app_namespace].controller.\n                                                 projectEvaluationPageViewModel.deletePictureButtonClicked(1)\">\n                                            <ons-icon icon=\"md-delete\"></ons-icon>\n                                        </ons-speed-dial-item>\n                                    </ons-speed-dial>\n                                </div>\n                                <img id=\"project-evaluation-picture-1\" src=\"css/app-images/project-evaluation-photo-placeholder.png\" style=\"width: 100%; border: 2px darkgray groove\" alt=\"Picture 1\">\n                            </div>\n                            <div class=\"col-xs-6\" style=\"padding: 0.5em; position: relative\">\n                                <div style=\"position: absolute; top: 5px;\">\n                                    <ons-speed-dial id=\"project-evaluation-picture-speed-dial-2\" direction=\"down\">\n                                        <ons-fab modifier=\"utopiasoftware-pic-capture-speed-dial\"\n                                                 class=\"utopiasoftware-pic-capture-speed-dial\" \n                                                 onclick=\"utopiasoftware[utopiasoftware_app_namespace].controller.\n                                                 projectEvaluationPageViewModel.pictureSpeedDialClicked(2)\">\n                                            <ons-icon icon=\"md-image-o\"></ons-icon>\n                                        </ons-fab>\n                                        <ons-speed-dial-item modifier=\"utopiasoftware-pic-capture-speed-dial-item\"\n                                                             class=\"utopiasoftware-pic-capture-speed-dial\" \n                                                             onclick=\"utopiasoftware[utopiasoftware_app_namespace].controller.\n                                                 projectEvaluationPageViewModel.pictureCaptureButtonClicked(2)\">\n                                            <ons-icon icon=\"md-camera\"></ons-icon>\n                                        </ons-speed-dial-item>\n                                        <ons-speed-dial-item modifier=\"utopiasoftware-pic-capture-speed-dial-item\"\n                                                             class=\"utopiasoftware-pic-capture-speed-dial\" \n                                                             onclick=\"utopiasoftware[utopiasoftware_app_namespace].controller.\n                                                 projectEvaluationPageViewModel.deletePictureButtonClicked(2)\">\n                                            <ons-icon icon=\"md-delete\"></ons-icon>\n                                        </ons-speed-dial-item>\n                                    </ons-speed-dial>\n                                </div>\n                                <img id=\"project-evaluation-picture-2\" src=\"css/app-images/project-evaluation-photo-placeholder.png\" style=\"width: 100%; border: 2px darkgray groove\" alt=\"Picture 2\">\n                            </div>\n                            <div class=\"col-xs-offset-3 col-xs-6\" style=\"padding: 0.5em; position: relative\">\n                                <div style=\"position: absolute; top: 5px;\">\n                                    <ons-speed-dial id=\"project-evaluation-picture-speed-dial-3\" direction=\"down\">\n                                        <ons-fab modifier=\"utopiasoftware-pic-capture-speed-dial\"\n                                                 class=\"utopiasoftware-pic-capture-speed-dial\" \n                                                 onclick=\"utopiasoftware[utopiasoftware_app_namespace].controller.\n                                                 projectEvaluationPageViewModel.pictureSpeedDialClicked(3)\">\n                                            <ons-icon icon=\"md-image-o\"></ons-icon>\n                                        </ons-fab>\n                                        <ons-speed-dial-item modifier=\"utopiasoftware-pic-capture-speed-dial-item\"\n                                                             class=\"utopiasoftware-pic-capture-speed-dial\" \n                                                             onclick=\"utopiasoftware[utopiasoftware_app_namespace].controller.\n                                                 projectEvaluationPageViewModel.pictureCaptureButtonClicked(3)\">\n                                            <ons-icon icon=\"md-camera\"></ons-icon>\n                                        </ons-speed-dial-item>\n                                        <ons-speed-dial-item modifier=\"utopiasoftware-pic-capture-speed-dial-item\"\n                                                             class=\"utopiasoftware-pic-capture-speed-dial\" \n                                                             onclick=\"utopiasoftware[utopiasoftware_app_namespace].controller.\n                                                 projectEvaluationPageViewModel.deletePictureButtonClicked(3)\">\n                                            <ons-icon icon=\"md-delete\"></ons-icon>\n                                        </ons-speed-dial-item>\n                                    </ons-speed-dial>\n                                </div>\n                                <img id=\"project-evaluation-picture-3\" src=\"css/app-images/project-evaluation-photo-placeholder.png\" style=\"width: 100%; border: 2px darkgray groove\" alt=\"Picture 3\">\n                            </div>\n                        </div>\n                    </ons-carousel-item>";
                                    // append the generated carousel content to the project evaluation carousel
                                    $('#project-evaluation-page #project-evaluation-carousel').append(carouselContent);

                                    // append the carousel content used for displaying project location on a map
                                    carouselContent = "\n                    <ons-carousel-item style=\"position: relative;\">\n                        <div id=\"project-evaluation-map\" style=\"position: absolute; top: 0; left: 0; width: 100%; \n                            height: 100%; bottom: 0; border: 1px #00d5c3 solid; text-align: center;\">\n                            <ons-button style=\"background-color: #3f51b5; position: relative; top: 3px;\n                            display: inline-block;\"\n                            onclick=\"utopiasoftware[utopiasoftware_app_namespace].\n                            controller.projectEvaluationPageViewModel.getProjectGeoLocationButtonClicked()\">Get Project Location</ons-button>\n                            <div id=\"project-evaluation-gps-progress\" \n                            style=\"position: relative; display: none; top: 65px; text-align: center\">\n                                <ons-progress-circular indeterminate modifier=\"project-gps-location-progress\"></ons-progress-circular>\n                            </div>\n                            <div id=\"project-evaluation-gps-location-tag\" style=\"color: #ffffff; \n                            font-weight: bold; font-size: 0.8em; text-transform: uppercase; \n                            background-color: rgba(0,213,195,0.80); padding: 0.6em; border-radius: 10px; \n                            width: 80%; position: absolute; bottom: 2px; display: inline-block; \n                            left: 10%; \n                            overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">Location:</div>\n                        </div>\n                    </ons-carousel-item>";
                                    // append the generated carousel content to the project evaluation carousel
                                    $('#project-evaluation-page #project-evaluation-carousel').append(carouselContent);

                                    // append the carousel content used for displaying project remarks textarea
                                    carouselContent = "\n                    <ons-carousel-item style=\"overflow-y: auto\">\n                        <textarea id=\"project-evaluation-remarks\" spellcheck=\"true\" \n                        style=\"width: 80%; height: 4em; margin-left: 10%;\n                        margin-right: 10%; border: none; border-bottom: 2px #00D5C3 solid; \n                        border-left: 2px #00D5C3 solid; border-right: 2px #00D5C3 solid; \n                        background-color: transparent;\"></textarea>\n                    </ons-carousel-item>";
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
                                                $('.project-evaluation-milestone-current-value', $(element).closest('ons-card')).html("<span style=\"display: inline-block; font-style: italic; margin-right: 1em;\">Value Completed </span> \n                                    " + kendo.toString(kendo.parseFloat(changedEvent.value / 100 * kendo.parseFloat(dbQueryResult.docs[element._ptracker_index].AMOUNT)), "n2"));
                                            }
                                        });
                                        aSlider.appendTo(element);
                                        element._ptracker_slider = aSlider;
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
                                    _context13.next = 36;
                                    break;

                                case 30:
                                    _context13.prev = 30;
                                    _context13.t0 = _context13["catch"](7);

                                    // hide the page preloader
                                    $('#project-evaluation-page .page-preloader').css("display", "none");
                                    // hide the items that are not to be displayed
                                    $('#project-evaluation-page .project-evaluation-instructions, #project-evaluation-page .content').css("display", "none");
                                    $('#project-evaluation-page #project-evaluation-prev-button, #project-evaluation-page #project-evaluation-next-button').css("display", "none");
                                    // display the message to inform user that there are no milestones available for the project
                                    $('#project-evaluation-page .no-milestone-found').css("display", "block");

                                case 36:
                                    _context13.prev = 36;

                                    // hide the loader
                                    $('#loader-modal').get(0).hide();
                                    return _context13.finish(36);

                                case 39:
                                case "end":
                                    return _context13.stop();
                            }
                        }
                    }, _callee13, this, [[7, 30, 36, 39]]);
                }));

                return function loadPageOnAppReady() {
                    return _ref13.apply(this, arguments);
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
            if (utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap && utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap._ptracker_isMapReady === true) {
                // hide the map object
                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap.setVisible(false);
            }
        },

        /**
         * method is triggered when page is destroyed
         */
        pageDestroy: function pageDestroy() {
            // destroy the pictures Viewer widget instance
            if (utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.pictureViewer) {
                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.pictureViewer.destroy();
            }
            // reset other object properties
            utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectMilestones = null;
            utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectPicturesUrls = [null];
            utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.hasProjectEvaluationStarted = false;

            // check if Map already exists and is ready to be used
            if (utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap && utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap._ptracker_isMapReady === true) {
                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap.remove();
            }

            utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap = null;
            utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectGeoPosition = null;

            // destroy slider widgets created
            $('#project-evaluation-page .project-evaluation-slider').each(function (index, element) {
                // destroy the slider widget attached to this element
                element._ptracker_slider.destroy();
                element._ptracker_slider = null;
            });
        },

        /**
         * method is triggered when the device back button is clicked OR a similar action is triggered
         */
        backButtonClicked: function () {
            var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                var leaveProjectEvaluation;
                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                    while (1) {
                        switch (_context14.prev = _context14.next) {
                            case 0:
                                if (!$('ons-splitter').get(0).right.isOpen) {
                                    _context14.next = 3;
                                    break;
                                }

                                // side menu open, so close it
                                $('ons-splitter').get(0).right.close();
                                return _context14.abrupt("return");

                            case 3:
                                if (!(utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.isPictureViewerShowing === true)) {
                                    _context14.next = 6;
                                    break;
                                }

                                // Picture Viewer is showing
                                // hide it
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.pictureViewer.hide();
                                return _context14.abrupt("return");

                            case 6:
                                if (!( // update the project evaluation started flag to indicate evaluation has started
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.hasProjectEvaluationStarted === true)) {
                                    _context14.next = 12;
                                    break;
                                }

                                _context14.next = 9;
                                return ons.notification.confirm('', { title: '<ons-icon icon="md-alert-triangle" style="color: #3f51b5" size="33px"></ons-icon> <span style="color: #3f51b5; display: inline-block; margin-left: 1em;">Warning</span>',
                                    messageHTML: "You have NOT completed the evaluation. If you leave now, all evaluation data will be cancelled.<br><br> Do you want to leave the project evaluation?",
                                    buttonLabels: ['No', 'Yes'], modifier: 'utopiasoftware-alert-dialog' });

                            case 9:
                                leaveProjectEvaluation = _context14.sent;

                                if (!(leaveProjectEvaluation == 0)) {
                                    _context14.next = 12;
                                    break;
                                }

                                return _context14.abrupt("return");

                            case 12:

                                // move to the project evaluation page
                                $('#app-main-navigator').get(0).popPage();

                            case 13:
                            case "end":
                                return _context14.stop();
                        }
                    }
                }, _callee14, this);
            }));

            function backButtonClicked() {
                return _ref14.apply(this, arguments);
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
            var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(pictureNumber) {
                var permissionStatuses, imageUrl;
                return regeneratorRuntime.wrap(function _callee15$(_context15) {
                    while (1) {
                        switch (_context15.prev = _context15.next) {
                            case 0:
                                permissionStatuses = null; // holds the statuses of the runtime permissions requested

                                _context15.prev = 1;
                                _context15.next = 4;
                                return new Promise(function (resolve, reject) {
                                    cordova.plugins.diagnostic.requestRuntimePermissions(resolve, reject, [cordova.plugins.diagnostic.permission.CAMERA]);
                                });

                            case 4:
                                permissionStatuses = _context15.sent;

                                if (!(!permissionStatuses || permissionStatuses[cordova.plugins.diagnostic.permission.CAMERA] !== cordova.plugins.diagnostic.permissionStatus.GRANTED)) {
                                    _context15.next = 7;
                                    break;
                                }

                                throw "error - no runtime permissions";

                            case 7:

                                // disable screen orientation lock
                                screen.orientation.unlock();

                                // open the device camera app and capture a photo
                                _context15.next = 10;
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
                                imageUrl = _context15.sent;
                                _context15.t0 = pictureNumber;
                                _context15.next = _context15.t0 === 1 ? 14 : _context15.t0 === 2 ? 17 : _context15.t0 === 3 ? 20 : 23;
                                break;

                            case 14:
                                // store the image url in the correct picturesUrls array index
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectPicturesUrls[pictureNumber] = imageUrl;
                                // update the image src for the correct project picture, so that picture can be displayed
                                $('#project-evaluation-page #project-evaluation-picture-1').attr("src", imageUrl);
                                return _context15.abrupt("break", 23);

                            case 17:
                                // store the image url in the correct picturesUrls array index
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectPicturesUrls[pictureNumber] = imageUrl;
                                // update the image src for the correct project picture, so that picture can be displayed
                                $('#project-evaluation-page #project-evaluation-picture-2').attr("src", imageUrl);
                                return _context15.abrupt("break", 23);

                            case 20:
                                // store the image url in the correct picturesUrls array index
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectPicturesUrls[pictureNumber] = imageUrl;
                                // update the image src for the correct project picture, so that picture can be displayed
                                $('#project-evaluation-page #project-evaluation-picture-3').attr("src", imageUrl);
                                return _context15.abrupt("break", 23);

                            case 23:

                                // update the project evaluation started flag to indicate evaluation has started
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.hasProjectEvaluationStarted = true;

                                // update the picture viewer widget
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.pictureViewer.update();
                                _context15.next = 30;
                                break;

                            case 27:
                                _context15.prev = 27;
                                _context15.t1 = _context15["catch"](1);

                                // inform the user of the error
                                window.plugins.toast.showWithOptions({
                                    message: "Photo Capture Failed - " + _context15.t1,
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
                                _context15.prev = 30;

                                // lock the device orientation back to 'portrait'
                                screen.orientation.lock('portrait');
                                return _context15.finish(30);

                            case 33:
                            case "end":
                                return _context15.stop();
                        }
                    }
                }, _callee15, this, [[1, 27, 30, 33]]);
            }));

            function pictureCaptureButtonClicked(_x4) {
                return _ref15.apply(this, arguments);
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
            var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(pictureNumber) {
                var deletePhoto;
                return regeneratorRuntime.wrap(function _callee16$(_context16) {
                    while (1) {
                        switch (_context16.prev = _context16.next) {
                            case 0:
                                if (utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectPicturesUrls[pictureNumber]) {
                                    _context16.next = 2;
                                    break;
                                }

                                return _context16.abrupt("return");

                            case 2:
                                _context16.next = 4;
                                return ons.notification.confirm('Do you want to delete the photo?', { title: '<ons-icon icon="md-delete" style="color: #3f51b5" size="33px"></ons-icon> <span style="color: #3f51b5; display: inline-block; margin-left: 1em;">Delete Photo</span>',
                                    buttonLabels: ['No', 'Yes'], modifier: 'utopiasoftware-alert-dialog' });

                            case 4:
                                deletePhoto = _context16.sent;

                                if (!(deletePhoto == 0)) {
                                    _context16.next = 7;
                                    break;
                                }

                                return _context16.abrupt("return");

                            case 7:

                                // remove the image url in the correct picturesUrls array index
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectPicturesUrls[pictureNumber] = null;
                                // update the image src to the "no photo" display
                                $('#project-evaluation-page #project-evaluation-picture-' + pictureNumber).attr("src", "css/app-images/project-evaluation-photo-placeholder.png");

                                // update the picture viewer widget
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.pictureViewer.update();

                            case 10:
                            case "end":
                                return _context16.stop();
                        }
                    }
                }, _callee16, this);
            }));

            function deletePictureButtonClicked(_x5) {
                return _ref16.apply(this, arguments);
            }

            return deletePictureButtonClicked;
        }(),


        /**
         * method is used to retrieve the project location by using the current GPS location of the device
         *
         * @returns {Promise<void>}
         */
        getProjectGeoLocationButtonClicked: function () {
            var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
                var permissionStatuses, isGPSEnabled, geoPosition, projectMarker;
                return regeneratorRuntime.wrap(function _callee17$(_context17) {
                    while (1) {
                        switch (_context17.prev = _context17.next) {
                            case 0:
                                permissionStatuses = null; // holds the statuses of the runtime permissions requested

                                _context17.prev = 1;
                                _context17.next = 4;
                                return new Promise(function (resolve, reject) {
                                    cordova.plugins.diagnostic.requestRuntimePermissions(resolve, reject, [cordova.plugins.diagnostic.permission.ACCESS_FINE_LOCATION]);
                                });

                            case 4:
                                permissionStatuses = _context17.sent;

                                if (!(!permissionStatuses || permissionStatuses[cordova.plugins.diagnostic.permission.ACCESS_FINE_LOCATION] !== cordova.plugins.diagnostic.permissionStatus.GRANTED)) {
                                    _context17.next = 7;
                                    break;
                                }

                                throw "error - no location permission";

                            case 7:
                                _context17.next = 9;
                                return new Promise(function (resolve, reject) {
                                    cordova.plugins.diagnostic.isGpsLocationEnabled(resolve, reject);
                                });

                            case 9:
                                isGPSEnabled = _context17.sent;

                                if (!(isGPSEnabled === false)) {
                                    _context17.next = 19;
                                    break;
                                }

                                _context17.next = 13;
                                return ons.notification.alert('', { title: '<ons-icon icon="md-pin" style="color: #3f51b5" size="33px"></ons-icon> <span style="color: #3f51b5; display: inline-block; margin-left: 1em;">Location Service</span>',
                                    messageHTML: "You need to enable you device location service to capture the project location. <br>Switch to Location Settings or enable the location service directly?",
                                    buttonLabels: ['Proceed'], modifier: 'utopiasoftware-alert-dialog' });

                            case 13:
                                _context17.next = 15;
                                return new Promise(function (resolve, reject) {
                                    cordova.plugins.locationAccuracy.request(function () {
                                        resolve(true);
                                    }, function () {
                                        resolve(false);
                                    }, cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
                                });

                            case 15:
                                isGPSEnabled = _context17.sent;

                                if (!(isGPSEnabled === false)) {
                                    _context17.next = 19;
                                    break;
                                }

                                // GPS IS STILL NOT ENABLED
                                // switch to the Location Settings screen, so user can manually enable Location Services
                                cordova.plugins.diagnostic.switchToLocationSettings();

                                return _context17.abrupt("return");

                            case 19:

                                // if method get here, GPS has been successfully enabled and app has authorisation to use it
                                // show the circular progress to indicate app has started working on getting user gps
                                $('#project-evaluation-page #project-evaluation-gps-progress').css("display", "block");
                                // get project's current location using device's gps geolocation
                                _context17.next = 22;
                                return new Promise(function (resolve, reject) {
                                    navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true, timeout: 300000, maximumAge: 5000 });
                                });

                            case 22:
                                geoPosition = _context17.sent;

                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectGeoPosition = geoPosition; // assign the retrieved geo position object to its appropriate object property

                                // flag that progress evaluation has started
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.hasProjectEvaluationStarted = true;

                                // make the app background transparent, so the map can show
                                $('html, body').addClass('utopiasoftware-transparent');

                                // update the location tag info displayed at the bottom of screen
                                $('#project-evaluation-page #project-evaluation-gps-location-tag').html("Location: " + geoPosition.coords.latitude + "," + geoPosition.coords.longitude);

                                // check if Map already exists and is ready to be used

                                if (!(utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap && utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap._ptracker_isMapReady === true)) {
                                    _context17.next = 37;
                                    break;
                                }

                                // map has previously been created and is ready for use
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap.setVisible(true); // make map visible

                                // hide circular progress display
                                $('#project-evaluation-page #project-evaluation-gps-progress').css("display", "none");

                                // animate the map camera
                                _context17.next = 32;
                                return new Promise(function (resolve, reject) {
                                    utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap.animateCamera({
                                        target: { lat: geoPosition.coords.latitude,
                                            lng: geoPosition.coords.longitude }
                                    }, function () {
                                        resolve();
                                    });
                                });

                            case 32:
                                _context17.next = 34;
                                return new Promise(function (resolve, reject) {
                                    utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap.clear(function () {
                                        resolve();
                                    });
                                });

                            case 34:
                                projectMarker = utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap.addMarker({
                                    position: {
                                        "lat": utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectGeoPosition.coords.latitude,
                                        "lng": utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectGeoPosition.coords.longitude
                                    },
                                    icon: '#00D5C3',
                                    'title': $('#app-main-navigator').get(0).topPage.data.projectData.TITLE.toLocaleUpperCase(),
                                    animation: plugin.google.maps.Animation.BOUNCE
                                });
                                // display marker info window

                                projectMarker.showInfoWindow();

                                return _context17.abrupt("return");

                            case 37:

                                // generate the geo map for the project evaluation
                                utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap = plugin.google.maps.Map.getMap($('#project-evaluation-page #project-evaluation-map').get(0), {
                                    'mapType': plugin.google.maps.MapTypeId.ROADMAP,
                                    'camera': {
                                        target: {
                                            lat: geoPosition.coords.latitude,
                                            lng: geoPosition.coords.longitude
                                        },
                                        tilt: 90,
                                        zoom: 20
                                    },
                                    controls: {
                                        'compass': false,
                                        'myLocationButton': false,
                                        'myLocation': false,
                                        'indoorPicker': false,
                                        'zoom': false,
                                        'mapToolbar': false
                                    },
                                    gestures: {
                                        scroll: false,
                                        tilt: false,
                                        zoom: false,
                                        rotate: false
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
                                    utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap._ptracker_isMapReady = true;
                                    // disable the ability to click on the map
                                    utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap.setClickable(false);

                                    // add a marker to identify the project's location on the map
                                    var projectMarker = utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap.addMarker({
                                        position: {
                                            "lat": utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectGeoPosition.coords.latitude,
                                            "lng": utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectGeoPosition.coords.longitude
                                        },
                                        icon: '#00D5C3',
                                        'title': $('#app-main-navigator').get(0).topPage.data.projectData.TITLE.toLocaleUpperCase(),
                                        animation: plugin.google.maps.Animation.BOUNCE
                                    });
                                    // display marker info window
                                    projectMarker.showInfoWindow();
                                });
                                _context17.next = 44;
                                break;

                            case 41:
                                _context17.prev = 41;
                                _context17.t0 = _context17["catch"](1);

                                // inform the user of the error
                                window.plugins.toast.showWithOptions({
                                    message: "Location Capture Failed - " + (_context17.t0.message || _context17.t0),
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

                            case 44:
                            case "end":
                                return _context17.stop();
                        }
                    }
                }, _callee17, this, [[1, 41]]);
            }));

            function getProjectGeoLocationButtonClicked() {
                return _ref17.apply(this, arguments);
            }

            return getProjectGeoLocationButtonClicked;
        }(),


        /**
         * method is triggered when the "project evaluation carousel" is changed
         * @param event
         */
        carouselChanged: function () {
            var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(event) {
                return regeneratorRuntime.wrap(function _callee18$(_context18) {
                    while (1) {
                        switch (_context18.prev = _context18.next) {
                            case 0:
                                // change the css display the prev fab button
                                $('#project-evaluation-page #project-evaluation-prev-button').css("display", "inline-block");
                                // hide the bottom toolbar of the page
                                $('#project-evaluation-page ons-bottom-toolbar').css("display", "none");

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

                                if (!(event.originalEvent.activeIndex < utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectMilestones.length)) {
                                    _context18.next = 8;
                                    break;
                                }

                                // change the primary instructions
                                $('#project-evaluation-page #project-evaluation-primary-instruction').html('Evaluate the milestones of project completion on a scale of 0 - 100%');
                                // change the milestone number
                                $('#project-evaluation-page #project-evaluation-milestone-badge').html("Milestone " + (event.originalEvent.activeIndex + 1));
                                return _context18.abrupt("return");

                            case 8:
                                if (!(event.originalEvent.activeIndex == utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectMilestones.length)) {
                                    _context18.next = 13;
                                    break;
                                }

                                // change the primary instructions
                                $('#project-evaluation-page #project-evaluation-primary-instruction').html('Capture the project progress in photos');
                                // change the milestone number
                                $('#project-evaluation-page #project-evaluation-milestone-badge').html("Project Photos");

                                // check if Map already exists and is ready to be used
                                if (utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap && utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap._ptracker_isMapReady === true) {
                                    // make the map invisible
                                    utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap.setVisible(false);
                                }

                                return _context18.abrupt("return");

                            case 13:
                                if (!(event.originalEvent.activeIndex == utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectMilestones.length + 1)) {
                                    _context18.next = 18;
                                    break;
                                }

                                // change the primary instructions
                                $('#project-evaluation-page #project-evaluation-primary-instruction').html('Capture the project geographical location');
                                // change the milestone number
                                $('#project-evaluation-page #project-evaluation-milestone-badge').html("Project Location");

                                // check if Map already exists and is ready to be used
                                if (utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap && utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap._ptracker_isMapReady === true) {
                                    // make the app background transparent, so the map can show
                                    $('html, body').addClass('utopiasoftware-transparent');
                                    // make the map visible
                                    utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap.setVisible(true);
                                }
                                return _context18.abrupt("return");

                            case 18:
                                if (!(event.originalEvent.activeIndex == utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectMilestones.length + 2)) {
                                    _context18.next = 26;
                                    break;
                                }

                                // change the primary instructions
                                $('#project-evaluation-page #project-evaluation-primary-instruction').html('Provide any remarks on the project evaluation (optional)');
                                // change the milestone number
                                $('#project-evaluation-page #project-evaluation-milestone-badge').html("Project Evaluation Remarks");

                                // display the page toolbar
                                _context18.next = 23;
                                return Promise.resolve(kendo.fx($('#project-evaluation-page ons-bottom-toolbar')).slideIn("up").duration(150).play());

                            case 23:
                                $('#project-evaluation-page ons-bottom-toolbar').css("display", "block");

                                // check if Map already exists and is ready to be used
                                if (utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap && utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap._ptracker_isMapReady === true) {
                                    // make the map invisible
                                    utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectEvaluationMap.setVisible(false);
                                }
                                return _context18.abrupt("return");

                            case 26:
                            case "end":
                                return _context18.stop();
                        }
                    }
                }, _callee18, this);
            }));

            function carouselChanged(_x6) {
                return _ref18.apply(this, arguments);
            }

            return carouselChanged;
        }(),


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
            // get the carousel used for the project evaluation
            var carousel = $('#project-evaluation-page #project-evaluation-carousel').get(0);

            // check which carousel index the user is on
            if (carousel.getActiveIndex() === utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectMilestones.length) // the user is on the picture capture carousel index
                {
                    // check if any photos have been taken at all
                    if (utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectPicturesUrls.length === 1) {
                        // if the length of array is 1, no photos have been taken at all
                        // inform the user of the validation error
                        window.plugins.toast.showWithOptions({
                            message: "Pictures not captured for project evaluation. Please take photo",
                            duration: 4000,
                            position: "center",
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

                        return; // exit method
                    }

                    // loop through the photos for the project and check if all project photos have been taken
                    for (var index = 1; index < 4; index++) {

                        // check if the photo in this index has been taken OR not
                        if (!utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectPicturesUrls[index]) {

                            // inform the user of the validation error
                            window.plugins.toast.showWithOptions({
                                message: "Picture " + index + " not captured for project evaluation. Please take photo",
                                duration: 4000,
                                position: "center",
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

                            return; // exit method
                        } // end of if
                    } // end of for loop
                }

            if (carousel.getActiveIndex() === utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectMilestones.length + 1) // the user is on the project location capture carousel index
                {
                    // check if the geo location in this index has been taken OR not
                    if (!utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectGeoPosition) {

                        // inform the user of validation error
                        window.plugins.toast.showWithOptions({
                            message: "Project Location not captured for project evaluation. Please capture location",
                            duration: 4000,
                            position: "center",
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

                        return; // exit method
                    }
                }

            // ALL VALIDATION SUCCESSFUL. Move to the next carousel item
            carousel.next();
        },


        /**
         * method is triggered when the "Save Report" Button is clicked
         */
        saveReportButtonClicked: function () {
            var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                var _this = this;

                var projectEvaluationReportData, jQuerySliderElements, index, milestoneEvaluation, dateStamp, savedDocResponse, _loop, _index;

                return regeneratorRuntime.wrap(function _callee19$(_context20) {
                    while (1) {
                        switch (_context20.prev = _context20.next) {
                            case 0:

                                // inform the user that saving report is taking place
                                $('#loader-modal-message').html("Saving Report...");
                                $('#loader-modal').get(0).show(); // show loader

                                // collect all data to be saved
                                projectEvaluationReportData = { milestonesEvaluations: [] }; // variable holds the project evaluation report data
                                // get the jQuery collection of sliders

                                jQuerySliderElements = $('#project-evaluation-page .project-evaluation-slider');

                                // get the score of all milestones evaluated

                                for (index = 0; index < utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectMilestones.length; index++) {
                                    milestoneEvaluation = { milestoneId: utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectMilestones[index].BOQID,
                                        milestoneTitle: utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectMilestones[index].CATEGORY,
                                        milestoneRate: utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectMilestones[index].RATE,
                                        milestoneScore: jQuerySliderElements.eq(index).get(0)._ptracker_slider.value };

                                    // add the milestoneEvaluation data to the collection

                                    projectEvaluationReportData.milestonesEvaluations.push(milestoneEvaluation);
                                }

                                // attach the project data to the project evaluation report data
                                projectEvaluationReportData.projectData = $('#app-main-navigator').get(0).topPage.data.projectData;
                                // attach the project evalution report's geo location
                                projectEvaluationReportData.projectGeoPosition = {
                                    latitude: utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectGeoPosition.coords.latitude,
                                    longitude: utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectGeoPosition.coords.longitude };
                                // attach the projection evalution report's additional remarks
                                projectEvaluationReportData.reportRemarks = $('#project-evaluation-page #project-evaluation-remarks').val().trim();

                                // create a unique report title/id for the evaluation report
                                dateStamp = new Date();

                                projectEvaluationReportData.title = projectEvaluationReportData.projectData.PROJECTID + "-Report-" + dateStamp.getTime();
                                // add other metadata to the evaluation report
                                projectEvaluationReportData.dateStamp = dateStamp.getTime();
                                projectEvaluationReportData.sortingDate = [kendo.toString(dateStamp, "yyyy"), kendo.toString(dateStamp, "MM"), kendo.toString(dateStamp, "dd"), kendo.toString(dateStamp, "HH"), kendo.toString(dateStamp, "mm")];
                                projectEvaluationReportData.formattedDate = kendo.toString(dateStamp, "yyyy-MM-dd HH:mm:ss");
                                projectEvaluationReportData.evaluatedBy = utopiasoftware[utopiasoftware_app_namespace].model.userDetails.userDetails.username;
                                projectEvaluationReportData._id = projectEvaluationReportData.title;
                                projectEvaluationReportData.TYPE = "saved report";

                                _context20.prev = 16;
                                _context20.next = 19;
                                return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.put(projectEvaluationReportData);

                            case 19:
                                savedDocResponse = _context20.sent;
                                _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop(_index) {
                                    var fileEntry, file, fileBlob;
                                    return regeneratorRuntime.wrap(function _loop$(_context19) {
                                        while (1) {
                                            switch (_context19.prev = _context19.next) {
                                                case 0:
                                                    _context19.next = 2;
                                                    return new Promise(function (resolve, reject) {
                                                        window.resolveLocalFileSystemURL(utopiasoftware[utopiasoftware_app_namespace].controller.projectEvaluationPageViewModel.projectPicturesUrls[_index], resolve, reject);
                                                    });

                                                case 2:
                                                    fileEntry = _context19.sent;
                                                    _context19.next = 5;
                                                    return new Promise(function (resolve, reject) {
                                                        fileEntry.file(resolve, reject);
                                                    });

                                                case 5:
                                                    file = _context19.sent;
                                                    _context19.next = 8;
                                                    return new Promise(function (resolve, reject) {
                                                        var fileReader = new FileReader();
                                                        fileReader.onloadend = function () {
                                                            if (this.error) {
                                                                // an error occurred
                                                                reject(this.error); // reject the promise
                                                            }
                                                            // resolve to the Blob object
                                                            resolve(new Blob([new Uint8Array(this.result)], { type: 'image/jpeg' }));
                                                        };

                                                        fileReader.readAsArrayBuffer(file);
                                                    });

                                                case 8:
                                                    fileBlob = _context19.sent;
                                                    _context19.next = 11;
                                                    return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.putAttachment(savedDocResponse.id, "picture" + _index + ".jpg", savedDocResponse.rev, fileBlob, "image/jpeg");

                                                case 11:
                                                    savedDocResponse = _context19.sent;

                                                case 12:
                                                case "end":
                                                    return _context19.stop();
                                            }
                                        }
                                    }, _loop, _this);
                                });
                                _index = 1;

                            case 22:
                                if (!(_index < 4)) {
                                    _context20.next = 27;
                                    break;
                                }

                                return _context20.delegateYield(_loop(_index), "t0", 24);

                            case 24:
                                _index++;
                                _context20.next = 22;
                                break;

                            case 27:

                                console.log("SAVED REPORT ", projectEvaluationReportData);
                                // hide loader
                                _context20.next = 30;
                                return $('#loader-modal').get(0).hide();

                            case 30:
                                _context20.next = 32;
                                return ons.notification.alert('This evaluation report has been saved successfully', { title: '<ons-icon icon="fa-check" style="color: #00B2A0;" size="25px"></ons-icon> <span style="color: #00B2A0; display: inline-block; margin-left: 1em;">Evaluation Report Saved</span>',
                                    buttonLabels: ['OK'], modifier: 'utopiasoftware-alert-dialog' });

                            case 32:

                                // flag to the app that you are going back to a page that needs to be refreshed
                                window.sessionStorage.setItem("utopiasoftware-edpms-refresh-page", "yes");
                                // move back to the project search page
                                $('#app-main-navigator').get(0).resetToPage("search-project-page.html", { pop: true });

                                _context20.next = 42;
                                break;

                            case 36:
                                _context20.prev = 36;
                                _context20.t1 = _context20["catch"](16);

                                console.log("SAVE ERROR", _context20.t1);
                                try {
                                    // remove the project evaluation report sheet document which failed to save properly from the app database
                                    utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.remove(savedDocResponse.id, savedDocResponse.rev);
                                } catch (err2) {}
                                $('#loader-modal').get(0).hide();
                                ons.notification.alert("saving evaluation report sheet failed. Please try again. " + (_context20.t1.message || ""), { title: '<span style="color: red">Saving Report Failed</span>',
                                    buttonLabels: ['OK'], modifier: 'utopiasoftware-alert-dialog' });

                            case 42:
                                _context20.prev = 42;

                                // hide loader
                                $('#loader-modal').get(0).hide();
                                return _context20.finish(42);

                            case 45:
                            case "end":
                                return _context20.stop();
                        }
                    }
                }, _callee19, this, [[16, 36, 42, 45]]);
            }));

            function saveReportButtonClicked() {
                return _ref19.apply(this, arguments);
            }

            return saveReportButtonClicked;
        }()
    },

    /**
     * this is the view-model/controller for the View Reports page
     */
    viewReportsPageViewModel: {

        /**
         * event is triggered when page is initialised
         */
        pageInit: function pageInit(event) {

            //function is used to initialise the page if the app is fully ready for execution
            var loadPageOnAppReady = function () {
                var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
                    var dbQueryResult;
                    return regeneratorRuntime.wrap(function _callee20$(_context21) {
                        while (1) {
                            switch (_context21.prev = _context21.next) {
                                case 0:
                                    if (!(!ons.isReady() || utopiasoftware[utopiasoftware_app_namespace].model.isAppReady === false)) {
                                        _context21.next = 3;
                                        break;
                                    }

                                    setTimeout(loadPageOnAppReady, 500); // call this function again after half a second
                                    return _context21.abrupt("return");

                                case 3:

                                    // listen for the back button event
                                    $('#app-main-navigator').get(0).topPage.onDeviceBackButton = utopiasoftware[utopiasoftware_app_namespace].controller.viewReportsPageViewModel.backButtonClicked;

                                    // show the page preloader
                                    $('#view-reports-page .page-preloader').css("display", "block");
                                    // hide the items that are not to be displayed
                                    $('#view-reports-page .no-report-found, ' + '#view-reports-page .view-reports-load-error, #view-reports-page #view-reports-list').css("display", "none");

                                    // pick the reports that have been saved by user to-date

                                    _context21.prev = 6;
                                    _context21.next = 9;
                                    return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.query("saved_reports_view/get_report_evaluated_by", _defineProperty({
                                        include_docs: true,
                                        limit: 2,
                                        skip: 0,
                                        descending: true,
                                        startkey: ["saved report", utopiasoftware[utopiasoftware_app_namespace].model.userDetails.userDetails.username, Date.now()]
                                    }, "startkey", ["saved report", utopiasoftware[utopiasoftware_app_namespace].model.userDetails.userDetails.username, new Date(2018, 0, 1)]));

                                case 9:
                                    dbQueryResult = _context21.sent;


                                    console.log("VIEW REPORTS", dbQueryResult);

                                    // check if any milestones were returned
                                    /*if(dbQueryResult.docs.length == 0) { // no milestones were found for the project
                                        throw "error"; // throw an error
                                    }
                                      // if the code gets to this point, milestones were returned
                                    // sort the returned milestones array
                                    dbQueryResult.docs.sort(function(firstElem, secondElement){
                                        return (window.parseInt(firstElem.BOQID) - window.parseInt(secondElement.BOQID));
                                    });
                                      utopiasoftware[utopiasoftware_app_namespace].controller.
                                        projectEvaluationPageViewModel.projectMilestones = dbQueryResult.docs; // update the current project milestones
                                      // create the evaluation carousel item based on the milestones retrieved
                                    let carouselContent = "";
                                    for(let index = 0; index < dbQueryResult.docs.length; index++)
                                    {
                                        carouselContent = `
                                        <ons-carousel-item style="overflow-y: auto">
                                            <ons-card>
                                                <div style="font-size: 1.2em">
                                                    ${dbQueryResult.docs[index].CATEGORY}
                                                </div>
                                                <div class="project-evaluation-slider"></div>
                                                <div class="project-evaluation-milestone-amount" style="margin-top: 1em; font-size: 1em;">
                                                    <span style="display: inline-block; font-style: italic; margin-right: 1em;">Milestone Value </span> 
                                                    ${kendo.toString(kendo.parseFloat(dbQueryResult.docs[index].AMOUNT), "n2")}
                                                </div>
                                                <div class="project-evaluation-milestone-current-value" style="font-size: 1em;">
                                                    <span style="display: inline-block; font-style: italic; margin-right: 1em;">Value Completed </span> 
                                                    ${kendo.toString(kendo.parseFloat(0), "n2")}
                                                </div>
                                            </ons-card>
                                        </ons-carousel-item>`;
                                        $('#project-evaluation-page #project-evaluation-carousel').append(carouselContent);
                                    } // end of for loop
                                      // append the carousel content used for displaying evaluation pictures
                                    carouselContent = `
                                    <ons-carousel-item style="overflow-y: scroll">
                                        <div class="row project-evaluation-images-container" style="margin-top: 1.5em;">
                                            <div class="col-xs-6" style="padding: 0.5em; position: relative">
                                                <div style="position: absolute; top: 5px;">
                                                    <ons-speed-dial id="project-evaluation-picture-speed-dial-1" direction="down">
                                                        <ons-fab modifier="utopiasoftware-pic-capture-speed-dial"
                                                                 class="utopiasoftware-pic-capture-speed-dial" 
                                                                 onclick="utopiasoftware[utopiasoftware_app_namespace].controller.
                                                                 projectEvaluationPageViewModel.pictureSpeedDialClicked(1)">
                                                            <ons-icon icon="md-image-o"></ons-icon>
                                                        </ons-fab>
                                                        <ons-speed-dial-item modifier="utopiasoftware-pic-capture-speed-dial-item"
                                                                             class="utopiasoftware-pic-capture-speed-dial" 
                                                                             onclick="utopiasoftware[utopiasoftware_app_namespace].controller.
                                                                 projectEvaluationPageViewModel.pictureCaptureButtonClicked(1)">
                                                            <ons-icon icon="md-camera"></ons-icon>
                                                        </ons-speed-dial-item>
                                                        <ons-speed-dial-item modifier="utopiasoftware-pic-capture-speed-dial-item"
                                                                             class="utopiasoftware-pic-capture-speed-dial" 
                                                                             onclick="utopiasoftware[utopiasoftware_app_namespace].controller.
                                                                 projectEvaluationPageViewModel.deletePictureButtonClicked(1)">
                                                            <ons-icon icon="md-delete"></ons-icon>
                                                        </ons-speed-dial-item>
                                                    </ons-speed-dial>
                                                </div>
                                                <img id="project-evaluation-picture-1" src="css/app-images/project-evaluation-photo-placeholder.png" style="width: 100%; border: 2px darkgray groove" alt="Picture 1">
                                            </div>
                                            <div class="col-xs-6" style="padding: 0.5em; position: relative">
                                                <div style="position: absolute; top: 5px;">
                                                    <ons-speed-dial id="project-evaluation-picture-speed-dial-2" direction="down">
                                                        <ons-fab modifier="utopiasoftware-pic-capture-speed-dial"
                                                                 class="utopiasoftware-pic-capture-speed-dial" 
                                                                 onclick="utopiasoftware[utopiasoftware_app_namespace].controller.
                                                                 projectEvaluationPageViewModel.pictureSpeedDialClicked(2)">
                                                            <ons-icon icon="md-image-o"></ons-icon>
                                                        </ons-fab>
                                                        <ons-speed-dial-item modifier="utopiasoftware-pic-capture-speed-dial-item"
                                                                             class="utopiasoftware-pic-capture-speed-dial" 
                                                                             onclick="utopiasoftware[utopiasoftware_app_namespace].controller.
                                                                 projectEvaluationPageViewModel.pictureCaptureButtonClicked(2)">
                                                            <ons-icon icon="md-camera"></ons-icon>
                                                        </ons-speed-dial-item>
                                                        <ons-speed-dial-item modifier="utopiasoftware-pic-capture-speed-dial-item"
                                                                             class="utopiasoftware-pic-capture-speed-dial" 
                                                                             onclick="utopiasoftware[utopiasoftware_app_namespace].controller.
                                                                 projectEvaluationPageViewModel.deletePictureButtonClicked(2)">
                                                            <ons-icon icon="md-delete"></ons-icon>
                                                        </ons-speed-dial-item>
                                                    </ons-speed-dial>
                                                </div>
                                                <img id="project-evaluation-picture-2" src="css/app-images/project-evaluation-photo-placeholder.png" style="width: 100%; border: 2px darkgray groove" alt="Picture 2">
                                            </div>
                                            <div class="col-xs-offset-3 col-xs-6" style="padding: 0.5em; position: relative">
                                                <div style="position: absolute; top: 5px;">
                                                    <ons-speed-dial id="project-evaluation-picture-speed-dial-3" direction="down">
                                                        <ons-fab modifier="utopiasoftware-pic-capture-speed-dial"
                                                                 class="utopiasoftware-pic-capture-speed-dial" 
                                                                 onclick="utopiasoftware[utopiasoftware_app_namespace].controller.
                                                                 projectEvaluationPageViewModel.pictureSpeedDialClicked(3)">
                                                            <ons-icon icon="md-image-o"></ons-icon>
                                                        </ons-fab>
                                                        <ons-speed-dial-item modifier="utopiasoftware-pic-capture-speed-dial-item"
                                                                             class="utopiasoftware-pic-capture-speed-dial" 
                                                                             onclick="utopiasoftware[utopiasoftware_app_namespace].controller.
                                                                 projectEvaluationPageViewModel.pictureCaptureButtonClicked(3)">
                                                            <ons-icon icon="md-camera"></ons-icon>
                                                        </ons-speed-dial-item>
                                                        <ons-speed-dial-item modifier="utopiasoftware-pic-capture-speed-dial-item"
                                                                             class="utopiasoftware-pic-capture-speed-dial" 
                                                                             onclick="utopiasoftware[utopiasoftware_app_namespace].controller.
                                                                 projectEvaluationPageViewModel.deletePictureButtonClicked(3)">
                                                            <ons-icon icon="md-delete"></ons-icon>
                                                        </ons-speed-dial-item>
                                                    </ons-speed-dial>
                                                </div>
                                                <img id="project-evaluation-picture-3" src="css/app-images/project-evaluation-photo-placeholder.png" style="width: 100%; border: 2px darkgray groove" alt="Picture 3">
                                            </div>
                                        </div>
                                    </ons-carousel-item>`;
                                    // append the generated carousel content to the project evaluation carousel
                                    $('#project-evaluation-page #project-evaluation-carousel').append(carouselContent);
                                      // append the carousel content used for displaying project location on a map
                                    carouselContent = `
                                    <ons-carousel-item style="position: relative;">
                                        <div id="project-evaluation-map" style="position: absolute; top: 0; left: 0; width: 100%; 
                                            height: 100%; bottom: 0; border: 1px #00d5c3 solid; text-align: center;">
                                            <ons-button style="background-color: #3f51b5; position: relative; top: 3px;
                                            display: inline-block;"
                                            onclick="utopiasoftware[utopiasoftware_app_namespace].
                                            controller.projectEvaluationPageViewModel.getProjectGeoLocationButtonClicked()">Get Project Location</ons-button>
                                            <div id="project-evaluation-gps-progress" 
                                            style="position: relative; display: none; top: 65px; text-align: center">
                                                <ons-progress-circular indeterminate modifier="project-gps-location-progress"></ons-progress-circular>
                                            </div>
                                            <div id="project-evaluation-gps-location-tag" style="color: #ffffff; 
                                            font-weight: bold; font-size: 0.8em; text-transform: uppercase; 
                                            background-color: rgba(0,213,195,0.80); padding: 0.6em; border-radius: 10px; 
                                            width: 80%; position: absolute; bottom: 2px; display: inline-block; 
                                            left: 10%; 
                                            overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Location:</div>
                                        </div>
                                    </ons-carousel-item>`;
                                    // append the generated carousel content to the project evaluation carousel
                                    $('#project-evaluation-page #project-evaluation-carousel').append(carouselContent);
                                      // append the carousel content used for displaying project remarks textarea
                                    carouselContent = `
                                    <ons-carousel-item style="overflow-y: auto">
                                        <textarea id="project-evaluation-remarks" spellcheck="true" 
                                        style="width: 80%; height: 4em; margin-left: 10%;
                                        margin-right: 10%; border: none; border-bottom: 2px #00D5C3 solid; 
                                        border-left: 2px #00D5C3 solid; border-right: 2px #00D5C3 solid; 
                                        background-color: transparent;"></textarea>
                                    </ons-carousel-item>`;
                                    // append the generated carousel content to the project evaluation carousel
                                    $('#project-evaluation-page #project-evaluation-carousel').append(carouselContent);
                                      // create the project evaluation slider elements
                                    $('#project-evaluation-page .project-evaluation-slider').
                                    each(function(index, element){
                                        element._ptracker_index = index; //  store the index position of the element within the collection on the element itself
                                        // create each milestone evaluation slider
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
                                                // update the project evaluation started flag to indicate evaluation has started
                                                utopiasoftware[utopiasoftware_app_namespace].controller.
                                                    projectEvaluationPageViewModel.hasProjectEvaluationStarted = true;
                                            },
                                            changed: function(changedEvent){
                                                // update the milestone current value based on changes in the slider
                                                $('.project-evaluation-milestone-current-value', $(element).closest('ons-card'))
                                                    .html(`<span style="display: inline-block; font-style: italic; margin-right: 1em;">Value Completed </span> 
                                                    ${kendo.toString(kendo.parseFloat((changedEvent.value / 100) * kendo.parseFloat(dbQueryResult.docs[element._ptracker_index].AMOUNT)), "n2")}`);
                                            }
                                        });
                                        aSlider.appendTo(element);
                                        element._ptracker_slider = aSlider;
                                    });
                                      // create the Viewer widget used to view the project evaluation photos
                                    utopiasoftware[utopiasoftware_app_namespace].controller.
                                        projectEvaluationPageViewModel.pictureViewer =
                                        new Viewer($('#project-evaluation-page .project-evaluation-images-container').get(0),
                                            {inline: false,
                                                toolbar: {
                                                    prev: {
                                                        show: true,
                                                        size: 'large',
                                                    },
                                                    next: {
                                                        show: true,
                                                        size: 'large',
                                                    },
                                                    zoomIn: {
                                                        show: true,
                                                        size: 'large',
                                                    },
                                                    zoomOut: {
                                                        show: true,
                                                        size: 'large',
                                                    },
                                                    oneToOne: {
                                                        show: true,
                                                        size: 'large',
                                                    },
                                                    reset: {
                                                        show: true,
                                                        size: 'large',
                                                    },
                                                    play: {
                                                        show: false,
                                                        size: 'large',
                                                    },
                                                    rotateLeft: {
                                                        show: false,
                                                        size: 'large',
                                                    },
                                                    rotateRight: {
                                                        show: false,
                                                        size: 'large',
                                                    },
                                                    flipHorizontal: {
                                                        show: false,
                                                        size: 'large',
                                                    },
                                                    flipVertical: {
                                                        show: false,
                                                        size: 'large',
                                                    }
                                                },
                                                backdrop: 'static',
                                                shown: function(){ // event is triggered when Picture Viewer is shown
                                                    // indicate that the picture viewer widget is showing
                                                    utopiasoftware[utopiasoftware_app_namespace].controller.
                                                        projectEvaluationPageViewModel.isPictureViewerShowing = true;
                                                },
                                                hidden: function(){ // event is triggered when Picture Viewer is hidden
                                                    // indicate that the picture viewer widget is hidden
                                                    utopiasoftware[utopiasoftware_app_namespace].controller.
                                                        projectEvaluationPageViewModel.isPictureViewerShowing = false;
                                                }});
                                      // hide the page preloader
                                    $('#project-evaluation-page .page-preloader').css("display", "none");
                                    // show the items that are to be displayed
                                    $('#project-evaluation-page .project-evaluation-instructions, #project-evaluation-page .content').
                                    css("display", "block");
                                    $('#project-evaluation-page #project-evaluation-next-button').
                                    css("display", "inline-block");*/
                                    _context21.next = 16;
                                    break;

                                case 13:
                                    _context21.prev = 13;
                                    _context21.t0 = _context21["catch"](6);

                                    console.log("REPORT VOEW ERROR", _context21.t0);

                                    /* // hide the page preloader
                                     $('#project-evaluation-page .page-preloader').css("display", "none");
                                     // hide the items that are not to be displayed
                                     $('#project-evaluation-page .project-evaluation-instructions, #project-evaluation-page .content').
                                     css("display", "none");
                                     $('#project-evaluation-page #project-evaluation-prev-button, #project-evaluation-page #project-evaluation-next-button').
                                     css("display", "none");
                                     // display the message to inform user that there are no milestones available for the project
                                     $('#project-evaluation-page .no-milestone-found').css("display", "block");*/

                                case 16:
                                    _context21.prev = 16;

                                    // hide the loader
                                    $('#loader-modal').get(0).hide();
                                    return _context21.finish(16);

                                case 19:
                                case "end":
                                    return _context21.stop();
                            }
                        }
                    }, _callee20, this, [[6, 13, 16, 19]]);
                }));

                return function loadPageOnAppReady() {
                    return _ref20.apply(this, arguments);
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
        backButtonClicked: function () {
            var _ref21 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
                return regeneratorRuntime.wrap(function _callee21$(_context22) {
                    while (1) {
                        switch (_context22.prev = _context22.next) {
                            case 0:
                                if (!$('ons-splitter').get(0).right.isOpen) {
                                    _context22.next = 3;
                                    break;
                                }

                                // side menu open, so close it
                                $('ons-splitter').get(0).right.close();
                                return _context22.abrupt("return");

                            case 3:

                                // move to the project evaluation page
                                $('#app-main-navigator').get(0).popPage();

                            case 4:
                            case "end":
                                return _context22.stop();
                        }
                    }
                }, _callee21, this);
            }));

            function backButtonClicked() {
                return _ref21.apply(this, arguments);
            }

            return backButtonClicked;
        }()
    }
};

//# sourceMappingURL=controller-compiled.js.map