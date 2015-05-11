module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'build/css/main.css': 'src/styles/main.scss'
            }
        }
    },
    jscs: {
      src: "src/scripts/*.js",
      options: {
          config: ".jscsrc",
          requireCurlyBraces: [ "if" ]
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/scripts/*.js']
    },
    csslint: {
      analysis: {
        src: ['build/css/main.css']
      }
    },
    watch: {
      css: {
        files: 'src/styles/**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks("grunt-jscs");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Start it on up
  grunt.registerTask('default', ['uglify', 'sass', 'jscs', 'jshint', 'csslint', 'watch']);

};
