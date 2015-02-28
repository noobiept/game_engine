module.exports = function( grunt )
{
grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),
        
        typescript: {
            base: {
                src: [ '../source/**/*.ts' ],
                dest: '../build/output/game_engine.js',
                options: {
                    declaration: true,
                    target: 'es5'
                }
            }
        },

        copy: {
            main: {
                files: [
                    {
                        cwd: '../source/utilities/',
                        src: [ 'utilities-1.6-min.js', 'utilities-1.6.d.ts' ],
                        dest: 'output/',
                        expand: true
                    },
                    {
                        cwd: '../source/css/',
                        src: [ 'style.css' ],
                        dest: 'output/',
                        expand: true
                    }
                ]
            }
        },
        
        uglify: {
            release: {
                files: {
                    'output/game_engine.min.js': [ 'output/game_engine.js' ]
                }
            }
        },

        typedoc: {
            build: {
                src: [ '../source/**/*.ts' ],
                options: {
                    out: 'documentation/',
                    name: 'game_engine',
                    target: 'es5'
                }
            }
        }
    });
    
    // load the plug-ins
grunt.loadNpmTasks( 'grunt-typescript' );
grunt.loadNpmTasks( 'grunt-contrib-copy' );
grunt.loadNpmTasks( 'grunt-contrib-uglify' );
grunt.loadNpmTasks( 'grunt-typedoc' );

    // tasks
grunt.registerTask( 'default', [ 'typescript', 'copy' ] );
grunt.registerTask( 'docs', [ 'typedoc' ] );
grunt.registerTask( 'release', [ 'default', 'uglify', 'docs' ] );
};