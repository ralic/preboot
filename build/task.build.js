/**
 * Author: Jeff Whelpley
 * Date: 6/5/15
 *
 * Build the client side preboot code and put it in the dist folder
 */

var clientCodeGenerator = require('../src/server/client_code_generator');

module.exports = function (gulp, opts) {
    var prebootOptions = opts.prebootOptions || {
            appRoot:     'app',         // selector for Angular root element
            replay:      'rerender',    // Angular will re-render the view
            freeze:      'spinner',     // show spinner w button click & freeze page
            focus:       true,          // maintain focus after re-rendering
            buffer:      true,          // client app will write to hidden div until bootstrap complete
            keyPress:    true,          // all keystrokes in text elements recorded
            buttonPress: true           // when button pressed, record and freeze page
        };

    return function () {
        return clientCodeGenerator.getClientCodeStream(prebootOptions)
            .pipe(gulp.dest('./dist'));
    };
};