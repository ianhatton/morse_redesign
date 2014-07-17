(function(){
  var app = angular.module('homePage', []);

  app.controller("FeedController", function(){
    this.blogPosts = blogPosts;
    this.jobs = jobs;
  });

  app.controller("PeopleController", function(){
    this.people = people;
  });

  app.controller("ServicesController", function(){
    this.services = services;
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

  var people = [
    {
      name: "Terry",
      role: "Managing Partner",
      description: "With a digital industry career spanning over 18 years, Terry is our lead coder and the main point of contact for our clients. His day-to-day focus is to make sure our projects get delivered on time, and to our clients' specifications. He's good at turning tech-speak into plain English.",
      image: "images/people/terry.jpg",
    },
    {
      name: "Ade",
      role: "Front End Tech Lead",
      description: "Ade is our Front End guru. He takes graphic designs and translates them into beautiful front end code. He's also a JavaScript whiz.",
      image: "images/people/ade.jpg",
    },
    {
      name: "Gillian",
      role: "Business Development Goddess",
      description: "Gill helps us meet new clients. She's been part of the team since 2011 and has already helped us to grow significantly beyond those clients who have been with us for years. Gill isn't a geek, which helps considerably, as she's able to talk to people in client-speak, and makes sure we do too!",
      image: "images/people/gillian.jpg",
    },
    {
      name: "Ian",
      role: "Front End Wizard",
      description: "Ian works with Ade to turn your pretty Front End designs into gorgeous HTML. He's also the inspiration behind our fab 404 and 500 pages.",
      image: "images/people/ian.jpg",
    },
    {
      name: "Nadjaha",
      role: "Digital Project Manager",
      description: "Nadj is our ace DPM. She makes sure we don't miss anything, including deadlines! Her superior attention to detail means that our clients stay happy, and we stay focused. Nadj is our \"gatekeeper\": she's usually your first port of call to get things done.",
      image: "images/people/nadjaha.jpg",
    },
  ];

  var services = [
    {
      name: "Dynamic Database-driven Websites",
      description: "Blah blah blah",
      icon: "fa-database",
    },
    {
      name: "Management Systems",
      icon: "fa-cog",
    },
    {
      name: "Communication Systems",
      icon: "fa-comments-o",
    },
    {
      name: "Extranets",
      icon: "fa-sitemap",
    },
    {
      name: "Automated Commercial Processes",
      icon: "fa-clock-o",
    },
    {
      name: "eCommerce",
      icon: "fa-shopping-cart",
    },
    {
      name: "iPhone and iPad apps",
      icon: "fa-apple",
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
