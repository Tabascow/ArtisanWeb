'use strict';

angular.module('artisanWebApp')
  .config(function ($stateProvider) {
    $stateProvider.state('all items',{url:'/items/',templateUrl:'app/item/views/list.html',controller:'ItemController'});
    $stateProvider.state('create item',{url:'/items/create',templateUrl:'app/item/views/add.html',controller:'ItemCreateController'});
    $stateProvider.state('edit item',{url:'/items/:id/edit',templateUrl:'app/item/views/edit.html',controller:'ItemEditController'});
    $stateProvider.state('view item',{url:'/items/:id',templateUrl:'app/item/views/index.html',controller:'ItemViewController'});
  });
