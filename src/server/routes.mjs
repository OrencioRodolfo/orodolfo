import express from 'express';
import aboutCtrl from './controllers/about.mjs';
import historyCtrl from './controllers/history.mjs';

const router = express.Router();

export default function controller(app) {
  router.get('/about', aboutCtrl.get);
  router.get('/commit', historyCtrl.getCommits);

  app.use('/', router);
}

