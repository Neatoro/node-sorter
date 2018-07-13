const Jasmine = require('jasmine');
const jasmine = new Jasmine();

jasmine.loadConfigFile('./jasmine.json');

const JasmineConsoleReporter = require('jasmine-console-reporter');
const reporter = new JasmineConsoleReporter({
    colors: true,
    cleanStack: true,
    verbosity: 4,
    listStyle: 'indent',
    activity: false
});

jasmine.env.clearReporters();
jasmine.addReporter(reporter);
jasmine.execute();
