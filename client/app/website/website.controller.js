'use strict';

angular.module('artisanWebApp')
  .controller('WebsiteController', function ($scope, Website) {
    $scope.websites = Website.query();
    $scope.$scope = $scope;

    var viewTemplate = '<div class="ui-grid-cell-contents ng-binding ng-scope text-center"><a ui-sref="view website({id:row.entity._id})">{{row.entity.name}}</a></div>';
    var editTemplate= '<div class="ui-grid-cell-contents ng-binding ng-scope text-center"><button id="editBtn" type="button" class="btn btn-default btn-xs" ui-sref="edit website({id:row.entity._id})" >Edit</button> </div>'
    var deleteTemplate='<div class="ui-grid-cell-contents ng-binding ng-scope text-center"><button id="deleteBtn" type="button" class="btn btn-default btn-xs" ng-click="getExternalScopes().deleteWebsite($event,row.entity)">Delete</button></div>';
    $scope.gridOptions={
      columnDefs :[
        {field:"name",displayName:"Nom", cellTemplate:viewTemplate},
        {field:"description",displayName:"Description"},
        {field:"address",displayName:"Adresse"},
        {field:"contactEmail",displayName:"Email"},
        {field:"contactPhoneNumber",displayName:"Télephone"},
        {field:"createdAt",displayName:"Date de création", cellFilter: 'date:\'dd/MM/yyyy\'' },
        {name: 'edit', displayName: '', cellTemplate: editTemplate, width:'70'},
        {name: 'delete', displayName: '', cellTemplate: deleteTemplate, width:'70'}

      ],
      data:$scope.websites
    }

    $scope.deleteWebsite = function($event,website){

      $event.stopPropagation();

      website.$delete(function(){
        $scope.websites.splice($scope.websites.indexOf(website), 1);
      })
    }

  })
  .controller('WebsiteViewController', function ($scope, Website, $stateParams) {
    $scope.website = Website.get({id: $stateParams.id});

  })

  .controller('WebsiteCreateController', function ($scope, Website,$state) {
    $scope.website = new Website();

    $scope.createWebsite = function () {
      $scope.website.$save(function () {
        $state.go("all websites");
      })
    }
  })
  .controller('WebsiteEditController', function ($scope, Website, $stateParams,$state) {
    $scope.website = Website.get({id: $stateParams.id});

    $scope.updateWebsite = function () {
      $scope.website.$update(function () {
        $state.go("all websites");
      })
    }
  });

