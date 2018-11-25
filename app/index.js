'use strict';
var Generator = require('yeoman-generator');

module.exports = class extends Generator {

  setDestinationRoot() {

    // app module
    this.config.set('appModule', 'gateways');

    // write out the .yo-rc.json, which sets the destinationRoot
    this.config.save();

    this.log('Project root is set: ' + this.destinationRoot());

  };

};