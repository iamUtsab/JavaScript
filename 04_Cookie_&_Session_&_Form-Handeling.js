const express = require('express')
const app = express()




// this 2 lines are used to read the blob  in POSTMAN
app.use(express.json());    // for reading the data in json format
app.use(express.urlencoded({extended: true}));   //  can read form-url-encoded for this line






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
