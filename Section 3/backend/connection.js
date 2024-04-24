const mongoose = require('mongoose');

const url = "mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/mydatabase4869?retryWrites=true&w=majority&appName=Cluster0"

// asynchronous function
mongoose.connect(url)
.then((result) => {
    console.log('connected to db');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;