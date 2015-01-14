module.exports = function( grunt )
{
grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),
        
        typescript: {
            base: {
                src: [ '../source/**/*.ts' ],
                dest: '../build/output/game_engine.js'
            }
        },

        copy: {
            main: {
                files: [
                    {
                        cwd: '../source/utilities/',
                        src: [ 'utilities-1.5-min.js' ],
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
        }

    });
    
    // load the plug-ins
grunt.loadNpmTasks( 'grunt-typescript' );
grunt.loadNpmTasks( 'grunt-contrib-copy' );
grunt.loadNpmTasks( 'grunt-contrib-uglify' );

    // tasks
grunt.registerTask( 'default', [ 'typescript', 'copy' ] );
grunt.registerTask( 'release', [ 'default', 'uglify' ] );
};