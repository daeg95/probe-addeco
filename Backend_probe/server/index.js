const express = require('express');
const movieRouter = require('./routers/moviesRoutes');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json())

app.use(movieRouter)
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

