/**
 * Author: Jeff Whelpley
 * Date: 6/5/15
 *
 * Build the client side preboot code and put it in the dist folder
 */
var rename = require('gulp-rename');
var clientCodeGenerator = require('../src/server/client_code_generator');

module.exports = function (gulp, opts) {
    var prebootOptions = opts.prebootOptions || {
            focus:          true,
            buffer:         true,
            keyPress:       true,
            buttonPress:    true,
            //pauseOnTyping:  true,
            replay:         'rerender',
            serverRoot:     'div.server',
            clientRoot:     'div.client',
            completeEvent:  'BootstrapComplete'
        };

    return function () {
        return clientCodeGenerator.getClientCodeStream(prebootOptions)
            .pipe(rename('preboot.js'))
            .pipe(gulp.dest('./dist'));
    };
};