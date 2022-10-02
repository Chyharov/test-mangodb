const { connect } = require("mongoose");

const mongoURL =
  "mongodb+srv://superUser:superrestart@cluster0.lr0b3of.mongodb.net/?retryWrites=true&w=majority";

connect(mongoURL, { dbName: "database" })
  .then(() => console.log("MangoDB connected"))
  .catch((err) => console.log(err.message));
