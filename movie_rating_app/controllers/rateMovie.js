const Movie = require('../models/Movie.js');
const Rating = require('../models/Rating')

module.exports.getMovies = async (req, res)=>{
  const rating = new Rating({
    movie_id: req.params.id,
    user_id: req.body.user_id,
    rate: req.body.rate,
  })

  rating.save(function(error, rating){
    if(error){
      console.log(error)
    }
    res.send({
      movie_id: rating.movie_id,
      user_id: rating.user_id,
      rate: rating.rate,
    });
  });
};
