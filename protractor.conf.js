// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 60000,
  seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    'os': 'windows',
    'os_version': '8.1',
    'browserstack.debug': 'true',
    'browserstack.networkLogs': 'true',
    'browserstack.local' : 'true',
    'browserstack.user' : '',
    'browserstack.key' : ''
  },
  directConnect: false,
  baseUrl: 'http://localhost:4202',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
