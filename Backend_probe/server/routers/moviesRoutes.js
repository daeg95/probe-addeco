// Movies routes 
const express = require('express')
const movieRouter = new express.Router()
const moviesController = require('../controllers/moviesController');

//Obtain the Latest Movies
movieRouter.get('/movie/latest', moviesController.getLatestMovies)

//Obtain the Top ratest Movies
movieRouter.get('/movie/top_rated', moviesController.getTopRatedMovies)

//Obtain the Most Popular Movies
movieRouter.get('/movie/popular', moviesController.getTopRatedMovies)

//Obtain By name the  Movie
movieRouter.get('/search/movie', moviesController.getByNameMovies)

//Obtain The Movies Datail 
movieRouter.get('/movie/:id', moviesController.getDetailMovies)

module.exports = movieRouter