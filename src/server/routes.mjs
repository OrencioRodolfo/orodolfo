import express from 'express';
import aboutCtrl from './controllers/about.mjs';

const router = express.Router();

export default function controller(app) {
  router.get('/', aboutCtrl.get);

  app.use('/about', router);
}

