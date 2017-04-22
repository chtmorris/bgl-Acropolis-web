(function() {
    if ('registerElement' in document && 'import' in document.createElement('link') && 'content' in document.createElement('template')) {
        // platform is good!
    } else {
        // polyfill the platform!
        var e = document.createElement('script');
        e.src = 'bower-components/webcomponentsjs/webcomponents-lite.min.js';
        e.type = 'text/javascript';
        e.async = 'false';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(e, s);
    }
})();
