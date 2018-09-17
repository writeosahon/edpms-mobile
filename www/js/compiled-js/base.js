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
    map: {
    }
});
/*** END OF SYSTEMJS CONFIG **/


// constant that defines the app namespace
const utopiasoftware_app_namespace = 'edpms';

/**
 * create the namespace and base methods and properties for the app
 * @type {{}}
 */
const utopiasoftware = {
    [utopiasoftware_app_namespace]: {

        /**
         * object is responsible for handling operations on the app's cached data
         */
        appCachedData: {

            /**
             * method is used to download the project data to be cached. This includes project data and milestones data
             * @param showProgressModal {Boolean}
             * @returns {Promise<void>}
             */
            async loadProjectData(showProgressModal = true){
                try{
                    // keep device awake during the downloading process
                    window.plugins.insomnia.keepAwake();

                    if(showProgressModal === true){ // check if download progress modal should be displayed to user
                        // show download progress
                        $('#determinate-progress-modal .modal-message').html('Downloading projects data for offline use...');
                        $('#determinate-progress-modal').get(0).show();
                        $('#determinate-progress-modal #determinate-progress').get(0).value = 30;
                    }

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

                    // store all the project data received
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

                    if(showProgressModal === true){
                        // hide the progress loader
                        await $('#determinate-progress-modal').get(0).hide();
                    }
                }
                finally {
                    if(showProgressModal === true){
                        // hide the progress loader
                        await $('#determinate-progress-modal').get(0).hide();
                    }
                    window.plugins.insomnia.allowSleepAgain(); // the device can go to sleep now
                }
            }
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
            async uploadProjectEvaluationReports(showProgressModal = true){

                var totalReportSheets = 0; // holds the total number of report sheets to be uploaded

                try{
                    // keep device awake during the downloading process
                    window.plugins.insomnia.keepAwake();

                    if(showProgressModal === true){ // check if download progress modal should be displayed to user
                        // show download progress
                        $('#determinate-progress-modal .modal-message').html('Prepping Evaluation Report for Upload...');
                        $('#determinate-progress-modal').get(0).show();
                        $('#determinate-progress-modal #determinate-progress').get(0).value = 1;
                    }

                    await utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.compact();
                    // get all the save project report sheets evaluated by the current signed in user from the app database
                    let reportSheets = await utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.find({
                        selector: {
                            "TYPE": {
                                "$eq": "saved report"
                            }
                        },
                        use_index: ["ptracker-index-designdoc", "DOC_TYPE_INDEX"]
                    });

                    console.log("LENGTH ", reportSheets.docs);
                    if(reportSheets.docs.length === 0){ // there are no report sheets to upload
                        if(showProgressModal === true){
                            // hide the progress loader
                            await $('#determinate-progress-modal').get(0).hide();
                        }
                        window.plugins.insomnia.allowSleepAgain(); // the device can go to sleep now
                        return 0;
                    }

                    reportSheets = reportSheets.docs; // reassign the report sheets array
                    totalReportSheets = reportSheets.length; // update the number of report sheets to be sent

                    // upload each of the report sheets one at a time
                    for(let index = 0; index < reportSheets.length; index = 0){

                        if(showProgressModal === true){ // check if download progress modal should be displayed to user
                            // show download progress
                            $('#determinate-progress-modal .modal-message').
                            html(`Uploading Evaluation Report ${totalReportSheets - (reportSheets.length - 1)} Of ${totalReportSheets}`);
                            $('#determinate-progress-modal #determinate-progress').get(0).value =
                                Math.round(((totalReportSheets - (reportSheets.length - 1)) / totalReportSheets) * 100);
                        }
                        // create the FormData object to be used in sending the report sheet
                        let formData = new FormData();
                        // attach the evaluation report data to the FormData
                        formData.set("reportData", JSON.stringify(reportSheets[index]));
                        // attach the blob for the evaluation pictures 1 - 3 to the FormData
                        formData.set("evaluation-pic-1", await utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.
                            getAttachment(reportSheets[index]._id, "picture1.jpg"));
                        formData.set("evaluation-pic-2", await utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.
                        getAttachment(reportSheets[index]._id, "picture2.jpg"));
                        formData.set("evaluation-pic-3", await utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.
                        getAttachment(reportSheets[index]._id, "picture3.jpg"));

                        // send the FormData to the server
                        let serverResponse = await Promise.resolve($.ajax(
                            {
                                url: utopiasoftware[utopiasoftware_app_namespace].model.appBaseUrl + "/mobile/reports-upload.php",
                                //url: "reports-upload.json",
                                type: "post",
                                contentType: false,
                                beforeSend: function(jqxhr) {
                                    jqxhr.setRequestHeader("X-PTRACKER-APP", "mobile");
                                },
                                dataType: "text",
                                timeout: 240000, // wait for 4 minutes before timeout of request
                                processData: false,
                                data: formData
                            }
                        ));

                        serverResponse = JSON.parse(serverResponse.trim());

                        if(serverResponse.status !== "success"){ // the evaluation report could not be saved by the server
                            throw serverResponse; // throw error and END upload process
                        }

                        // since server upload of the evaluation report was successful, remove the evaluation report from app database
                        reportSheets[index]._deleted = true;
                        await utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.put(reportSheets[index])
                        /*await utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.
                        remove(reportSheets[index]._id, reportSheets[index]._rev);*/
                        // also remove the evaluation report from the reportSheets array
                        reportSheets.shift();
                    }

                    await utopiasoftware[utopiasoftware_app_namespace].model.appDatabase.compact();
                    return totalReportSheets; // return the total number of report sheet uploaded
                }
                finally {
                    if(showProgressModal === true){
                        // hide the progress loader
                        await $('#determinate-progress-modal').get(0).hide();
                    }
                    window.plugins.insomnia.allowSleepAgain(); // the device can go to sleep now
                }
            }
        }
    }
};
