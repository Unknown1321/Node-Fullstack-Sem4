const express = require("express");
const app = express();

let id = 0; // Our variable id which we uses for auto-incrementing the id's

// let currentId = 1; // Another way instead of line 4

app.use(express.json()); // Parses json from request bodies.

// Our birds object, which is empty at the start-up
const birds = [{id: 1, name: "Violet", maleRating: "10", femaleRating: "4"}];

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

  // Another way to create a bird, with prefix in front of currentId, it solve the issue of not getting the same id twice 
  // if you have some already existing data
  /* 
  app.post("/birds", (req, res) => {
    const birdToCreate = req.body;
    birdToCreate.id = ++currentId;
    birds.push(birdToCreate);
    res.send({data: birdToCreate});
  }); 
  */

  // Here we use our partially updates what we want in our bird object
app.patch("/birds/:id", (req, res) => {
    const bird = getBird(birds, getBirdId(req.params.id));
    if (req.body.name != null) bird.name = req.body.name;
    if (req.body.color != null) bird.maleRating = req.body.maleRating;
    if (req.body.color != null) bird.femaleRating = req.body.femaleRating;
    res.send(bird);
  });

  // Another way to patch/update
  /*
  app.patch("/birds/:id", (req, res) => {
    let foundIndex = birds.findIndex(bird => bird.id === Number(req.params.id));
    if (foundIndex === -1) {
      res.status(404).send({data: foundIndex, message: "No bird found with id ${req.params.id}"})
    } else {
      const foundBird = birds[foundIndex];
      const birdToUpdate = { ...foundBird, ...req.body, id: foundBird.id };
      birds[foundIndex] = birdToUpdate;
      res.send({ data: birdToUpdate });
    }
    
    res.send(bird);
  });
  
  */ 
  // Here we delete our bird by its id
app.delete("/birds/:id", (req, res) => {
    const bird = getBird(birds, getBirdId(req.params.id));
    const birdIndex = birds.indexOf(bird);
    birds.splice(birdIndex, 1);
    res.send(bird);
  });

  // Another way to delete our bird
  /* 
  app.delete("/birds/:id", (req, res) => {
    const foundIndex = birds.findIndex(bird => bird.id === Number(req.params.id));
    if (foundIndex === -1){
      res.status(404).send({data: foundIndex, message: "No bird found with id ${req.params.id}"})
    } else {
        const deletedBird = birds.splice(foundIndex, 1)[0];

        res.send({data: deletedBird});
    }
    res.send({data: foundIndex})
  });
  */

app.listen(8080, () => {
    console.log("Server is running on port", 8080)
});


