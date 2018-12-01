var s = require("underscore.string");

// defines information collected on a directive

var method = AcquisitionGatewayNameGen.prototype;

function AcquisitionGatewayNameGen(type, name) {

  var config = {

    'service': {
      'name_suffix': '-service',
      'path_file': 'ag-app/app/scripts/components/services',
      'path_file_suffix': '.js',
      'path_file_test': 'ag-app/app/scripts/components/services/test',
      'path_file_test_suffix': '_test.js'
    }

  };

  // factory is a duplicate of service
  config.factory = config.service;

  if (config[type]) {

    // create names based on input and config
    this.type = type;
    this.name = name;
    this.nameDash = s.dasherize(name) + config[type].name_suffix;

    this.nameClass = s.classify(this.nameDash);
    this.nameCamel = s.camelize(this.nameDash);
    this.nameTitle = s(this.nameDash).humanize().titleize().value();
    this.path_file = config[type].path_file + '/' + this.nameDash + config[type].path_file_suffix;
    this.path_file_test = config[type].path_file_test + this.nameDash + config[type].path_file_test_suffix;

  }

}

module.exports = AcquisitionGatewayNameGen;