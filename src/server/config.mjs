export default {
  db: {
    host: 'localhost',
    port: '27017',
    name: 'orodolfo',
    get url() {
      return process.env.MONGODB_URI || `mongodb://${this.host}:${this.port}/${this.name}`;
    },
  },
};
