//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to Mongodb Server');
  }
  console.log('Connected to Mongodb Server');

  //Insert new doc into Users (name, age, location)
  db.collection('Users').insertOne({
    name: 'Jason',
    age: 32,
    location: 'Palm Beach'
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert user', err);
    }
    console.log(result.ops);
  });

  db.close();
});
