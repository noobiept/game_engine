var PATH = require( 'path' );

module.exports = function( grunt )
{
var devDest = 'build/output/';
var releaseDest = './release/<%= pkg.version %>/';
var source = './source/';

grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),

            // compile typescript code to javascript
        ts: {
            dev: {
                src: [ PATH.join( source, '**/*.ts' ) ],
                out: PATH.join( devDest, '<%= pkg.name %>.js' ),
                options: {
                    declaration: true,
                    target: 'es5'
                }
            }
        },

        copy: {
                // copy the .css file
            dev: {
                files: [
                    {
                        expand: true,
                        cwd: source,
                        src: [
                            'css/*'
                        ],
                        dest: devDest,
                        flatten: true
                    }
                ]
            },
                // make a new copy of the development version to /release/version_number/, and rename the files to include the version number
            release: {
                files: [
                    {
                        cwd: devDest,
                        src: [
                            '<%= pkg.name %>.css',
                            '<%= pkg.name %>.min.js',
                            '<%= pkg.name %>.d.ts'
                        ],
                        dest: releaseDest,
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
                    'output/<%= pkg.name %>.min.js': [
                        PATH.join( devDest, '<%= pkg.name %>.js' )
                    ]
                }
            }
        },

            // build the documentation
        typedoc: {
            options: {
                out: 'documentation/',
                name: 'Game Engine',
                mode: 'File',
                target: 'es5'
            },
            src: source
        },

        qunit: {
            all: [ './tests/start.html' ]
        }
    });




    // load the plug-ins
grunt.loadNpmTasks( 'grunt-contrib-copy' );
grunt.loadNpmTasks( 'grunt-contrib-uglify' );
grunt.loadNpmTasks( 'grunt-contrib-qunit' );
grunt.loadNpmTasks( 'grunt-ts' );
grunt.loadNpmTasks( 'typedoc' );

    // tasks
grunt.registerTask( 'default', [ 'ts', 'copy:dev' ] );      // dev build
grunt.registerTask( 'test', [ 'qunit' ] );                  // run the tests
grunt.registerTask( 'doc', [ 'typedoc' ] );                 // build the documentation
grunt.registerTask( 'min', [ 'default', 'uglify' ] );       // minimize js
grunt.registerTask( 'release', [ 'default', 'test', 'uglify', 'doc', 'copy:release' ] ); // release build
};