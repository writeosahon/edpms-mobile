"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Created by UTOPIA SOFTWARE on 26/7/2018.
 */

/**
 * file provides the "base" framework/utilities required to launch the app.
 * E.g. - File creates the base namespace which the app is built on.
 * - Loads all the ES moddule libraries required etc
 *
 * The author uses the terms 'method' and function interchangeably; likewise the terms 'attribute' and 'property' are
 * also used interchangeably
 **/

/**
 * prepare/config the dynamic loader for all the necessary ES Modules
 */
SystemJS.config({
    baseURL: 'js',
    paths: {
        "ej2-modules": "ej2-components-16.2.48" // path is for the base folder that contains all EJ2 COMPONENT MODULES
    },
    map: {}
});
/*** END OF SYSTEMJS CONFIG **/

// constant that defines the app namespace
var utopiasoftware_app_namespace = 'edpms';

/**
 * create the namespace and base methods and properties for the app
 * @type {{}}
 */
var utopiasoftware = _defineProperty({}, utopiasoftware_app_namespace, {

    /**
     * object is responsible for handling operations on the app's cached data
     */
    appCachedData: {

        /**
         * method is used to download the project data to be cached. This includes project data and milestones data
         * @param showProgressModal {Boolean}
         * @returns {Promise<void>}
         */
        loadProjectData: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var showProgressModal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                var serverResponse, allProjects;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;

                                // keep device awake during the downloading process
                                window.plugins.insomnia.keepAwake();

                                if (showProgressModal === true) {
                                    // check if download progress modal should be displayed to user
                                    // show download progress
                                    $('#determinate-progress-modal .modal-message').html('Downloading projects data for offline use...');
                                    $('#determinate-progress-modal').get(0).show();
                                    $('#determinate-progress-modal #determinate-progress').get(0).value = 30;
                                }

                                // get the projects data to be cached
                                _context.next = 5;
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

                            case 5:
                                serverResponse = _context.sent;


                                serverResponse = JSON.parse(serverResponse); // convert the response to JSON object

                                $('#determinate-progress-modal #determinate-progress').get(0).value = 35;

                                // delete all previous project data/docs
                                _context.next = 10;
                                return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.find({
                                    selector: {
                                        "TYPE": {
                                            "$eq": "projects"
                                        } },
                                    fields: ["_id", "_rev", "PROJECTID", "TITLE", "CONTRACTSUM", "CONTRACTOR", "MDAID", "TYPE"],
                                    use_index: ["ptracker-index-designdoc", "DOC_TYPE_INDEX"]
                                });

                            case 10:
                                allProjects = _context.sent;


                                // get all the returned projects and delete them
                                allProjects = allProjects.docs.map(function (currentValue, index, array) {
                                    currentValue._deleted = true; // mark the document as deleted
                                    return currentValue;
                                });

                                // check if there are any project data to delete

                                if (!(allProjects.length > 0)) {
                                    _context.next = 15;
                                    break;
                                }

                                _context.next = 15;
                                return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.bulkDocs(allProjects);

                            case 15:

                                $('#determinate-progress-modal #determinate-progress').get(0).value = 45;

                                // store all the project data received
                                _context.next = 18;
                                return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.bulkDocs(serverResponse);

                            case 18:
                                // inform the user that milestone data is being downloaded for offline use
                                $('#determinate-progress-modal .modal-message').html('Downloading milestones data for offline use...');

                                $('#determinate-progress-modal #determinate-progress').get(0).value = 50;

                                // get the milestones data to be cached
                                _context.next = 22;
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

                            case 22:
                                serverResponse = _context.sent;


                                serverResponse = JSON.parse(serverResponse); // convert the response to JSON object

                                $('#determinate-progress-modal #determinate-progress').get(0).value = 75;

                                // delete all previous milestones /docs
                                _context.next = 27;
                                return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.find({
                                    selector: {
                                        "TYPE": {
                                            "$eq": "BOQ"
                                        } },
                                    fields: ["_id", "_rev", "CATEGORY", "AMOUNT", "RATE", "PROJECTID", "DDATE", "BOQID", "TYPE"],
                                    use_index: ["ptracker-index-designdoc", "DOC_TYPE_INDEX"]
                                });

                            case 27:
                                allProjects = _context.sent;


                                // get all the returned milestones and delete them
                                allProjects = allProjects.docs.map(function (currentValue, index, array) {
                                    currentValue._deleted = true; // mark the document as deleted
                                    return currentValue;
                                });

                                // check if there are any milestone data to delete

                                if (!(allProjects.length > 0)) {
                                    _context.next = 32;
                                    break;
                                }

                                _context.next = 32;
                                return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.bulkDocs(allProjects);

                            case 32:

                                $('#determinate-progress-modal #determinate-progress').get(0).value = 100;

                                // store the all the milestone data received
                                _context.next = 35;
                                return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.bulkDocs(serverResponse);

                            case 35:
                                if (!(showProgressModal === true)) {
                                    _context.next = 38;
                                    break;
                                }

                                _context.next = 38;
                                return $('#determinate-progress-modal').get(0).hide();

                            case 38:
                                _context.prev = 38;

                                if (!(showProgressModal === true)) {
                                    _context.next = 42;
                                    break;
                                }

                                _context.next = 42;
                                return $('#determinate-progress-modal').get(0).hide();

                            case 42:
                                window.plugins.insomnia.allowSleepAgain(); // the device can go to sleep now
                                return _context.finish(38);

                            case 44:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0,, 38, 44]]);
            }));

            function loadProjectData() {
                return _ref.apply(this, arguments);
            }

            return loadProjectData;
        }()
    },

    /**
     * object is responsible for handling operations on the project evaluation report sheet data
     */
    projectEvaluationReportData: {

        /**
         * method is used to upload all project evaluation report data/sheets to the server.
         * during the process of upload, all successfully uploaded report data will be deleted
         * from the user's device.
         *
         * @param showProgressModal
         * @returns {Promise<Number>} resolves with a Promise containing
         * the number of report sheets that were successfully uploaded OR rejects with an error object
         */
        uploadProjectEvaluationReports: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var showProgressModal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                var totalReportSheets, reportSheets, index, formData, serverResponse;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                totalReportSheets = 0; // holds the total number of report sheets to be uploaded

                                _context2.prev = 1;

                                // keep device awake during the downloading process
                                window.plugins.insomnia.keepAwake();

                                if (showProgressModal === true) {
                                    // check if download progress modal should be displayed to user
                                    // show download progress
                                    $('#determinate-progress-modal .modal-message').html('Prepping Evaluation Report for Upload...');
                                    $('#determinate-progress-modal').get(0).show();
                                    $('#determinate-progress-modal #determinate-progress').get(0).value = 1;
                                }

                                // get all the save project report sheets evaluated by the current signed in user from the app database
                                _context2.next = 6;
                                return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.find({
                                    selector: {
                                        "TYPE": {
                                            "$eq": "saved report"
                                        },
                                        "evaluatedBy": {
                                            "$eq": utopiasoftware[utopiasoftware_app_namespace].model.userDetails.userDetails.username
                                        }
                                    },
                                    use_index: ["ptracker-index-designdoc", "DOC_TYPE_INDEX"]
                                });

                            case 6:
                                reportSheets = _context2.sent;

                                if (!(reportSheets.docs.length === 0)) {
                                    _context2.next = 13;
                                    break;
                                }

                                if (!(showProgressModal === true)) {
                                    _context2.next = 11;
                                    break;
                                }

                                _context2.next = 11;
                                return $('#determinate-progress-modal').get(0).hide();

                            case 11:
                                window.plugins.insomnia.allowSleepAgain(); // the device can go to sleep now
                                return _context2.abrupt("return", 0);

                            case 13:

                                reportSheets = reportSheets.docs; // reassign the report sheets array
                                totalReportSheets = reportSheets.length; // update the number of report sheets to be sent

                                // upload each of the report sheets one at a time
                                index = 0;

                            case 16:
                                if (!(index === reportSheets.length)) {
                                    _context2.next = 47;
                                    break;
                                }

                                if (showProgressModal === true) {
                                    // check if download progress modal should be displayed to user
                                    // show download progress
                                    $('#determinate-progress-modal .modal-message').html("Uploading Evaluation Report " + (totalReportSheets - (reportSheets.length - 1)) + " Of " + totalReportSheets);
                                    $('#determinate-progress-modal #determinate-progress').get(0).value = Math.round((totalReportSheets - (reportSheets.length - 1)) / totalReportSheets * 100);
                                }
                                // create the FormData object to be used in sending the report sheet
                                formData = new FormData();
                                // attach the evaluation report data to the FormData

                                formData.set("reportData", JSON.stringify(reportSheets[index]));
                                // attach the blob for the evaluation pictures 1 - 3 to the FormData
                                _context2.t0 = formData;
                                _context2.next = 23;
                                return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.getAttachment(reportSheets[index]._id, "picture1.jpg");

                            case 23:
                                _context2.t1 = _context2.sent;

                                _context2.t0.set.call(_context2.t0, "evaluation-pic-1", _context2.t1);

                                _context2.t2 = formData;
                                _context2.next = 28;
                                return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.getAttachment(reportSheets[index]._id, "picture2.jpg");

                            case 28:
                                _context2.t3 = _context2.sent;

                                _context2.t2.set.call(_context2.t2, "evaluation-pic-2", _context2.t3);

                                _context2.t4 = formData;
                                _context2.next = 33;
                                return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.getAttachment(reportSheets[index]._id, "picture3.jpg");

                            case 33:
                                _context2.t5 = _context2.sent;

                                _context2.t4.set.call(_context2.t4, "evaluation-pic-3", _context2.t5);

                                _context2.next = 37;
                                return Promise.resolve($.ajax({
                                    //url: utopiasoftware[utopiasoftware_app_namespace].model.appBaseUrl + "/mobile/login.php",
                                    url: "reports-upload.json",
                                    type: "post",
                                    contentType: false,
                                    beforeSend: function beforeSend(jqxhr) {
                                        jqxhr.setRequestHeader("X-PTRACKER-APP", "mobile");
                                    },
                                    dataType: "text",
                                    timeout: 240000, // wait for 4 minutes before timeout of request
                                    processData: false,
                                    data: formData
                                }));

                            case 37:
                                serverResponse = _context2.sent;


                                serverResponse = JSON.parse(serverResponse.trim());

                                if (!(serverResponse.status !== "success")) {
                                    _context2.next = 41;
                                    break;
                                }

                                throw serverResponse;

                            case 41:
                                _context2.next = 43;
                                return utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.remove(reportSheets[index]._id, reportSheets[index]._rev);

                            case 43:
                                // also remove the evaluation report from the reportSheets array
                                reportSheets.shift();

                            case 44:
                                index = 0;
                                _context2.next = 16;
                                break;

                            case 47:
                                return _context2.abrupt("return", totalReportSheets);

                            case 48:
                                _context2.prev = 48;

                                if (!(showProgressModal === true)) {
                                    _context2.next = 52;
                                    break;
                                }

                                _context2.next = 52;
                                return $('#determinate-progress-modal').get(0).hide();

                            case 52:
                                window.plugins.insomnia.allowSleepAgain(); // the device can go to sleep now
                                return _context2.finish(48);

                            case 54:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[1,, 48, 54]]);
            }));

            function uploadProjectEvaluationReports() {
                return _ref2.apply(this, arguments);
            }

            return uploadProjectEvaluationReports;
        }()
    }
});

//# sourceMappingURL=base-compiled.js.map