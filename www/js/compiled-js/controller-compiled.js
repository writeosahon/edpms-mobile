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

                            // load the login page
                            $('ons-splitter').get(0).content.load("login-template");

                            if (window.localStorage.getItem("utopiasoftware-edpms-app-status") && window.localStorage.getItem("utopiasoftware-edpms-app-status") !== "") {} // there is a previous logged in user
                            // load the user's login email


                            // START ALL CORDOVA PLUGINS CONFIGURATIONS
                            try {
                                // lock the orientation of the device to 'PORTRAIT'
                                screen.orientation.lock('portrait');
                            } catch (err) {}

                            try {
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
                            } catch (err) {
                                console.log("ERROR");
                            } finally {
                                // set status bar color
                                StatusBar.backgroundColorByHexString("#00B2A0");
                                navigator.splashscreen.hide(); // hide the splashscreen
                                utopiasoftware[utopiasoftware_app_namespace].model.isAppReady = true; // flag that app is fullyt loaded and ready
                            }

                        case 7:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
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
                                    utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.formValidator.on('form:success', function () {
                                        // load the login page
                                        $('ons-splitter').get(0).content.load("app-main-template");
                                    });

                                    // hide the loader
                                    $('#loader-modal').get(0).hide();

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
        },

        /**
         * method is triggered when page is destroyed
         */
        pageDestroy: function pageDestroy() {},

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
                var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                                case 0:
                                    if (!(!ons.isReady() || utopiasoftware[utopiasoftware_app_namespace].model.isAppReady === false)) {
                                        _context5.next = 3;
                                        break;
                                    }

                                    setTimeout(loadPageOnAppReady, 500); // call this function again after half a second
                                    return _context5.abrupt('return');

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
                                    utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.formValidator.on('form:success', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                            while (1) {
                                                switch (_context4.prev = _context4.next) {
                                                    case 0:
                                                        // hide the device keyboard
                                                        Keyboard.hide();
                                                        // perform actions to reveal result
                                                        kendo.fx($('#search-project-page #search-project-details')).fade("in").duration(550).play();
                                                        _context4.next = 4;
                                                        return Promise.resolve(kendo.fx($('#search-project-page ons-bottom-toolbar')).slideIn("up").duration(600).play());

                                                    case 4:
                                                        $('#search-project-page ons-bottom-toolbar').css("display", "block");

                                                    case 5:
                                                    case 'end':
                                                        return _context4.stop();
                                                }
                                            }
                                        }, _callee4, this);
                                    })));

                                    // hide the loader
                                    $('#loader-modal').get(0).hide();

                                case 9:
                                case 'end':
                                    return _context5.stop();
                            }
                        }
                    }, _callee5, this);
                }));

                return function loadPageOnAppReady() {
                    return _ref4.apply(this, arguments);
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
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(keyEvent) {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
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
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function searchButtonClicked(_x) {
                return _ref6.apply(this, arguments);
            }

            return searchButtonClicked;
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
                var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                        while (1) {
                            switch (_context7.prev = _context7.next) {
                                case 0:
                                    if (!(!ons.isReady() || utopiasoftware[utopiasoftware_app_namespace].model.isAppReady === false || !ej)) {
                                        _context7.next = 3;
                                        break;
                                    }

                                    setTimeout(loadPageOnAppReady, 500); // call this function again after half a second
                                    return _context7.abrupt('return');

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
                                    return _context7.stop();
                            }
                        }
                    }, _callee7, this);
                }));

                return function loadPageOnAppReady() {
                    return _ref7.apply(this, arguments);
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