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

      it('should return a function', function () {
        expect(<%= nameClass %>).toEqual(jasmine.any(Function));
      });

      it('should create a service Object', function () {
        var serviceReference = new <%= nameClass %>();
        expect(serviceReference).toEqual(jasmine.any(Object));
      });

      describe('should exercise publicVariable', function () {

        var serviceReference;

        it('should have default value', function () {
          serviceReference = new <%= nameClass %>();
          expect(serviceReference.publicVariable).toEqual('some value');
        });

        it('should set a new value', function () {
          serviceReference.publicVariable = 'new value';
          expect(serviceReference.publicVariable).toEqual('new value');
        });

      });

      describe('should exercise publicFunction()', function () {

        var serviceReference;

        it('should be a function', function () {
          serviceReference = new <%= nameClass %>();
          expect(serviceReference.publicFunction).toEqual(jasmine.any(Function));
        });

        it('should return expected value', function () {
          expect(serviceReference.publicFunction('Hello')).toEqual('Hello');
        });

      });

      describe('should exercise privateVar', function () {

        var serviceReference;

        it('should have default value', function () {
          serviceReference = new <%= nameClass %>();
          expect(serviceReference.privateVar).toEqual(false);
        });

        it('should set a new value', function () {
          serviceReference.privateVar = true;
          expect(serviceReference.privateVar).toEqual(true);
        });

      });

    });
  }
);
