const dotenv = require("dotenv");
dotenv.config();

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");

var todoRouter = require("./routes/todoRoute");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "node_app",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

app.use("/", todoRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Console Log
  console.log(err);

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// Start server
app.listen(process.env.PORT, function () {
  console.log("Node server running on http://localhost:" + process.env.PORT);
});

module.exports = app;
