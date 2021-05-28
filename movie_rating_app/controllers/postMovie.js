const Movie = require('../models/Movie.js');

module.exports.postMovie = async (req, res)=>{
  const newMovie = {
    name: req.body.name,
    description: req.body.description,
    release_year: req.body.release_year,
    genre: req.body.genre,
  };
  await Movie.create(newMovie, (error, movieItem)=>{
    console.log('movie item', movieItem);
    res.json(movieItem);
  })
}

/*
module.exports.controller = (app)=>{
  // add a new movie
  app.post('/movies', (req, res)=>{
    const newMovie = new MovieSchema({
      name: req.body.name,
      description: req.body.description,
      release_year: req.body.release_year,
      genre: req.body.genre,
    });
    newMovie.save((error, movie)=>{
      if (error) {
        console.log(error);
      }
      res.send(movie);
    });
  });
};
*/