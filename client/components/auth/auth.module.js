'use strict';

angular.module('carsharingApp.auth', [
  'carsharingApp.constants',
  'carsharingApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
