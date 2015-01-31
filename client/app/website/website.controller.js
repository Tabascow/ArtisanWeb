'use strict';

angular.module('artisanWebApp')
  .controller('WebsiteController', function ($scope, Website) {
    $scope.websites = Website.query();
    $scope.$scope = $scope;

    var editTemplate= '<button id="editBtn" type="button" class="btn-small" ui-sref="edit website({id:row.entity._id})" >Edit</button> '
    var deleteTemplate='<button id="deleteBtn" type="button" clas="btn-small" ng-click="getExternalScopes().deleteWebsite($event,row.entity)">Delete</button>';
    $scope.gridOptions={
      columnDefs :[
        {field:"name",displayName:"Nom"},
        {field:"description",displayName:"Description"},
        {field:"address",displayName:"Adresse"},
        {field:"contactEmail",displayName:"Email"},
        {field:"contactPhoneNumber",displayName:"Télephone"},
        {field:"createdAt",displayName:"Date de création",cellFilter: 'date:\'dd/MM/yyyy\'' },
        {name: 'edit', displayName: '', cellTemplate: editTemplate},
        {name: 'delete', displayName: '', cellTemplate: deleteTemplate}

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

