"use strict";

var chai           = require("chai");
var chaiAsPromised = require("chai-as-promised");
var chaiString     = require("chai-string");

chai.should();
chai.use(chaiAsPromised);
chai.use(chaiString);

global.chaiAsPromised = chaiAsPromised;
global.expect         = chai.expect;
global.assert         = chai.assert;
global.TEST_AUTH_KEY  = 'xxxyyyyyyyyyyyyyyyyyyy';
