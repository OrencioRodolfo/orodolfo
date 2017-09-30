import Mongo from 'mongodb';
import config from '../config.mjs';

const MongoClient = Mongo.MongoClient;

function get(req, res) {
  // Use connect method to connect to the server
  MongoClient.connect(config.db.url, (err, db) => {
    const collection = db.collection('about');
    // Find some documents
    collection.findOne({}, (error, doc) => {
      res.json(doc);
    });

    db.close();
  });
}

export default {
  get,
};
