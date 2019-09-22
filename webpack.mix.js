// eslint-disable-next-line no-undef
let mix = require('laravel-mix');


mix.sass('src/sass/style.scss', 'css/min.style.css').browserSync({
    proxy: false,
    server: {
        baseDir: './'
    },
    files: [
        'src/js/main.js',
        'src/sass/**/*.scss',
        '**/*.html',
        '**/*.php'
    ]
}).options({
    processCssUrls: false
});
