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
adicionar "respos" endpoint com:
 - total de stars
 - lista de repositórios

------------------------------------

Remote mongo connection:
mongo ds141284.mlab.com:41284/heroku_fnks1hn2 -u RodolfoGoncalves -p orag1991

db.commits.insert([{"date":"2016-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2016-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2016-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2015-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2015-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2015-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2014-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2014-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2014-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2014-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"}])

db.organizations.insert([
  {
      "name" : "ACIN iCloud Solutions",
      "description" : "Working as a fullstack web developer developer, in Acin iCloud Solutions a had the following responsibilities:- Web Development on the acinGov platform, a procurement platform;- Plan, architecture and prototype new solutions;- Implementation of webservices for communication with external services to acinGov platform.- Validation and documentation of new solutions;- Software Deployment and maintenance",
      "image" : "http://www.acin.pt/img/brand/logotipo.png",
      "start_date" : new Date(2013, 01, 12),
      "end_date" : new Date(2015, 12, 05)   
  },

  {
      "name" : "Web Madeira",
      "description" : "A 4-hours not-for-profit by-the-community and for-the-community conference about web development",
      "image" : "http://webmadeira.herokuapp.com/img/logo.svg",
      "start_date" : new Date(2016, 12, 23),
      "end_date" : new Date(2016, 12, 23)
  },
  {
      "name" : "Udemy",
      "description" : "I'm passionate about learning and sharing knowledge and because of that I've become an Udemy instructor. Flexbox: The complete guide is about a new CSS 3 module for building layouts and it is my first experience as a tutor.",
      "image" : "https://www.udemy.com/staticx/udemy/images/v5/logo-green.svg",
      "start_date" : new Date(2017, 08, 01)
  },
  {
      "name" : "Exictos",
      "description" : "As Front End Web Developer, I contribute essentially on Internet Banking solutions.Although I have been participating in different projects, my major focus is over a new Internet Banking project that relies in an omnichannel strategy and implements an architecture based in mini-apps and micro-services.",
      "image" : "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAPtAAAAJDJmZjlmY2QzLWU0ZGUtNDk0Mi1hMWNhLTJjYjk1ZjFkMGVkNw.png",
      "start_date" : new Date(2016, 12, 23)
  }
])