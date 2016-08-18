'use strict';
var app = angular.module('mercury', [ 'ui.router','ngCookies','oc.lazyLoad','ngStorage','ui.bootstrap','ngAnimate']);

var SETTING = {
    BaseUrl:'http://192.168.1.199/',
    ApiUrl:'http://localhost:50597/api',
    ImgUrl:'http://img.iyookee.cn/',
    eventApiUrl:'http://localhost:16857/API'
};
//var SETTING = {
//    BaseUrl:'http://api.iyookee.cn/',
//    ApiUrl:'http://api.iyookee.cn/api',
//    ImgUrl:'http://img.yoopoon.com/'
//};

app.config(
    [        '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide) {

            // lazy controller, directive and service
            app.controller = $controllerProvider.register;
            app.directive  = $compileProvider.directive;
            app.filter     = $filterProvider.register;
            app.factory    = $provide.factory;
            app.service    = $provide.service;
            app.constant   = $provide.constant;
            app.value      = $provide.value;
        }
    ])
    .constant('MAIN_CONFIG',[
    {
        name:'mercury',
        module:false,
        files:['common/scripts/appCtrl.js']
    }])
    .config(['$ocLazyLoadProvider', 'MAIN_CONFIG', function($ocLazyLoadProvider, MAIN_CONFIG) {
        $ocLazyLoadProvider.config({
            debug: false,
            events: false,
            modules: MAIN_CONFIG
        });
    }]);


//
//
//app.controller("appController",['$state',function($state){
//
//}]);