/**
 *  index.js launch the application.
 *
 *  @author  liuyang
 *  @date    Jul 4, 2016
 *
 */
require.ensure(['splash-screen/dist/splash.min.css', 'splash-screen'], function(require) {

    require('splash-screen/dist/splash.min.css').use();
    require('splash-screen').Splash.enable('circular');
});

require.ensure(['css/main.css', 'splash-screen', './main'], function(require) {

    require('css/main.css').use();

    var App = require('./main').default;
    (new App()).run();
});
