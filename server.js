
// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path')
const mysql = require('mysql2')
const MD5 = require('crypto-js/md5')
const { Sequelize } = require('sequelize');
const favicon = require('serve-favicon')




// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

const sequelize = new Sequelize("u917258199_dbdeckpro", "u917258199_biga971", "aScfr971d6", {
  dialect: "mysql",
  host: "145.14.153.51"
 });

app.get('/api/test', function(req, res) {   
 try {
    sequelize.authenticate();
    console.log('Connecté à la base de données MySQL!');
    sequelize.query("SELECT * FROM `test`").then(([results, metadata]) => {
        console.log(results);
        res.send(results);
      })
  } catch (error) {
    console.error('Impossible de se connecter, erreur suivante :', error);
  }
})
app.get('/api', function(req, res) {   
  try {
    sequelize.authenticate();
    console.log('Connecté à la base de données MySQL!');
    sequelize.query("SELECT * FROM `produit`").then(([results, metadata]) => {
        console.log(results);
        res.send(results);
      })
  } catch (error) {
    console.error('Impossible de se connecter, erreur suivante :', error);
  }
}) 

app.get('/api/Deck', function(req, res) {   
  try {
    sequelize.authenticate();
    console.log('Connecté à la base de données MySQL!');
    sequelize.query("SELECT * FROM `deck`").then(([results, metadata]) => {
        console.log(results);
        res.send(results);
      })
  } catch (error) {
    console.error('Impossible de se connecter, erreur suivante :', error);
  }
}) 

app.get('/api/Deck/:id', function(req, res) {   
  const id = req.params.id
  try {
    sequelize.authenticate();
    console.log('Connecté à la base de données MySQL!');
    sequelize.query("SELECT * FROM `deck` WHERE `id_deck`=`"+id+"`").then(([results, metadata]) => {
        console.log(results);
        res.send(results);
      })
  } catch (error) {
    console.error('Impossible de se connecter, erreur suivante :', error);
  }
}) 

app.post('/api/Deck', function(req, res) {   
  const name = req.body.name
  const id_customer = req.body.id_customer
  const data_cards = req.body.data_cards
  const private = req.body.private
  try {
    sequelize.authenticate();
    console.log('Connecté à la base de données MySQL!');
    sequelize.query("INSERT INTO `deck`(`name`, `id_customer`, `data_cards`, `private`) VALUES ('"+name+"','"+id_customer+"','"+data_cards+"','"+private+"')").then(([results, metadata]) => {
        console.log(results);
        res.send(results);
      })
  } catch (error) {
    console.error('Impossible de se connecter, erreur suivante :', error);
  }
}) 

app.put('/api/Deck', function(req, res) {   
  const id_deck = req.body.id_deck
  const name = req.body.name
  const id_customer = req.body.id_customer
  const data_cards = req.body.data_cards
  const private = req.body.private
  try {
    sequelize.authenticate();
    console.log('Connecté à la base de données MySQL!');
    sequelize.query("SELECT * FROM `deck`").then(([results, metadata]) => {
        console.log(results);
        res.send(results);
      })
  } catch (error) {
    console.error('Impossible de se connecter, erreur suivante :', error);
  }
}) 

/*app.use(favicon(path.join(__dirname, "../favicon.ico")));
 app.use(express.static(path.join(__dirname,'../build')))
app.all('/*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname,'../build','index.html'))
}); */
var port = process.env.PORT || 4002
// starting the server
app.listen(port, () => {
  console.log(`listening on port ${port}` );
}); 

//exports.app = functions.https.onRequest(app)