const mongoose = require("mongoose");

const { DB_USER, DB_PASS } = process.env;

let uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.sr6nm.mongodb.net/authentication?retryWrites=true&w=majority`;

async function main() {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
}

main().catch((err) => console.error(err));
