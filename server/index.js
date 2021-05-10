const express = require('express');
const app = express();

app.use(express.json());
const cors = require('cors');
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();

const mysql = require('mysql');

const db = mysql.createConnection({
      connectTimeout: 10,
      host: 'localhost',
      user: 'root',
      password: '',
      database: process.env.DATABASE,
});

db.connect((err, res) => {
      if (res) {
            console.log('Connecting!');
      }
});

// app.use("/", (req, res) => {

// })

app.get('/doors', (req, res) => {
      var sqlSelcet = 'SELECT * FROM doors';
      db.query(sqlSelcet, (err, result) => {
            res.send(result)
      })
});

app.use('/like', (req, res) => {
      let id = req.body.id;
      let like;
      console.log(id);
      db.query(`SELECT likes FROM doors WHERE id = ${id}`, (err, result) => {
            if (result[0].likes > 0) {
                  like = result[0].likes + 1;
            }
            else {
                  like = 1;
            }
            addLike(id, like);
      });
});

const addLike = (id, like) => {
      db.query(`UPDATE doors SET likes = ${like} WHERE id = ${id}`, (err, result) => {
            if (err) throw err;
      })
}

app.listen(process.env.PORT, () => console.log('Listen'))