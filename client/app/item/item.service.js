'use strict';

angular.module('artisanWebApp')
  .factory('Item', function ($resource) {
    return $resource('api/items/:id', {
      id: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  });
