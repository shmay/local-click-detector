module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: 'lib',
          src: '**/*.{coffee,litcoffee,coffee.md}',
          dest: 'lib',
          ext: '.js'
        }]
      }
    },

    watch: {
      coffee: {
        files: ['lib/**/*.{coffee,litcoffee,coffee.md}'],
        tasks: ['coffee:dist']
      }
    },

    vulcanize: {
      default: {
        options: {
          csp: true,
          inline: true,
          verbose: true
        },
        files: {
          'dist/index.html': 'index.html'
        }
      }
    }

  });
};
