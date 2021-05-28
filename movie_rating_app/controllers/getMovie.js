const Movie = require('../models/Movie.js');

module.exports.getMovie = async (req, res)=>{
  const retrievedMovie = await Movie.findById(req.params.id, 'name description release_year genre', (error, movie)=>{
    if (error) {
      console.log(error);
    }
    res.send(movie);
  });
};
