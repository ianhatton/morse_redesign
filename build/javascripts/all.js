(function(){
  var app = angular.module('homePage', []);

  app.controller("FeedController", function(){
    this.blogPosts = blogPosts;
    this.jobs = jobs;
  });

  app.directive("latestWork", function() {
    return {
      restrict: "E",
      templateUrl: "latest-work.html"
    };
  });

  var blogPosts = [
    { createdAt: "2013-06-22 09:40:53",
      title: "Blog post 1",
      subtitle: "Blah",
      intro: "Lorem ipsum dolor sit amet.",
    },
  ];

  var jobs = [
    { createdAt: "2013-06-20 09:00:00",
      title: "Project 1",
      subtitle: "Blah",
      image: "http://fillmurray.com/600/400",
      intro: "Lorem ipsum dolor sit amet.",
    },
    { createdAt: "2013-06-19 09:00:00",
      title: "Project 2",
      subtitle: "Blah",
      image: "http://fillmurray.com/602/400",
      intro: "Lorem ipsum dolor sit amet.",
    },
    { createdAt: "2013-06-18 09:00:00",
      title: "Project 3",
      subtitle: "Blah",
      image: "http://fillmurray.com/604/400",
      intro: "Lorem ipsum dolor sit amet.",
    },
  ];
})();
WebFontConfig = {
  google: { 
    families: [ 'Source+Sans+Pro:300,400,700:latin' ]
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
