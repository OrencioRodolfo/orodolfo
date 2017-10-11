import express from 'express';
import cors from 'cors';
import routes from './routes.mjs';

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use(cors());

// Add headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/', express.static(`${process.cwd()}/public`));
app.get('/', (req, res) => res.sendFile(`${process.cwd()}/../index.html`));

// load routes
routes(app);

app.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}!`);
});
