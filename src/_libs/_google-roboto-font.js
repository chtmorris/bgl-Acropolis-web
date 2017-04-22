window.WebFontConfig = {
    google: {
        families: ['Roboto:400,400italic,300,300italic,500,700:latin', 'Roboto+Mono::latin']
    }
};

(function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'false';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();
