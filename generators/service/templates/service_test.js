define(
  [
    'angular',
    'components/components-module',
    'components/services/<%= nameDash %>'
  ],
  function () {

    describe('<%= nameTitle %>', function () {

      beforeEach(function () {

          inject(function (_<%= nameClass %>_) {
            <%= nameClass %> = _<%= nameClass %>_;
          })

        }
      );

      it('should return an object', function () {
        expect(<%= nameClass %>).toEqual(jasmine.any(Object));
      });

      describe('should exercise booleanValue', function () {

        it('should have a default', function () {
          expect(<%= nameClass %>.booleanValue).toEqual(false);
        });

        it('should set true', function () {
          <%= nameClass %>.booleanValue = true;
          expect(<%= nameClass %>.booleanValue).toEqual(true);
        });

        it('should set false', function () {
          <%= nameClass %>.booleanValue = false;
          expect(<%= nameClass %>.booleanValue).toEqual(false);
        });

        it('should throw error when set to a string', function () {
          expect(function () {
            <%= nameClass %>.booleanValue = 'string';
          })
          .toThrow(new TypeError('Value must be a boolean'));
        });

      });

    });
  }
);