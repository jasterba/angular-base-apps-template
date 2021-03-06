// Angular Base Apps Configuration
import fs from 'fastclick';
import angular from 'angular';
import 'angular-base-apps';
import 'angular-ui-router';

// Icon Configuration
import 'angular-icons/dist/open-iconic';
import 'angular-icons/dist/ionicons';
import 'angular-icons/dist/material-icons';

// Route Configuration
import 'angular-dynamic-routing/dynamicRouting';
import 'angular-dynamic-routing/dynamicRouting.animations';
import routeconfig from './config/config-routes';

// Module Configuration
import './modules';

// Application Configuration
const AppConfig = ($urlProvider, $locationProvider, $BaseAppsStateProvider) => {
  $urlProvider.otherwise('/');

  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false
  });

  $BaseAppsStateProvider.registerDynamicRoutes(routeconfig);
};

AppConfig.$inject = ['$urlRouterProvider', '$locationProvider', '$BaseAppsStateProvider'];

const AppRun = () => {
  fs.FastClick.attach(document.body);
};

angular.module('application', [
  'ui.router',
  'ngAnimate',

  // base apps
  'base',

  // icons
  'angularIcons.openIconic',
  'angularIcons.ionicons',
  'angularIcons.materialIcons',

  // dynamic routing
  'dynamicRouting',
  'dynamicRouting.animations',

  // modules
  'application.home'
])
.config(AppConfig)
.run(AppRun);
