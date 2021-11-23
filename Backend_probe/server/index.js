const express = require('express');
const movieRouter = require('./routers/moviesRoutes');
var cors = require('cors')


const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

app.use(movieRouter)
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

