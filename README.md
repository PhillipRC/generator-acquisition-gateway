# generator-acquisition-gateway

## Getting Started

### Using global

##### `npm install -g yo` - To install the [Yeoman](http://yeoman.io)
##### `npm install -g generator-acquisition-gateway` - To install the generator
##### `cd CAP-ACQUISITION_GATEWAY/hallways` - To go to project root folder
##### `yo acquisition-gateway` - Sets the project root folder (creating the .yo-rc.json file)
##### `yo acquisition-gateway:service name` - Generates AngularJS service code 

## Generators
* [acquisition-gateway](#app)
* [acquisition-gateway:service](#service)
* [acquisition-gateway:factory](#factory)

### App
Sets the Project root

### Service
Generates an AngularJS Service and test files

### Factory
Generates an AngularJS Service and test files. This is useful when a
[Singleton](https://en.wikipedia.org/wiki/Singleton_pattern) is needed. 

Example:
```bash
yo acquisition-gateway:service my-singleton
```

Produces `hallways/ag-app/app/scripts/components/services/my-singleton-service.js`:
```javascript
.service('MySingletonService', function () {
  // ...
});
```

Produces `hallways/ag-app/app/scripts/components/services/tests/my-singleton-service_test.js`:
```javascript
describe('My Singleton Service', function () {
  // ...
});
```
### Factory
Generates an AngularJS Factory. This factory returns a
[Factory function](https://en.wikipedia.org/wiki/Factory_method_pattern) to instantiate a new instance of a service.
This is useful when many instances of the same service are needed.

Example:
```bash
yo acquisition-gateway:factory my-factory
```

Produces `hallways/ag-app/app/scripts/components/services/my-factory-service.js`:
```javascript
.service('MyFactoryService', function () {
  // ...
});
```

Produces `hallways/ag-app/app/scripts/components/services/tests/my-factory-service_test.js`:
```javascript
describe('My Factory Service', function () {
  // ...
});
```
