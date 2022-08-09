const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config({ path: "./config/config.env" });
const connect = require("./db/database");
// router
const AuthRouter = require("./routes/authRoute")
const ScheduleRouter= require("./routes/scheduleRoute")


//route
app.get("/", (req, res) => {
  res.send("server is running perfectly...");
});



//use middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

// routes .........
app.use("/rest-api",AuthRouter);
app.use("/rest-api",ScheduleRouter);



//mongo connect
const port = process.env.PORT || 5000;
  connect.then((db) => {
    if (!db) return process.exit(1);
    // listen to the http server
    app.listen(port, () => {
      console.log(`Server is running on port http://localhost:${port}`);
    });
    app.on("error", (err) =>
      console.log(`failed to Connect with HTTP server : ${err}`)
    );
    //   err in mongodb
  })
  .catch((error) => {
    console.log(`Connection  failed...! ${error}`);
  });
