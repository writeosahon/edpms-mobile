"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var utopiasoftware = _defineProperty({}, utopiasoftware_app_namespace, {});

//# sourceMappingURL=base-compiled.js.map