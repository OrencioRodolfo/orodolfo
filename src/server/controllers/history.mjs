import Mongo from 'mongodb';
import config from '../config.mjs';

const MongoClient = Mongo.MongoClient;

function getCommits(req, res) {
  // Use connect method to connect to the server
  MongoClient.connect(config.db.url, (err, db) => {
    const collection = db.collection('commits');
    // Find some documents
    collection.find().sort({ date: 1 }).toArray((error, doc) => {
      res.json(doc);
    });

    db.close();
  });
}

export default {
  getCommits,
};
