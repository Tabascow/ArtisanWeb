'use strict';

angular.module('artisanWebApp')
  .config(function ($stateProvider) {
    $stateProvider.state('all websites',{url:'/websites/',templateUrl:'app/website/views/list.html',controller:'WebsiteController'});
    $stateProvider.state('create website',{url:'/websites/create',templateUrl:'app/website/views/add.html',controller:'WebsiteCreateController'});
    $stateProvider.state('edit website',{url:'/websites/:id/edit',templateUrl:'app/website/views/edit.html',controller:'WebsiteEditController'});
    $stateProvider.state('view website',{url:'/websites/:id',templateUrl:'app/website/views/index.html',controller:'WebsiteViewController'});
  });
