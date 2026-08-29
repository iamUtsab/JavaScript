const express = require('express')
const app = express()


//middlewares
app.use(function(req, res, next) {
    console.log("start the middleware");
    next();      // points to the next function
});

app.use(function(req, res, next) {
    console.log("start the middleware again");
    next();      // points to the next function
});


app.get("/", function(req, res) {
    res.send("Hieeeeeeee!!");
});

app.get("/profile", function(req, res, next) {
    return next(new Error("something went wrong"))    // this will be in console
});

// error handlers
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');    // this will go into the frontend
});


app.listen(3000);
