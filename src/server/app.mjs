import express from 'express';

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(`${process.cwd()}/public`));

app.get('/', (req, res) => res.sendFile(`${process.cwd()}/index.html`));

app.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}!`);
});
