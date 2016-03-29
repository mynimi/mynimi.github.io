module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        responsive_images: {
            square:{
                options: {
                    sizes: [{
                        width: 450,
                        height: 450,
                        aspectRatio: false,
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: [
                        'media/needs-crops/*.{jpg,gif,png}',
                    ],
                    cwd: '',
                    dest: 'media/'
                }]
            },
            thumbs:{
                options: {
                    sizes: [{
                        width: 450,
                        height: 253,
                        aspectRatio: false,
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: [
                        'media/needs-crops/*.{jpg,gif,png}',
                    ],
                    cwd: '',
                    dest: 'media/'
                }]
            }
        },

        buildcontrol: {
            options: {
                dir: 'jekyllbuild',
                commit: true,
                push: true,
                message: 'Built site from commit %sourceCommit% on branch %sourceBranch%'
            },
            pages: {
                options: {
                    remote: 'git@github.com:mynimi/mynimi.github.io.git',
                    branch: 'master'
                }
            }
        },

        uglify: {
            options: {
                preserveComments: false,
            },
            dist: {
                files:{
                    'jekyllbuild/js/build/main.min.js': ['js/*.js']
                }
            },
        },

        sass: {
            options: {
                outputStyle: 'compressed',
            },
            demo: {
                files: [{
                    expand: true,
                    cwd: 'demo',
                    src: ['{,*/}*.scss'],
                    dest: 'demo',
                    ext: '.css'
                }],
                options: {
                    outputStyle: 'nested'
                }
            },
            main: {
                files: [{
                    expand: true,
                    cwd: 'sass',
                    src: ['*.scss'],
                    dest: 'jekyllbuild/css',
                    ext: '.css'
                }]
            }
        },

        postcss: {
            options: {
                processors: [
                    require('autoprefixer-core')({browsers: '> 1%'}), // add vendor prefixes
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '',
                    src: ['{,*/}{,*/}{,*/}{,*/}*.css'],
                    dest: '',
                    ext: '.css'
                }]
            }
        },

        jade: {
            compile: {
                options: {
                    pretty: true
                },
                files: [{
                    expand: true,
                    cwd: '',
                    src: [ '_layouts/jade/*.jade' ],
                    dest: '_layouts',
                    flatten: true,
                    ext: '.html'
                }]
            },
            compile_demo: {
                options: {
                    pretty: true
                },
                files: [{
                    expand: true,
                    cwd: 'demo',
                    src: ['{,*/}*.jade'],
                    dest: 'demo',
                    ext: '.html'
                }]
            }
        },

        shell: {
            jekyllServe: {
                command: "jekyll serve --no-watch"
            },
            jekyllBuild: {
                command: "jekyll build"
            }
        },

        open: {
            build: {
                path: 'http://localhost:4000',
                app: 'Firefox'
            }
        },

        minifyHtml: {
            options: {
                cdata: true,
                removeComments: true,
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '',
                    src: ['jekyllbuild/{,*/}{,*/}{,*/}*.html'],
                    dest: '',
                    ext: '.html'
                }]
            }
        },

        prettify: {
            options: {
                indent: 4,
                brace_style: 'end-expand',
                unformatted: ['code', 'pre', 'script']
            },
            html: {
                files: [{
                    expand: true,
                    cwd: '',
                    src: ['jekyllbuild/{,*/}{,*/}{,*/}{,*/}*.html'],
                    dest: '',
                    ext: '.html'
                }]
            }
        },

        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ['js/{,*/}*.js'],
                tasks: ["uglify"]
            },
            demo_js: {
                files: ['demo/{,*/}{,*/}*.js'],
                taks: ["shell:jekyllBuild"]
            },
            jade: {
                files: ["{,*/}{,*/}{,*/}*.jade", "_layouts/jade/{,*/}*.html", "demo/{,*/}*.jade", "!jekyllbuild/**"],
                tasks: ["jade"]
            },
            css: {
                files: ["sass/{,*/}{,*/}{,*/}*.scss"],
                tasks: ["sass", "postcss"]
            },
            demo_css:{
                files: ["demo/{,*/}{,*/}*.scss"],
                tasks: ["sass", "postcss", "shell:jekyllBuild"]
            },
            crops: {
                files: ["media/needs-crops/*.{jpg,gif,png}"],
                tasks: ["responsive_images"]
            },
            img:{
                files: ["media/*.{jpg,gif,png}"],
                tasks: ["shell:jekyllBuild"]
            },
            site: {
                files: ["{,*/}{,*/}{,*/}*.html", "{,*/}{,*/}{,*/}*.md", "{,*/}*.yml", "!jekyllbuild/**"],
                tasks: ["shell:jekyllBuild"]
            },
        }
    });


    require('load-grunt-tasks')(grunt);

    // Default task(s).
    grunt.registerTask("default", ["responsive_images", "uglify", "sass", "postcss", "jade", "shell:jekyllBuild", "open", "watch"]);
    grunt.registerTask("serve", ["shell:jekyllServe"]);
    grunt.registerTask("build", ["uglify", "sass", "postcss", "jade", "shell:jekyllBuild"]);
    grunt.registerTask("deploy", ["minifyHtml", "buildcontrol:pages"]);
    grunt.registerTask("deploy-pretty", ["prettify", "buildcontrol:pages"]);
};
