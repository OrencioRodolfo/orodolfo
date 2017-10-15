/src
  /components 
    /Button
      /PillLeft
      /PillRight
    /Icon
    /Thumbnail
    /index.js
  /scenes
    /Home
      /components
        /Header
        /Subhead
          /Tabs
        /Nav
        /Footer
        /Social
      /services
        /about
        /history
        /months
      /CommitHistory
        /components
          /Wrapper
            /NavItem
          /CommitHistory
            /Timeline
            /CommitGroup
              /Head
              /Commits
                /Commit
          

------------------------------------
TODO:
Nav bar
routing
number of commits
number of repos

adicionar "respos" endpoint com:
 - total de stars
 - lista de repositórios

------------------------------------

Remote mongo connection:
mongo ds141284.mlab.com:41284/heroku_fnks1hn2 -u RodolfoGoncalves -p orag1991

db.commits.insert([{"date":"2016-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2016-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2016-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2015-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2015-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2015-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2014-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2014-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2014-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2014-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"}])

1991 - hello world
2008 - IT technician
2011 - Licenciatura
2013 - Acin
2015 - Exictos
2015 - Mestrado
2015 - OpenDataHub
2015 - Offline first
2016 - dcs-icon-font
2016 - PostCSS demo
2016 - WebMadeira organization + event
2016 - WebMadeira talk
2017 - Flexbox course
2017 - codeweek talk
2017 - React Native + React JS (demos)

db.commits.insert([
  {
    "date": "1991-04-27T23:00:00.000Z",
    "title": "Hello world",
    "image": "https://avatars0.githubusercontent.com/u/4216535?v=4&s=72",
    "author": "OrencioRdolfo"
  },
  {
    "date": "2008-06-20T23:00:00.000Z",
    "title": "IT technician",
    "image": "https://avatars0.githubusercontent.com/u/4216535?v=4&s=72",
    "description": "At the hightschool I introduced some programming concepts and got my first diploma as \"IT technician\"",
    "author": "OrencioRdolfo"
  },
  {
    "date": "2011-07-15T23:00:00.000Z",
    "title": "Graduation",
    "image": "https://avatars0.githubusercontent.com/u/4216535?v=4&s=72",
    "description": "Decided to follow the programming path and finished my graduation as a Informatic Engineer",
    "author": "OrencioRdolfo"
  },
  {
    "date": "2013-02-12T23:00:00.000Z",
    "title": "ACIN iCloud Solutions - Full stack web developer",
    "image": "https://avatars0.githubusercontent.com/u/4216535?v=4&s=72",
    "description": "My first professional experience was at ACIN where I had a great experience. Had the opportunity to work as a full-stack developer with essentially PHP, MySQL, JS and CSS",
    "author": "OrencioRdolfo",
    "link": "http://www.acin.pt/",
    "hashAlias": "d909438"
  },
  {
    "date": "2015-12-07T23:00:00.000Z",
    "title": "Exictos - Front end developer",
    "description": "With the purpose of learning new stuff and specifying my knowledge on a more specific stack, working at Exictos has been great and have made me a JS lover. Working with AngularJS, React Native, ES6, Sass, jQuery, Service workers...",
    "image": "https://avatars0.githubusercontent.com/u/4216535?v=4&s=72",
    "author": "OrencioRdolfo",
    "link": "http://www.exictos.com/",
    "hashAlias": "d909438"
  },
  {
    "date": "2016-06-22T23:00:00.000Z",
    "title": "Master's degree",
    "description": "Decided to keep on with my studies along with my roles at ACIN and then Exictos. Have built a web platform to manage and publicate scientific datasets about any matter. Used stuff like NodeJS, MongoDB + Replication + Clustering, AngularJS, Less, Grunt...",
    "image": "https://avatars0.githubusercontent.com/u/4216535?v=4&s=72",
    "author": "OrencioRdolfo",
    "link": "https://github.com/OrencioRodolfo/OpenDataHub",
    "hashAlias": "d909438"
  },
  {
    "date": "2016-06-22T23:00:00.000Z",
    "title": "OpenDataHub",
    "description": "An open source project related to my Master's degree. Available at github and built with NodeJS, MongoDB + Replication + Clustering, AngularJS, Less, Grunt...",
    "image": "https://avatars0.githubusercontent.com/u/4216535?v=4&s=72",
    "author": "OrencioRdolfo",
    "link": "https://github.com/OrencioRodolfo/OpenDataHub",
    "hashAlias": "d909438"
  }
])

