'use strict';

angular.module('jabbrApp')
  .factory('Recording', function ($resource) {
    return $resource('/api/recordings/:id/:controller', {
      id: '@_id'
    },
    {
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      getUserRecordings: {
        method: 'GET',
        params: {
          id:'userRecordings'
        }
      },
      getOneRecording: {
        method: 'GET',
        params: {
          id:'oneRecording'
          // controller:'oneRecording'
        }
      }
    });
  });
