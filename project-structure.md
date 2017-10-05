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
Palete de cores:
brand: azul
accent: laranja
foreground: preto
background: cinza
positive: verde
negative: vermelho

const colors = {
  brand: {
    base: '#0366d6',
    light: '#479bfb',
    lighter: '#77b7ff',
    dark: '#045cbf',
    darker: '#044b9a',
  },
  accent: {
    base: '#e36209',
    light: '#ff9d5a',
    lighter: '#ffc197',
    dark: '#d25500',
    darker: '#a54300',
  },
  foreground: {
    base: '#24292e',
    light: '#454c52',
    lighter: '#5b656d',
    dark: '#171b1f',
    darker: '#000',
  },
  background: {
    base: '#dadada',
    light: '#fafbfc',
    lighter: '#fff',
    dark: '#ababab',
    darker: '#676767',
  },
  positive: {
    base: '#28a745',
    light: '#3dd25f',
    lighter: '#8ce4a0',
    dark: '#18692a',
    darker: '#0c4218',
  },
  negative: {
    base: '#e34c26',
    light: '#ea7c60',
    lighter: '#ff9f86',
    dark: '#d43e18',
    darker: '#b52f0d',
  },
};