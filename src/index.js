require('dotenv');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./configs/db/connect');
const PORT = process.env.PORT || 3001;
const route = require('./routes/route');
const app = express();
db.connectDB();

// logger the request from client
app.use(morgan('combined'));
// handle data from client which have URL-encoded type
app.use(express.urlencoded({extended: true}));  
// handle data from client which have JSON type
app.use(express.json());

app.use(cors());

route(app);

app.listen(PORT, ()=> {
    console.log(`Server is listening on http://localhost:${PORT}`);
})