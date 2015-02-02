'use strict';

angular.module('artisanWebApp')
  .config(function ($stateProvider) {
    $stateProvider.state('all categories',{url:'/categories/',templateUrl:'app/category/views/list.html',controller:'CategoryController'});
    $stateProvider.state('create category',{url:'/categories/create',templateUrl:'app/category/views/add.html',controller:'CategoryCreateController'});
    $stateProvider.state('edit category',{url:'/categories/:id/edit',templateUrl:'app/category/views/edit.html',controller:'CategoryEditController'});
  });
