import Mongo from 'mongodb';
import axios from 'axios';
import config from '../config.mjs';

const MongoClient = Mongo.MongoClient;

function queryAbout() {
  return new Promise((resolve) => {
    // Use connect method to connect to the server
    MongoClient.connect(config.db.url, (err, db) => {
      const collection = db.collection('about');
      // Find some documents
      collection.findOne({}, (error, doc) => {
        resolve(doc);
      });

      db.close();
    });
  });
}

function queryGithubStars() {
  const apiURL = 'https://api.github.com/users';
  return axios.all([
    axios.get(`${apiURL}/OrencioRodolfo/repos`),
    axios.get(`${apiURL}/Exictos-DCS/repos`),
    axios.get(`${apiURL}/webmadeira/repos`),
  ]).then(axios.spread((repos1, repos2, repos3) => {
    const repos = [...repos1.data, ...repos2.data, ...repos3.data];
    return repos.reduce((totalStars, repo) => totalStars + repo.stargazers_count, 0);
  }));
}

function get(req, res) {
  const aboutP = queryAbout();
  const githubP = queryGithubStars();

  Promise.all([aboutP, githubP]).then((values) => {
    const response = {
      ...values[0], // all the about
      githubStars: values[1],
    };
    res.json(response);
  });
}

export default {
  get,
};
