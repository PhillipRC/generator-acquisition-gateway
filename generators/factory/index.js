'use strict';
var Generator = require('yeoman-generator');
var AcquisitionGatewayNameGen = require('../AcquisitionGatewayNameGen.js');

module.exports = class extends Generator {

  // The name `constructor` is important here
  constructor(args, opts) {

    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // name is required
    this.argument('name', {type: String, required: true});

    // get the names
    this.names = new AcquisitionGatewayNameGen('service', this.options.name);

  }

  // add code template
  addTemplate() {

    this.fs.copyTpl(
      this.templatePath('factory.js'),
      this.destinationPath(this.names.path_file),
      this.names
    );

  };

  // add test template
  addTest() {

    this.fs.copyTpl(
      this.templatePath('factory_test.js'),
      this.destinationPath(this.names.path_file_test),
      this.names
    );

  };

};