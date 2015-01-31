'use strict';

angular.module('artisanWebApp')
  .factory('Website', function ($resource) {
    return $resource('api/websites/:id', {
      id: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  });
