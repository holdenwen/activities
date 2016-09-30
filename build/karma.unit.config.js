import base from './karma.base.config.js'

module.exports = function(config) {
    config.set(Object.assign(base, {
        framework: ['jasmine'],
        browsers: ['phantomjs']
        // test ssh
        // test ssh
        // test ssh
        // test ssh
        // test ssh from MacBook Air 2
        // test ssh from MacBook Air 3
    }));
};