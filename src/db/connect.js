const { MongoClient } = require("mongodb");
let uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("sample_geospatial").collection("shipwrecks");
  const filteredDocs = collection
    .find({ coordinates: [-145.7847141, 60.5821239] })
    .toArray()
    .then((res) => {
      // console.log(res);
      client.close();
    })
    .catch((err) => {
      console.log(err);
    });
  // perform actions on the collection object
});

module.exports = {
  client,
};
