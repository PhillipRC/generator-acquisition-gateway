define(
  [
    'angular',
    'components/components-module'
  ],
  function (angular) {

    angular.module('gateways.components')

    /**
     * <%= nameTitle %>
     * @description Creates a new instance of <%= nameClass %>.
     * Leveraging the [Factory method pattern](https://en.wikipedia.org/wiki/Factory_method_pattern).
     * @example
     * // create new service from the factory
     * var service = new <%= nameClass %>();
     * // use the service
     * service.publicFunction('Hello');
     * @class <%= nameClass %>
     */
    .factory('<%= nameClass %>', function () {

      // returns a factory function
      return function () {

        /**
         * A private variable with a default value
         * @type {boolean}
         * @default
         * @private
         * @memberof <%= nameClass %>
         */
        var _privateVar = false;

        /**
         * A private function
         * @function publicFunction
         * @description Description of function
         * @param {string} value
         * @returns {string}
         * @private
         * @memberof <%= nameClass %>
         */
        function _privateFunction (value) {
          return value;
        }

        // service object
        var returnObject = {

          /**
           * A public variable with a default value
           * @default
           * @type {string}
           * @memberof <%= nameClass %>
           */
          publicVariable: 'some value',

          /**
           * A public function
           * @function publicFunction
           * @description Example function
           * @param {string} value - Description of input
           * @returns {string}
           * @memberof <%= nameClass %>
           */
          publicFunction: function (value) {
            return _privateFunction(value);
          }

        };

        /**
         * Accessing a private variable through get/set
         * @name privateVar
         * @type {boolean}
         * @default {false}
         * @memberof <%= nameClass %>
         */
        Object.defineProperty(returnObject, 'privateVar', {

          // returns a private variable
          get: function () {
            return _privateVar;
          },

          // sets a private variable
          set: function (value) {
            if (typeof value === 'boolean') {
              _privateVar = value;
              return;
            }
            throw(new TypeError('Value must be a boolean'));
          }

        });

        return returnObject;

      };

    });

  }
);
