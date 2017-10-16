import Mongo from 'mongodb';
import config from '../config.mjs';

const MongoClient = Mongo.MongoClient;

function get(req, res) {
  MongoClient.connect(config.db.url, (err, db) => {
    const collection = db.collection('organizations');
    collection.find().sort({ start_date: -1 }).toArray((error, doc) => {
      res.json(doc);
    });

    db.close();
  });
}

export default {
  get,
};
