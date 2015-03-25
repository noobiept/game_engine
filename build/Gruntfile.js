module.exports = function( grunt )
{
grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),

            // compile typescript code to javascript
        typescript: {
            dev: {
                src: [ '../source/**/*.ts' ],
                dest: 'output/<%= pkg.name %>.js',
                options: {
                    declaration: true,
                    target: 'es5'
                }
            }
        },

        copy: {
                // copy the utilities library and the .css file
            dev: {
                files: [
                    {
                        cwd: '../source/utilities/',
                        src: [ 'utilities.1.7.0.min.js', 'utilities.1.7.0.d.ts' ],
                        dest: 'output/',
                        expand: true
                    },
                    {
                        cwd: '../source/css/',
                        src: [ '<%= pkg.name %>.css' ],
                        dest: 'output/',
                        expand: true
                    }
                ]
            },
                // make a new copy of the development version to /release/version_number/, and rename the files to include the version number
            release: {
                files: [
                    {
                        cwd: 'output/',
                        src: [ 'utilities.1.7.0.min.js', 'utilities.1.7.0.d.ts' ],
                        dest: '../release/<%= pkg.version %>/',
                        expand: true
                    },
                    {
                        cwd: 'output/',
                        src: [ '<%= pkg.name %>.min.css', '<%= pkg.name %>.min.js', '<%= pkg.name %>.d.ts' ],
                        dest: '../release/<%= pkg.version %>/',
                        expand: true,
                        rename: function( dest, source )
                            {
                            var package = require( './package.json' );
                            var version = package.version;

                            var split = source.split( '.' );

                                // add the version after the name
                            split.splice( 1, 0, version );

                            return dest + split.join( '.' );
                            }
                    }
                ]
            }
        },

            // minimize javascript
        uglify: {
            dev: {
                files: {
                    'output/<%= pkg.name %>.min.js': [ 'output/<%= pkg.name %>.js' ]
                }
            }
        },

            // minimize css
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            dev: {
                files: {
                    'output/<%= pkg.name %>.min.css': [ 'output/<%= pkg.name %>.css' ]
                }
            }
        },

            // build the documentation
        typedoc: {
            dev: {
                src: [ '../source/**/*.ts' ],
                options: {
                    out: 'documentation/',
                    name: '{%= pkg.name %>',
                    target: 'es5'
                }
            }
        }
    });




    // load the plug-ins
grunt.loadNpmTasks( 'grunt-typescript' );
grunt.loadNpmTasks( 'grunt-contrib-copy' );
grunt.loadNpmTasks( 'grunt-contrib-uglify' );
grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
grunt.loadNpmTasks( 'grunt-typedoc' );

    // tasks
grunt.registerTask( 'default', [ 'typescript', 'copy:dev' ] );      // dev build
grunt.registerTask( 'docs', [ 'typedoc' ] );                        // build the documentation
grunt.registerTask( 'minimize', [ 'uglify', 'cssmin' ] );           // minimize js and css
grunt.registerTask( 'release', [ 'default', 'minimize', 'docs', 'copy:release' ] ); // release build
};