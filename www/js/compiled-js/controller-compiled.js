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

                                // note: for most promises, we weill use async-wait syntax
                                // var a = await Promise.all([SystemJS.import('@syncfusion/ej2-base'), SystemJS.import('@syncfusion/ej2-dropdowns')]);
                            } catch (err) {} finally {
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
                                        ons.notification.confirm('Do you want to close the app?', { title: 'Exit',
                                            buttonLabels: ['No', 'Yes'], modifier: 'utopiasoftware-alert-dialog' }) // Ask for confirmation
                                        .then(function (index) {
                                            if (index === 1) {
                                                // OK button
                                                navigator.app.exitApp(); // Close the app
                                            }
                                        });
                                    };

                                    // hide the loader
                                    //$('#loader-modal').get(0).hide();

                                case 4:
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
         * method is triggered when the Sign In / Sign Up segment buttons are clicked
         *
         * @param itemIndex {Integer} zero-based index representing the carousel item to
         * display ewhen the button is clicked
         */
        segmentButtonClicked: function segmentButtonClicked(itemIndex) {
            // move to the slide item specify by the provided parameter
            $('#login-page #login-carousel').get(0).setActiveIndex(itemIndex);
        },


        /**
         * method is used to track changes on the carousel slides
         * @param event
         */
        carouselPostChange: function carouselPostChange(event) {

            // use the switch case to determine what carousel is being shown
            switch (event.originalEvent.activeIndex) {// get the index of the active carousel item
                case 0:

                    // reset the the segment button contained in the other carousel items to their initial state
                    $("#login-page ons-carousel-item.second .login-segment button:nth-of-type(2) input").prop("checked", true);
                    $("#login-page ons-carousel-item.second .login-segment button:nth-of-type(1) input").prop("checked", false);
                    $("#login-page ons-carousel-item.third .login-segment button input").prop("checked", false);
                    break;

                case 1:
                    // reset the the segment button contained in the other carousel items to their initial state
                    $("#login-page ons-carousel-item.first .login-segment button:nth-of-type(1) input").prop("checked", true);
                    $("#login-page ons-carousel-item.first .login-segment button:nth-of-type(2) input").prop("checked", false);
                    $("#login-page ons-carousel-item.third .login-segment button input").prop("checked", false);
                    break;

                case 2:
                    // reset the the segment button contained in the other carousel items to their initial state
                    $("#login-page ons-carousel-item.first .login-segment button:nth-of-type(1) input").prop("checked", true);
                    $("#login-page ons-carousel-item.first .login-segment button:nth-of-type(2) input").prop("checked", false);
                    $("#login-page ons-carousel-item.second .login-segment button:nth-of-type(2) input").prop("checked", true);
                    $("#login-page ons-carousel-item.second .login-segment button:nth-of-type(1) input").prop("checked", false);
                    break;
            }
        },


        /**
         * method is triggered when the Terms & Conditions button link is clicked
         */
        termsAndConditionsButtonClicked: function termsAndConditionsButtonClicked() {

            // open the terms and conditions page in the app custom browser
            cordova.InAppBrowser.open(window.encodeURI('https://www.matchgains.com/en/terms-of-service.php'), '_blank', 'location=yes,closebuttoncolor=#ffffff,zoom=no,navigationbuttoncolor=#ffffff,toolbarcolor=#00b2a0');
        }
    }
};

//# sourceMappingURL=controller-compiled.js.map