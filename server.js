const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const noteRouter = require('../Notes-App/routes/noteRoute')


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//Routes
app.use('/api/notes', noteRouter);



app.listen(3000, () => {
  console.log('Server is running on port ' + 3000);
});

// Connect to MongoDB
const URI = process.env.MONGODB_URL 
|| 'mongodb+srv://quintus:tuanmq38@notes.dbk2j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(URI, err=> {
    if(err) throw err;
    console.log('Connect to MongoDB')
})