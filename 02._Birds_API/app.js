const express = require("express");
const app = express();

let id = 0; // Our variable id which we uses for auto-incrementing the id's
app.use(express.json()); // Parses json from request bodies.

// Our birds object, which is empty at the start-up
const birds = [];

// Returns the new objects of bird, here we create the birds
function createBird(id, name, maleRating, femaleRating) {
    return {
      id: id,
      name: name,
      maleRating: maleRating,
      femaleRating: femaleRating
    };
  }
  
  // Our function which returns all over bird object
  function getAllBirds(birds) {
    return birds;
  }
  
  // Our function which returns all a single bird object by its id
  function getBird(birds, id) {
    return birds.find((bird) => bird.id === id);
  }
  
  // Our function which returns the id of the bird
  function getBirdId(id) {
    return Number(id);
  }

  // Our function which returns the name of the bird
  function getBirdName(name) {
    return String(name);
  }

// Here we use our function getAllBirds to get the birds
app.get("/birds", (req, res) => {
    res.send({
      data: getAllBirds(birds),
    });
  });
  
// Here we use our function getBird to get the bird by its id
  app.get("/birds/:id", (req, res) => {
    const foundBird = getBird(birds, getBirdId(req.params.id));
    res.send({
      data: foundBird,
    });
  });

  // Here we use our function getBird to get the bird by its name, doesnt work
  app.get("/birds/:name", (req, res) => {
    const foundBird = getBird(birds, getBirdName(req.params.name));
    res.send({
      data: foundBird,
    });
  });

 // Here we use our function createBird, to create our birds
app.post("/birds", (req, res) => {
    id++;
    const newBird = createBird(id, req.body.name, req.body.maleRating, req.body.femaleRating);
    birds.push(newBird);
    res.send(req.body);
  }); 

  // Here we use our partially updates what we want in our bird object
app.patch("/birds/:id", (req, res) => {
    const bird = getBird(birds, getBirdId(req.params.id));
    if (req.body.name != null) bird.name = req.body.name;
    if (req.body.color != null) bird.maleRating = req.body.maleRating;
    if (req.body.color != null) bird.femaleRating = req.body.femaleRating;
    res.send(bird);
  });

  // Here we delete our bird by its id
app.delete("/birds/:id", (req, res) => {
    const bird = getBird(birds, getBirdId(req.params.id));
    const birdIndex = birds.indexOf(bird);
    birds.splice(birdIndex, 1);
    res.send(bird);
  });

app.listen(8080, () => {
    console.log("Server is running on port", 8080)
});


