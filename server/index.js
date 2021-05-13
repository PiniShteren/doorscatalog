const express = require('express');
const app = express();

app.use(express.json());
const cors = require('cors');
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();

const mysql = require('mysql');

const db = mysql.createPool({
      timeout: 1000,
      host: 'localhost',
      user: 'root',
      password: '',
      database: "datadoors",
      port: process.env.PORT
});

app.use('/doors', (req, res) => {
      var sqlSelcet = 'SELECT * FROM doors';
      var result = (db.query(sqlSelcet, (err, rows) => {
            return rows;
      }))();
      db.end();
      res.send(result);
});
app.use('/like', (req, res) => {
      let id = req.body.id;
      let like;
      console.log(id);
      db.query(`SELECT likes FROM doors WHERE id = ${id}`, (err, result) => {
            if (err) throw err;
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
// db.destroy();
app.listen(process.env.PORT || 3001, () => console.log('Listen'))