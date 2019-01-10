var mongoose = require('mongoose');
mongoose
    .connect('mongodb://127.0.0.1:27017/sample' , { useNewUrlParser: true });
    // .connect('mongodb://lawrencethomp:dryboy88@ds143201.mlab.com:43201/people');