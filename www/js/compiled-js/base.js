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
        "ej2-modules": "ej2-components-16.1.46" // path is for the base folder that contains all EJ2 COMPONENT MODULES
    },
    map: {
        "@syncfusion/ej2-base":  "ej2-modules/ej2-base.es2015-compiled.js",
        "@syncfusion/ej2-buttons": "ej2-modules/ej2-buttons.es2015-compiled.js",
        "@syncfusion/ej2-calendars": "ej2-modules/ej2-calendars.es2015-compiled.js",
        "@syncfusion/ej2-charts": "ej2-modules/ej2-charts.es2015-compiled.js",
        "@syncfusion/ej2-circulargauge": "ej2-modules/ej2-circulargauge.es2015-compiled.js",
        "@syncfusion/ej2-compression": "ej2-modules/ej2-compression.es2015-compiled.js",
        "@syncfusion/ej2-data": "ej2-modules/ej2-data.es2015-compiled.js",
        "@syncfusion/ej2-dropdowns": "ej2-modules/ej2-dropdowns.es2015-compiled.js",
        "@syncfusion/ej2-excel-export": "ej2-modules/ej2-excel-export.es2015-compiled.js",
        "@syncfusion/ej2-file-utils": "ej2-modules/ej2-file-utils.es2015-compiled.js",
        "@syncfusion/ej2-grids": "ej2-modules/ej2-grids.es2015-compiled.js",
        "@syncfusion/ej2-inputs": "ej2-modules/ej2-inputs.es2015-compiled.js",
        "@syncfusion/ej2-lineargauge": "ej2-modules/ej2-lineargauge.es2015-compiled.js",
        "@syncfusion/ej2-lists": "ej2-modules/ej2-lists.es2015-compiled.js",
        "@syncfusion/ej2-maps": "ej2-modules/ej2-maps.es2015-compiled.js",
        "@syncfusion/ej2-navigations": "ej2-modules/ej2-navigations.es2015-compiled.js",
        "@syncfusion/ej2-pdf-export": "ej2-modules/ej2-pdf-export.es2015-compiled.js",
        "@syncfusion/ej2-popups": "ej2-modules/ej2-popups.es2015-compiled.js",
        "@syncfusion/ej2-schedule": "ej2-modules/ej2-schedule.es2015-compiled.js",
        "@syncfusion/ej2-splitbuttons": "ej2-modules/ej2-splitbuttons.es2015-compiled.js"
    }
});
/*** END OF SYSTEMJS CONFIG **/


// constant that defines the app namespace
const utopiasoftware_app_namespace = 'matchgains';

/**
 * create the namespace and base methods and properties for the app
 * @type {{}}
 */
const utopiasoftware = {
    [utopiasoftware_app_namespace]: {}
};
