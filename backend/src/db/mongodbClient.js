const mongoClient = require('mongodb').MongoClient;
const config = require('config');
const logger = require('../utils/logger');

let dbClient = null;

module.exports = function getMongoDBClient() {
  if (dbClient) {
    return dbClient;
  }
  logger.info('Connecting to MongoDB client...');
  const url1 = 'mongodb+srv://rrcp:asadmalik@cp360-6pik6.mongodb.net/test?retryWrites=true&w=majority';

  dbClient = mongoClient
    .connect(url1, { useNewUrlParser: true })
    .then(client => {
      logger.info('MongoDB client has been successfully created');
      return client.db('cp360');
    })
    .catch(err => {
      logger.error(`Error occurred while connecting to mongodb: ${err}`);
    });

  return dbClient;
};
