define(
  [
    'angular',
    'components/components-module',
    'components/services/<%= nameDash %>'
  ],
  function () {

    describe('<%= nameTitle %>', function () {

      beforeEach(function () {

          inject(function (_<%= nameCamel %>_) {
            <%= nameCamel %> = _<%= nameCamel %>_;
          })

        }
      );

      it('should return an object', function () {
        expect(<%= nameCamel %>).toEqual(jasmine.any(Object));
      });

      describe('should exercise booleanValue', function () {

        it('should have a default', function () {
          expect(<%= nameCamel %>.booleanValue).toEqual(false);
        });

        it('should set true', function () {
          <%= nameCamel %>.booleanValue = true;
          expect(<%= nameCamel %>.booleanValue).toEqual(true);
        });

        it('should set false', function () {
          <%= nameCamel %>.booleanValue = false;
          expect(<%= nameCamel %>.booleanValue).toEqual(false);
        });

        it('should throw error when set to a string', function () {
          expect(function () {
            <%= nameCamel %>.booleanValue = 'string';
          })
          .toThrow(new TypeError('Value must be a boolean'));
        });

      });

    });
  }
);