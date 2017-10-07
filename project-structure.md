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
        /services
          /history

----------
TODO:

lista de commits
link para o repo vir do server
botao de star (indexedDB)
pedidos HTTP em servico

---------

Remote mongo connection:
mongo ds141284.mlab.com:41284/heroku_fnks1hn2 -u RodolfoGoncalves -p orag1991

db.commits.insert([{"date":"2016-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2016-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2016-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2015-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2015-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2015-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2014-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2014-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2014-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"},{"date":"2014-06-04T23:00:00.000Z","title":"A title","description":"Description...","image":"https://avatars0.githubusercontent.com/u/4216535?v=4&s=72","hash":"d9094385acf7d47c7c5c6f7ceb6866b54f9b602d","hashAlias":"d909438","author":"OrencioRdolfo"}])