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

// listen for the initialisation of the ONBOARDING page
$(document).on("init", "#onboarding-page", utopiasoftware[utopiasoftware_app_namespace].controller.onboardingPageViewModel.pageInit);

// listen for when the ONBOARDING page is shown
$(document).on("show", "#onboarding-page", utopiasoftware[utopiasoftware_app_namespace].controller.onboardingPageViewModel.pageShow);

// listen for when the ONBOARDING page is hidden
$(document).on("hide", "#onboarding-page", utopiasoftware[utopiasoftware_app_namespace].controller.onboardingPageViewModel.pageHide);

// listen for when the ONBOARDING page is destroyed
$(document).on("destroy", "#onboarding-page", utopiasoftware[utopiasoftware_app_namespace].controller.onboardingPageViewModel.pageDestroy);

// used to listen for 'onboarding-carousel' carousel items/slides changes on the onboarding page
$(document).on("postchange", "#onboarding-carousel", utopiasoftware[utopiasoftware_app_namespace].controller.onboardingPageViewModel.carouselPostChange);

// listen for the initialisation of the LOGIN page
$(document).on("init", "#login-page", utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.pageInit);

// listen for when the LOGIN page is shown
$(document).on("show", "#login-page", utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.pageShow);

// listen for when the LOGIN page is hidden
$(document).on("hide", "#login-page", utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.pageHide);

// listen for when the LOGIN page is destroyed
$(document).on("destroy", "#login-page", utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.pageDestroy);

// used to listen for 'login-carousel' carousel items/slides changes on the login page
$(document).on("postchange", "#login-carousel", utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.carouselPostChange);

// listen for the initialisation of the FREE PREDICTIONS page
$(document).on("init", "#free-predictions-page", utopiasoftware[utopiasoftware_app_namespace].controller.freePredictionsPageViewModel.pageInit);

// listen for when the FREE PREDICTIONS page is shown
$(document).on("show", "#free-predictions-page", utopiasoftware[utopiasoftware_app_namespace].controller.freePredictionsPageViewModel.pageShow);

// listen for when the FREE PREDICTIONS page is hidden
$(document).on("hide", "#free-predictions-page", utopiasoftware[utopiasoftware_app_namespace].controller.freePredictionsPageViewModel.pageHide);

// listen for when the FREE PREDICTIONS page is destroyed
$(document).on("destroy", "#free-predictions-page", utopiasoftware[utopiasoftware_app_namespace].controller.freePredictionsPageViewModel.pageDestroy);