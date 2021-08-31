const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
require('dotenv').config();


const mysql = require('mysql');

const db = mysql.createConnection({
      // timeout:10000,
      host: 's29oj5odr85rij2o.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      user: 'lyqvhdsnparfe7k9',
      password: 'dckq22oa59ag1o6j',
      database: "g6tt6a3vsgr3i9ha",
});

app.use('/doors', (req, res) => {
      var sqlSelcet = 'SELECT * FROM doors ';
      db.query(sqlSelcet, (err, rows) => {
            res.send(rows);
      });
      
});

app.listen(process.env.PORT || 3001, () => console.log('Listen'))