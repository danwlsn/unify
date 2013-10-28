module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
      },
      my_target: {
        files: {
          'js/app.min.js' : ['js/app.js']
        }
      }
    },
    sass: {
      build: {
        files: {
          'css/style.css' : 'sass/style.scss'
        }
      }
    },
    watch: {
      options: {
        livereload:true,
      },
      files: ['js/main.js', 'sass/*.scss', '**/*.html'],
      tasks: ['default'],
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass']);

};
