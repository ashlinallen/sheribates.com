requirejs.config({
    baseUrl: 'js/',
    waitSeconds: 2,

    paths: {
        jquery: [
            'http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min',
            'vendor/jquery-1.11.1.min'
        ],
        fancybox: [
            'http://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.pack',
            'vendor/fancybox/jquery.fancybox.pack'
        ],
        fancybox_thumbs: [
            'http://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/helpers/jquery.fancybox-thumbs',
            'vendor/fancybox/jquery.fancybox-thumbs'
        ],
        slick: [
            'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.4.0/slick.min',
            'vendor/slick/slick.min'
        ],
        analytics: [
            'ga'
        ]
    },

    shim: {
        fancybox: ['jquery'],
        fancybox_thumbs: ['fancybox'],
        slick: ['jquery']
    }
});

requirejs(["main"]);