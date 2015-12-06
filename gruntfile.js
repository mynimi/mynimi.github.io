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
                        'img/featured-imgs/*.{jpg,gif,png}',
                        'img/needs-crops/*.{jpg,gif,png}',
                        'img/portfolio/**/*.{jpg,gif,png}',
                    ],
                    cwd: '',
                    dest: 'img/crops/450x450/'
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
                        'img/featured-imgs/*.{jpg,gif,png}',
                        'img/needs-crops/*.{jpg,gif,png}',
                        'img/portfolio/**/*.{jpg,gif,png}',
                    ],
                    cwd: '',
                    dest: 'img/crops/450x253/'
                }]
            }
        },

        imagemin: {
            gif: {
                files: [
                    {
                        expand: true,
                        cwd: '',
                        src: ['img/{,*/}{,*/}{,*/}*.gif'],
                        dest: 'media/compressed/',
                        flatten: true,
                        ext: '.gif'
                    }
                ]
            },
            png: {
                options: {
                    optimizationLevel: 5
                },
                files: [
                    {
                        expand: true,
                        cwd: '',
                        src: ['img/{,*/}{,*/}{,*/}*.png'],
                        dest: 'media/compressed/',
                        flatten: true,
                        ext: '.png'
                    }
                ]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [
                    {
                        expand: true,
                        cwd: '',
                        src: ['img/{,*/}{,*/}{,*/}*.{jpg,jpeg}'],
                        dest: 'media/compressed/',
                        flatten: true,
                        ext: '.jpg'
                    }
                ]
            },
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
                    'js/build/main.min.js': ['js/*.js']
                }
            }
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
                }]
            },
            main: {
                files: [{
                    expand: true,
                    cwd: 'sass',
                    src: ['*.scss'],
                    dest: 'css',
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
                tasks: ["uglify", "shell:jekyllBuild"]
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
                files: ["sass/{,*/}{,*/}{,*/}*.scss", "demo/{,*/}{,*/}*.scss"],
                tasks: ["sass", "postcss", "shell:jekyllBuild"]
            },
            site: {
                files: ["{,*/}{,*/}{,*/}*.html", "{,*/}{,*/}{,*/}*.md", "{,*/}*.yml", "!jekyllbuild/**"],
                tasks: ["shell:jekyllBuild"]
            },
            images: {
                files: ["img/{,*/}*.{png,jpg,gif}", "!img/compressed/{,*/}*.*"],
                tasks: ["responsive_images", "newer:imagemin", "shell:jekyllBuild"]
            }
        }
    });


    require('load-grunt-tasks')(grunt);

    // Default task(s).
    grunt.registerTask("default", ["responsive_images", "newer:imagemin", "uglify", "sass", "postcss", "jade", "shell:jekyllBuild", "open", "watch"]);
    grunt.registerTask("serve", ["shell:jekyllServe"]);
    grunt.registerTask("build", ["responsive_images", "newer:imagemin", "uglify", "sass", "postcss", "jade", "shell:jekyllBuild"]);
    grunt.registerTask("deploy-mini", ["minifyHtml", "buildcontrol:pages"]);
    grunt.registerTask("deploy", ["prettify", "buildcontrol:pages"]);
};
