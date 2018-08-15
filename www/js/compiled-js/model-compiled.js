"use strict";

/**
 * Created by UTOPIA SOFTWARE on 26/7/2018.
 */

// define the model namespace
utopiasoftware[utopiasoftware_app_namespace].model = {

  /**
   * property acts as a flag that indicates that all hybrid plugins and DOM content
   * have been successfully loaded. It relies on the ons.ready() method
   *
   * @type {boolean} flag for if the hybrid plugins and DOM content are ready for execution
   */
  isAppReady: false

};

// call the method to startup the app
utopiasoftware[utopiasoftware_app_namespace].controller.startup();

// listen for the initialisation of the LOGIN page
$(document).on("init", "#login-page", utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.pageInit);

// listen for when the LOGIN page is shown
$(document).on("show", "#login-page", utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.pageShow);

// listen for when the LOGIN page is hidden
$(document).on("hide", "#login-page", utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.pageHide);

// listen for when the LOGIN page is destroyed
$(document).on("destroy", "#login-page", utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.pageDestroy);

// listen for the initialisation of the LOGIN page
$(document).on("init", "#search-project-page", utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.pageInit);

// listen for when the LOGIN page is shown
$(document).on("show", "#search-project-page", utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.pageShow);

// listen for when the LOGIN page is hidden
$(document).on("hide", "#search-project-page", utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.pageHide);

// listen for when the LOGIN page is destroyed
$(document).on("destroy", "#search-project-page", utopiasoftware[utopiasoftware_app_namespace].controller.searchProjectPageViewModel.pageDestroy);

//# sourceMappingURL=model-compiled.js.map