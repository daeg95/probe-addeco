const _constants = require("../constants/responses");
const url = 'https://api.themoviedb.org/3';
const  axios  = require('axios');


 module.exports.getLatestMovies = (req, res) => {
    try {
      
        console.log(".........................................",req.path)
 
        const key = "?api_key="+req.headers.api_key


        return axios.get(url+req.path+key)
        .then(response => {
            console.log("3", response)
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