db.commits.insert([
  {
    "date": "2016-06-03T23:00:00.000Z",
    "title": "dcs-icon-font",
    "description": "At Exictos, we had been strugling about SVG icons, and paths and web fonts with limited icon sets so... We decided to create our own! Had the opportunity to build a web font generator to use icons as a web font, and it has been used in much of our projects. \"We eat our food.\"",
    "image": "https://avatars0.githubusercontent.com/u/4216535?v=4&s=72",
    "author": "OrencioRdolfo",
    "link": "https://github.com/Exictos-DCS/dcs-icon-font",
    "hashAlias": "d909438"
  },
  {
    "date": "2016-07-08T23:00:00.000Z",
    "title": "Offline first web apps",
    "description": "Have been listening about Offline first web apps and services workers and so on... And at Exictos gave me the opportunity to study and build a demo about it. Then I've created the \"Exictos\" organization at github and made the demo publicly available. Thank you guys!",
    "image": "https://avatars0.githubusercontent.com/u/4216535?v=4&s=72",
    "author": "OrencioRdolfo",
    "link": "https://github.com/OrencioRodolfo/offline-first-apps",
    "hashAlias": "d909438"
  },
  {
    "date": "2016-07-08T23:00:00.000Z",
    "title": "PostCSS + Atomic Design",
    "description": "PostCSS, the new thing! And I wanna to know it. Since the best way to learn something is by doing it, I and a friend of mine have built a landing page using PostCSS and following the Atomic Design tecnique. This was the page for the \"Web Madeira\" meetup.",
    "image": "https://avatars0.githubusercontent.com/u/4216535?v=4&s=72",
    "author": "OrencioRdolfo",
    "link": "https://github.com/webmadeira/landing-page",
    "hashAlias": "d909438"
  },
  {
    "date": "2016-12-23T23:00:00.000Z",
    "title": "Web Madeira Meetup",
    "description": "One of the greatest self accomplishments. As an organizer and speaker, me and group of speakers talked and discussed about different topics about web development with the attendees, it was a wonderful experience. The event's landing page was built with PostCSS and Atomic desing, the topics on my talk.",
    "image": "https://avatars0.githubusercontent.com/u/4216535?v=4&s=72",
    "author": "OrencioRdolfo",
    "link": "https://github.com/webmadeira",
    "hashAlias": "d909438"
  },
  {
    "date": "2017-04-20T23:00:00.000Z",
    "title": "Udemy course - Flexbox",
    "description": "I really believe in the sentence \"You never really know something until you know how to teach it\", and I love to share knowledge. So I decided to take my first experience as an instructor at Udemy. Result: Some networking and deeper knowledge about Flexbox!",
    "image": "https://avatars0.githubusercontent.com/u/4216535?v=4&s=72",
    "author": "OrencioRdolfo",
    "link": "https://www.udemy.com/user/rodolfo-goncalves-2/",
    "hashAlias": "d909438"
  }
])

db.commits.insert([
  {
    "date": "2017-08-10T23:00:00.000Z",
    "title": "Whynotcarrental",
    "description": "Wanted to have the experience of dealing with the customer and trying to specify requirements and mockups and all that, and this project is exactly that. Build with Laravel, MySQl, Angular, Sass...",
    "image": "https://avatars0.githubusercontent.com/u/4216535?v=4&s=72",
    "author": "OrencioRdolfo",
    "link": "http://www.whynotcarrental.com/",
    "hashAlias": "d909438"
  },
  {
    "date": "2017-08-10T23:00:00.000Z",
    "title": "Codeweek talk",
    "description": "One of the things that I most appretiate at Exictos are the people and the seeking for improvement. I'm a big fan of Git, Git flow, CI and CD and had the opportunity to promote the migration of several projets to Git and changing all the development cycle. Now I have the opportunity to share this experience at one of the Codeweek's event as speaker!",
    "image": "https://avatars0.githubusercontent.com/u/4216535?v=4&s=72",
    "author": "OrencioRdolfo",
    "link": "https://prezi.com/rrv3i6tusl8a/development-cycle/",
    "hashAlias": "d909438"
  },
  {
    "date": "2017-10-10T23:00:00.000Z",
    "title": "Personal page",
    "description": "My personal page is one of my achievements that I would share with you. It could be a simple HTML page with hardcoded content and come CSS but... I did it the hard way. I have been learning about ReactJS and React Native and this page is my ReactJS + Redux demo.",
    "image": "https://avatars0.githubusercontent.com/u/4216535?v=4&s=72",
    "author": "OrencioRdolfo",
    "link": "https://github.com/OrencioRodolfo/orodolfo",
    "hashAlias": "d909438"
  }
])