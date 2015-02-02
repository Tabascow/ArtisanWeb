'use strict';

angular.module('artisanWebApp')
  .controller('CategoryController', function ($scope, Category) {
    $scope.categories = Category.query();
    $scope.$scope = $scope;

    var viewTemplate = '<div class="ui-grid-cell-contents ng-binding ng-scope text-center"><a ui-sref="view category({id:row.entity._id})">{{row.entity.name}}</a></div>';
    var editTemplate= '<div class="ui-grid-cell-contents ng-binding ng-scope text-center"><button id="editBtn" type="button" class="btn btn-default btn-xs" ui-sref="edit category({id:row.entity._id})" >Modifier</button> </div>'
    var deleteTemplate='<div class="ui-grid-cell-contents ng-binding ng-scope text-center"><button id="deleteBtn" type="button" class="btn btn-default btn-xs" ng-click="getExternalScopes().deleteCategory($event,row.entity)">Supprimer</button></div>';
    $scope.gridOptions={
      columnDefs :[
        {field:"name",displayName:"Nom", cellTemplate:viewTemplate},
        {field:"info",displayName:"Info"},
        {field:"active",displayName:"Actif" },
        {name: 'edit', displayName: '', cellTemplate: editTemplate, width:'70'},
        {name: 'delete', displayName: '', cellTemplate: deleteTemplate, width:'70'}

      ],
      data:$scope.categories
    }

    $scope.deleteCategory = function($event,category){

      $event.stopPropagation();

      category.$delete(function(){
        $scope.categories.splice($scope.categories.indexOf(category), 1);
      })
    }

  })
  .controller('CategoryViewController', function ($scope, Category, $stateParams) {
    $scope.category = Category.get({id: $stateParams.id});

  })

  .controller('CategoryCreateController', function ($scope, Category,$state) {
    $scope.category = new Category();

    $scope.createCategory = function () {
      $scope.category.$save(function () {
        $state.go("all categories");
      })
    }

  })
  .controller('CategoryEditController', function ($scope, Category, $stateParams,$state) {
    $scope.category = Category.get({id: $stateParams.id});

    $scope.updateCategory = function () {
      $scope.category.$update(function () {
        $state.go("all categories");
      })
    }
  });

