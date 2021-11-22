const _constants = require("../constants/constants");
const  axios  = require('axios');


 module.exports.getLatestMovies = (req, res) => {
    try {
        return axios.get(_constants.url+req.path+_constants.api_key)
        .then(response => {
             return res.send(response.data)       
                }
            )
            .catch(error => 
                console.log(error)
            )
    } catch (error) {
      console.log("Error in getLatestMovies user controller: ", error);
    }
  };

  module.exports.getTopRatedMovies = (req, res) => {
    try {
        return axios.get(_constants.url+req.path+_constants.api_key)
        .then(response => {
             return res.send(response.data)       
                }
            )
            .catch(error => 
                console.log(error)
            )
    } catch (error) {
      console.log("Error in getLatestMovies user controller: ", error);
    }
  };

  module.exports.getPopularMovies = (req, res) => {
    try {
        return axios.get(_constants.url+req.path+_constants.api_key)
        .then(response => {
             return res.send(response.data)       
                }
            )
            .catch(error => 
                console.log(error)
            )
    } catch (error) {
      console.log("Error in getLatestMovies user controller: ", error);
    }
  };

  module.exports.getByNameMovies = (req, res) => {
    try {
        return axios.get(_constants.url+req.path+_constants.api_key+"&query="+req.query.query.trim().replace(/\s+/g, ' ').split(" ").join(" + "))
        .then(response => {
             return res.send(response.data)       
                }
            )
            .catch(error => 
                console.log(error)
            )
    } catch (error) {
      console.log("Error in getLatestMovies user controller: ", error);
    }
  };

  module.exports.getDetailMovies = (req, res) => {
    try {

        return axios.get(_constants.url+req.path+_constants.api_key)
        .then(response => {
             return res.send(response.data)       
                }
            )
            .catch(error => 
                console.log(error)
            )
    } catch (error) {
      console.log("Error in getLatestMovies user controller: ", error);
    }
  };