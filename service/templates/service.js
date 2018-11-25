define(
  [
    'angular',
    'components/components-module'
  ],
  function (angular) {

    angular.module('gateways.components')

    /**
     * <%= nameTitle %>
     * @description Description of Service
     * @class <%= nameClass %>
     */
    .service('<%= nameCamel %>', function () {

      // service object
      var returnObject = {};

      // EXAMPLE: private variable with getter and setter
      /**
       * A private boolean value with a default value
       * @memberof <%= nameClass %>
       * @private
       * @type {boolean}
       */
      var booleanValue = false;

      // getter/setter for the private boolean variable
      Object.defineProperty(returnObject, 'booleanValue', {
        get: function() {
          return booleanValue;
        },
        set: function(value) {
          if (typeof value === 'boolean') {
            booleanValue = value;
            return;
          }
          throw(new TypeError('Value must be a boolean'));
        }
      });

      return returnObject;

    });

  }
);
