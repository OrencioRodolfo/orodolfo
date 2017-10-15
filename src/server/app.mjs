import express from 'express';
import path from 'path';
import routes from './routes.mjs';

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.resolve('public')));

// load routes
routes(app);

// serve the index
app.get('/*', (req, res) => res.sendFile(path.resolve('public/index.html')));

app.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}!`);
});
