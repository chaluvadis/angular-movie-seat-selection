angular.module("movieApp").factory('movieFactory', function () {
    return {
        getMovieInfo: getMovieInfo
    };

    function getMovieInfo() {
        return { "Title": "Ocean's 8", "Year": "2018", "Rated": "PG-13", "Released": "08 Jun 2018", "Runtime": "N/A", "Genre": "Action, Comedy, Crime", "Director": "Gary Ross", "Writer": "Gary Ross (screenplay), Olivia Milch (screenplay), Gary Ross (story), George Clayton Johnson (characters), Jack Golden Russell (characters)", "Actors": "Olivia Munn, Cate Blanchett, Dakota Fanning, Matt Damon", "Plot": "Debbie Ocean gathers a crew to attempt an impossible heist at New York City's yearly Met Gala.", "Language": "English", "Country": "USA", "Awards": "N/A", "Poster": "https://ia.media-imdb.com/images/M/MV5BMjAyNDEyMzc4Ml5BMl5BanBnXkFtZTgwMjEzNjM0NTM@._V1_SX300.jpg", "Ratings": [{ "Source": "Rotten Tomatoes", "Value": "68%" }], "Metascore": "N/A", "imdbRating": "N/A", "imdbVotes": "N/A", "imdbID": "tt5164214", "Type": "movie", "DVD": "N/A", "BoxOffice": "N/A", "Production": "Warner Bros. Pictures", "Website": "http://www.oceans8movie.com/", "Response": "True" };
    }
})