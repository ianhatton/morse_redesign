WebFontConfig = {
  google: { 
    families: [ 'Oswald:700:latin', 'Open+Sans:300:latin', 'Open+Sans+Condensed:300:latin', 'Source+Sans+Pro:300,700:latin' ]
  }
};

(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
            '://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
