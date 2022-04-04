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
// Creates a scheme for items in the museum: a title and a path to an image.
const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
  path: String,
});

// Creates a model for items in the museum.
const Item = mongoose.model('Item', itemSchema);

/* REST APIs */
// Get a list of all of the items in the museum.
app.get('/api/items', async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Creates a new item in the museum: takes a title and a path to an image.
app.post('/api/items', async (req, res) => {
  const item = new Item({
    title: req.body.title,
    description: req.body.description,
    path: req.body.path,
  });
  try {
    await item.save();
    res.send(item);
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

// Deletes an item in the museum: takes an id
app.delete('/api/items/:id', async (req, res) => {
  try {
    await Item.deleteOne({
      _id: req.params.id
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Edits an item in the museum: takes an id and a title
app.put('/api/items/:id', async (req, res) => {
  const item = await Item.findOne({_id:req.params.id});
  try {
    item.title = req.body.title;
    item.description = req.body.description;
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started on port ${port}.`));
