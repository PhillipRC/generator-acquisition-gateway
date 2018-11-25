'use strict';
var Generator = require('yeoman-generator');
var s = require("underscore.string");

module.exports = class extends Generator {

  // The name `constructor` is important here
  constructor(args, opts) {

    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // This makes `name` a required argument.
    this.argument('name', {type: String, required: true});

    // convert camel or underscore input into dash
    this.options.name = s.dasherize(this.options.name) + '-service';

    // names to use in templates
    this.names = {
      nameDash: this.options.name,
      nameClass: s.classify(this.options.name),
      nameCamel: s.camelize(this.options.name),
      nameTitle: s(this.options.name).humanize().titleize().value()
    };

    // path to place templates
    this.path = 'ag-app/app/scripts/components/services';

  }

  // add code template
  addTemplate() {

    this.fs.copyTpl(
      this.templatePath('service.js'),
      this.destinationPath(this.path + '/' + this.names.nameDash + '.js'),
      this.names
    );

  };

  // add test template
  addTest() {

    this.fs.copyTpl(
      this.templatePath('service_test.js'),
      this.destinationPath(this.path + '/tests/' + this.names.nameDash + '_test.js'),
      this.names
    );

  };

};