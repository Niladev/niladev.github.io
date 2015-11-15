/**
 * Inject dependencies
 *
 * ---------------------------------------------------------------
 *
 *
 * */
module.exports = function(grunt) {

  grunt.config.set('wiredep', {
    task: {

      // Point to the files that should be updated when
      // you run `grunt wiredep`
      src: [
        'assets/*.html',
        'assets/**/**/*.html',   // .html support...

      ],

      options: {
        // See wiredep's configuration documentation for the options
        // you may pass:

        // https://github.com/taptapship/wiredep#configuration
      }
    }
  });

  grunt.loadNpmTasks('grunt-wiredep');
};
