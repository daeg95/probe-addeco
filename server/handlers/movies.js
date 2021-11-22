
// // const url = 'https://api.themoviedb.org/3/movie/';
// // const axios = require('axios')



// // const lastestMovies = (req, res) => {

// //     axios.get(url+req.body.complement+req.headers.api_key)
// //     .then(response => {
// //         console.log(response)
// //     })
// //     .catch(error => {
// //         console.log(error)
// //     })

// //     return res
// // }

// // module.exports = lastestMovies;


// module.exports.movies = async (event) => {
//     console.log("Event received: ", JSON.stringify(event)); // Mantain this log, is very usefull for development
  
//     try {
      
//         switch (event.httpMethod) {
  
//           //GET method get the items filtered, order and page and  get by ID  
//           case "GET":

//           console.log("entro-----")
//             // if (event.pathParameters && "user_id" in event.pathParameters && event.pathParameters.user_id) { 
//             //   responseLambda.body = await User.getUser(event.pathParameters.user_id);
//             //   responseLambda.statusCode = 200;
//             // } else if (event.queryStringParameters) {
  
//             //   if('user_id' in event.queryStringParameters && event.queryStringParameters.user_id) {
//             //     responseLambda.body = await User.getUsersByUserId(event.queryStringParameters.user_id, event.queryStringParameters.filterby, event.queryStringParameters.orderBy, parseInt(event.queryStringParameters.page), parseInt(event.queryStringParameters.size))
//             //     responseLambda.statusCode = 200;
//             //   } else {
//             //     // If the user wants filter, order and paginate
//             //     responseLambda.body  = await User.filterUsers(
//             //       'filterby' in event.queryStringParameters && event.queryStringParameters.filterby ? event.queryStringParameters.filterby : null, 
//             //       'orderBy' in event.queryStringParameters && event.queryStringParameters.orderBy ? event.queryStringParameters.orderBy : null, 
//             //       'page' in event.queryStringParameters && event.queryStringParameters.page ? parseInt(event.queryStringParameters.page) : null, 
//             //       'size' in event.queryStringParameters && event.queryStringParameters.size ? parseInt(event.queryStringParameters.size) : null
//             //     );
//             //     responseLambda.statusCode = 200;
  
  
//             //     // if (event.queryStringParameters.filterby && event.queryStringParameters.orderBy && event.queryStringParameters.page && event.queryStringParameters.size) {
//             //     //   responseLambda.body  = await User.filterUsers( event.queryStringParameters.filterby, event.queryStringParameters.orderBy, parseInt(event.queryStringParameters.page), parseInt(event.queryStringParameters.size));
//             //     //   responseLambda.statusCode = 200;
  
//             //     // } else if ( event.queryStringParameters.filterby && event.queryStringParameters.page && event.queryStringParameters.size) {
//             //     //   //If the user wants filter, and paginate
//             //     //   responseLambda.body = await User.filterUsers(event.queryStringParameters.filterby, null, parseInt(event.queryStringParameters.page), parseInt(event.queryStringParameters.size));
//             //     //   responseLambda.statusCode = 200;
//             //     // } else if ( event.queryStringParameters.orderBy && event.queryStringParameters.page && event.queryStringParameters.size ) {
//             //     //   //If the user wants orderBy, and paginate
//             //     //   responseLambda.body = await User.filterUsers(null, event.queryStringParameters.orderBy, parseInt(event.queryStringParameters.page), parseInt(event.queryStringParameters.size));
//             //     //   responseLambda.statusCode = 200;
//             //     // } else if (event.queryStringParameters.page && event.queryStringParameters.size) {
//             //     //   //If the user wants  paginate all items
//             //     //   responseLambda.body = await User.filterUsers(null, null, parseInt(event.queryStringParameters.page), parseInt(event.queryStringParameters.size));
//             //     //   responseLambda.statusCode = 200;
//             //     // }
//             //   }
//             // } else {
  
//             //   //In case the query string Parametersis not sent
//             //   return {
//             //     statusCode: _constants.badRequest,
//             //     body: _constants.messageBadRequest,
//             //     headers: {
//             //       "Access-Control-Allow-Origin": "*",
//             //       "Access-Control-Allow-Credentials": true,
//             //     },
//             //   };
//             // }
//           break;
  
//         }
      
//     } catch (error) {
//       console.log("Error Handler Movie");
//       console.error(error);
//       responseLambda.body = "message" in error ? error.message : "The request could no be processed";
//       responseLambda.statusCode = "statusCode" in error ? error.statusCode : "501";
//     }
//     finally {
//       return responseLambda
//     }
//   };
  