const _constants = require("../constants/responses");


 module.exports.getLatestMovies = (req) => {
    try {

        console.log("hola",req)
        // const key = "?api_key="+req.headers.api_key
        // return axios.get(url+req.body.complement+key)
        // .then(response => {
        //     console.log("3", response.data.title)
        //     return res.send(response.data)    
        
        // }
        //     )

     
  
    } catch (error) {
      console.log("Error in getLatestMovies user controller: ", error);
    }
  };