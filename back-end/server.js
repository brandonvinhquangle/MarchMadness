const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

/* Mongoose */
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://CS-260:Password@cluster0.mdzpn.mongodb.net/teams?', {
  useNewUrlParser: true
});

/* Multer */
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

/* Data for the APIs */
// Creates a scheme for team: a title and a path to an image.
const teamSchema = new mongoose.Schema({
  name: String,
  record: String,
  conference: String,
  city: String,
  state: String,
  path: String,
});

// Creates a model for items in the museum.
const Team = mongoose.model('Team', teamSchema);

/* REST APIs */
// Get a list of all of the items in the museum.
app.get('/api/team', async (req, res) => {
  try {
    let teams = await Team.find();
    res.send(teams);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Creates a new item in the museum: takes a title and a path to an image.
app.post('/api/teams', async (req, res) => {
  const team = new Team({
    name: req.body.name,
    record: req.body.record,
    conference: req.body.conference,
    city: req.body.city,
    state: req.body.state,
    path: req.body.path,
  });
  try {
    await team.save();
    res.send(team);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Uploads a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

// Deletes an team in the museum: takes an id
app.delete('/api/teams/:id', async (req, res) => {
  try {
    await Team.deleteOne({
      _id: req.params.id
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Edits a team in the museum: takes an id and a title
app.put('/api/teams/:id', async (req, res) => {
  const team = await Team.findOne({_id:req.params.id});
  try {
    team.name = req.body.name;
    team.record = req.body.record;
    team.conference = req.body.conference;
    team.city = req.body.city;
    team.state = req.body.state;    
    await team.save();
    res.send(team);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started on port ${port}.`));
