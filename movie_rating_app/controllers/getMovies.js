const Movie = require('../models/Movie.js');

module.exports.getMovies = async (req, res)=>{
  const retrievedMovies = await Movie.find({}, 'name description release_year genre', (error, movies)=>{
    if (error) {
      console.log(error);
    }
    res.json({movies});
  });
};
