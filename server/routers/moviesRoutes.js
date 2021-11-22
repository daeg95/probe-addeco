const  axios  = require('axios');
const express = require('express')
const movieRouter = new express.Router()
const moviesController = require('../controllers/moviesController');




movieRouter.get('/movie/latest', moviesController.getLatestMovies

        // const key = "?api_key="+req.headers.api_key
        // return axios.get(url+req.body.complement+key)
        // .then(response => {
        //     console.log("3", response.data.title)
        //     return res.send(response.data)    
        
        // }
        //     )
        // .catch(error => error)
    
)

movieRouter.get('/movie/top_rated', (req, res) => {
        
    console.log("3",req.path)
    console.log("4", req.headers)
        // const key = "?api_key="+req.headers.api_key
        // return axios.get(url+req.body.complement+key)
        // .then(response => {
        //     console.log("3", response.data.title)
        //     return res.send(response.data)    
        
        // }
        //     )
        // .catch(error => error)
    
})

movieRouter.get('/movie/popular', (req, res) => {
        
    console.log("5",req.path)
    console.log("6", req.headers)
        // const key = "?api_key="+req.headers.api_key
        // return axios.get(url+req.body.complement+key)
        // .then(response => {
        //     console.log("3", response.data.title)
        //     return res.send(response.data)    
        
        // }
        //     )
        // .catch(error => error)
    
})

movieRouter.get('/movie/{movie_id}', (req, res) => {
        
    console.log("9",req.path)
    console.log("10", req.headers)
        // const key = "?api_key="+req.headers.api_key
        // return axios.get(url+req.body.complement+key)
        // .then(response => {
        //     console.log("3", response.data.title)
        //     return res.send(response.data)    
        
        // }
        //     )
        // .catch(error => error)
    
})



module.exports = movieRouter