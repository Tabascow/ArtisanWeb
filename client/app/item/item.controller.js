'use strict';

angular.module('artisanWebApp')
  .controller('ItemController', function ($scope, Item) {
    $scope.items = Item.query();
    $scope.$scope = $scope;

    var viewTemplate = '<div class="ui-grid-cell-contents ng-binding ng-scope text-center"><a ui-sref="view item({id:row.entity._id})">{{row.entity.name}}</a></div>';
    var editTemplate= '<div class="ui-grid-cell-contents ng-binding ng-scope text-center"><button id="editBtn" type="button" class="btn btn-default btn-xs" ui-sref="edit item({id:row.entity._id})" >Modifier</button> </div>'
    var deleteTemplate='<div class="ui-grid-cell-contents ng-binding ng-scope text-center"><button id="deleteBtn" type="button" class="btn btn-default btn-xs" ng-click="getExternalScopes().deleteItem($event,row.entity)">Supprimer</button></div>';
    $scope.gridOptions={
      columnDefs :[
        {field:"name",displayName:"Nom", cellTemplate:viewTemplate},
        {field:"shortDescription",displayName:"Description courte"},
        {field:"createdAt",displayName:"Date de création", cellFilter: 'date:\'dd/MM/yyyy\'' },
        {field:"producedAt",displayName:"Date de réalisation", cellFilter: 'date:\'dd/MM/yyyy\'' },
        {name: 'edit', displayName: '', cellTemplate: editTemplate, width:'70'},
        {name: 'delete', displayName: '', cellTemplate: deleteTemplate, width:'70'}

      ],
      data:$scope.items
    }

    $scope.deleteItem = function($event,item){

      $event.stopPropagation();

      item.$delete(function(){
        $scope.items.splice($scope.items.indexOf(item), 1);
      })
    }

  })
  .controller('ItemViewController', function ($scope, Item, $stateParams) {
    $scope.item = Item.get({id: $stateParams.id});

  })

  .controller('ItemCreateController', function ($scope, Item,Category,$state) {
    $scope.categories = Category.query();
    $scope.item = new Item();
    $scope.item.categories = [];




    $scope.createItem = function () {
      $scope.item.$save(function () {
        $state.go("all items");
      })
    }

    $scope.open = function ($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };
  })
  .controller('ItemEditController', function ($scope, Item,Category, $stateParams,$state) {
    $scope.categories = Category.query();

    $scope.item = Item.get({id: $stateParams.id});



    $scope.updateItem = function () {
      $scope.item.$update(function () {
        $state.go("all items");
      })
    }
  });

