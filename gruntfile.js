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
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [
                    {
                        // Set to true to enable the following options…
                        expand: true,
                        // cwd is 'current working directory'
                        cwd: '',
                        src: ['img/*.png', 'img/**/*.png', 'img/**/**/*.png'],
                        // Could also match cwd line above. i.e. project-directory/img/
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
                        // Set to true to enable the following options…
                        expand: true,
                        // cwd is 'current working directory'
                        cwd: '',
                        src: ['img/*.jpg', 'img/**/*.jpg', 'img/**/**/*.jpg', 'img/*.jpeg', 'img/**/*.jpeg', 'img/**/**/*.jpeg'],
                        // Could also match cwd. i.e. project-directory/img/
                        dest: 'media/compressed/',
                        flatten: true,
                        ext: '.jpg'
                    }
                ]
            },
            gif: {
                options: {
                    progressive: true
                },
                files: [
                    {
                        // Set to true to enable the following options…
                        expand: true,
                        // cwd is 'current working directory'
                        cwd: '',
                        src: ['img/*.gif', 'img/**/*.gif', 'img/**/**/*.gif'],
                        // Could also match cwd. i.e. project-directory/img/
                        dest: 'media/compressed/',
                        flatten: true,
                        ext: '.gif'
                    }
                ]
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


        concat: {
            index: {
                src: ['js/shared/*.js', 'js/index/*.js'],
                dest: 'js/concat/index.js',
            },
            page: {
                src: ['js/shared/*.js', 'js/page/*.js'],
                dest: 'js/concat/page.js',
            },
        },

        uglify: {
            options: {
                beautify: true,
            },
            dist: {
                files:{
                    'js/build/index.min.js': 'js/concat/index.js',
                    'js/build/page.min.js': 'js/concat/page.js',
                }
            }
        },

        sass: {
            options: {
                outputStyle: 'compressed',
            },
            dist: {
                files: {
                    'css/main.css': 'sass/main.scss'
                }
            }
        },

        autoprefixer: {
            global: {
                src: 'css/main.css',
                dest: 'css/main.css'
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
            }
        },

        copy: {
            css: {
                files: [
                    {
                        expand: true,
                        src: ['css/**'],
                        dest: 'jekyllbuild/'
                    },
                ]
            },
            js: {
                files: [
                    {
                        expand: true,
                        src: ['js/**'],
                        dest: 'jekyllbuild/'
                    },
                ]
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

        open : {
            build: {
                path: 'http://localhost:4000',
                app: 'Firefox'
            }
        },

        minifyHtml: {
            options: {
                cdata: true
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

        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ['js/{,*/}*.js'],
                tasks: ["newer:concat", "newer:uglify", "copy:js"]
            },
            jade: {
                files: ["{,*/}{,*/}{,*/}*.jade", "_layouts/jade/{,*/}*.html", "!jekyllbuild/{,*/}{,*/}*.jade"],
                tasks: ["jade"]
            },
            css: {
                files: ["sass/{,*/}{,*/}{,*/}*.scss"],
                tasks: ["sass", "autoprefixer", "copy:css"]
            },
            site: {
                files: ["{,*/}{,*/}{,*/}*.html", "{,*/}{,*/}{,*/}*.md", "{,*/}*.yml", "!jekyllbuild/{,*/}{,*/}*.*", "!node_modules/{,*/}*.*"],
                tasks: ["shell:jekyllBuild"]
            },
            images: {
                files: ["img/{,*/}*.{png,jpg}", "!img/compressed/{,*/}*.*"],
                tasks: ["responsive_images", "newer:imagemin", "shell:jekyllBuild", "copy"]
            }
        }
    });


    require('load-grunt-tasks')(grunt);

    // Default task(s).
    grunt.registerTask("default", ["responsive_images", "newer:imagemin", "newer:concat", "newer:uglify", "sass", "autoprefixer", "newer:jade", "shell:jekyllBuild", "copy", "open", "watch"]);
    grunt.registerTask("serve", ["shell:jekyllServe"]);
    grunt.registerTask("build", ["responsive_images", "newer:imagemin", "newer:concat", "newer:uglify", "sass", "autoprefixer", "newer:jade", "shell:jekyllBuild", "copy"]);
    grunt.registerTask("deploy", ["buildcontrol:pages"]);
};
