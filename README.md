# generator-acquisition-gateway

## Getting Started

### Using global

##### `npm install -g yo` - To install the [Yoeman](http://yeoman.io)
##### `npm install -g generator-acquisition-gateway` - To install the generator
##### `cd CAP-ACQUISITION_GATEWAY/hallways` - To go to project root folder
##### `yo acquisition-gateway` - Sets the project root folder (creating the .yo-rc.json file)
##### `yo acquisition-gateway:service name` - Generates AngularJS service code 

## Generators
* [acquisition-gateway](#app)
* [acquisition-gateway:service](#service)

### App
Sets the Project root

### Service
Generates an AngularJS Service and test files

Example:
```bash
yo acquisition-gateway:service my-singleton
```

Produces `hallways/ag-app/app/scripts/components/services/my-singleton-service.js`:
```javascript
.service('mySingletonService', function () {
  // ...
});
```

Produces `hallways/ag-app/app/scripts/components/services/tests/my-singleton-service_test.js`:
```javascript
describe('My Singleton Service', function () {
  // ...
});
```
