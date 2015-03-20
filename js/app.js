requirejs.config({
    baseUrl: 'js/',
    waitSeconds: 2,

    paths: {
        jquery: [
            'http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min',
            'vendor/jquery-1.11.1.min'
        ],
        fancybox: [
            'vendor/fancybox/jquery.fancybox'
        ],
        fancybox_thumbs: [
            'http://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/helpers/jquery.fancybox-thumbs',
            'vendor/fancybox/jquery.fancybox-thumbs'
        ],
        slick: [
            'vendor/slick/slick'
        ],
        analytics: [
            'vendor/ga'
        ]
    },

    shim: {
        fancybox: ['jquery'],
        fancybox_thumbs: ['fancybox'],
        slick: ['jquery']
    }
});

requirejs(["main"]);