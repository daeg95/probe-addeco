# Addeco Backend
## Development server
Install dependencies with npm install
Run `npm run dev` for a dev server. 

## Request

You can probe locally with the following request
    Get the latest movies:
        http://localhost:3000/movie/latest
    Get the Top rated movies:
        http://localhost:3000/movie/top_rated
    Get the most popular movies:
        http://localhost:3000/movie/popular
    Get the movie details:
        http://localhost:3000/movie/{movie_id}
    Filter a movies by name:
        http://localhost:3000/search/movie?query=Title_movie
    
Also, this app is on Heroku that is a platform as a service (PaaS). So you can make the request  the following ways:
    Get the latest movies:
        https://whispering-springs-44329.herokuapp.com/movie/latest
    Get the Top rated movies:
        https://whispering-springs-44329.herokuapp.com/movie/top_rated
    Get the most popular movies:
        https://whispering-springs-44329.herokuapp.com/movie/popular
    Get the movie details:
        https://whispering-springs-44329.herokuapp.com/movie/{movie_id}
    Filter a movies by name:
        https://whispering-springs-44329.herokuapp.com/search/movie?query=Title_movie




