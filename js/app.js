(function () {
    angular.module('movieApp', []);
    angular.module('movieApp').factory('movieFactory', function () {
        return {
            getMovieInfo: getMovieInfo,
            getRows: getRows
        };

        function getRows() {
            var rows = [];
            var alphabets = ['A', 'B', 'C', 'D', 'E', 'F'];
            for (var i = 0; i < alphabets.length; i++) {
                var rowName = alphabets[i];
                var rowSeats = [];
                for (var j = 0; j < 10; j++) {
                    var seatName = (j + 1).toString().length == 1 ? '0' + (j + 1).toString() : (j + 1).toString();
                    rowSeats.push({
                        id: j + 1,
                        row: rowName,
                        name: seatName,
                        row_class: 'not_selected',
                        isSelected: false
                    });
                }
                rows.push({
                    id: i + 1,
                    name: rowName,
                    seats: rowSeats
                });
            }
            return rows;
        }

        function getMovieInfo() {
            return { "Title": "Ocean's 8", "Year": "2018", "Rated": "PG-13", "Released": "08 Jun 2018", "Runtime": "N/A", "Genre": "Action, Comedy, Crime", "Director": "Gary Ross", "Writer": "Gary Ross (screenplay), Olivia Milch (screenplay), Gary Ross (story), George Clayton Johnson (characters), Jack Golden Russell (characters)", "Actors": "Olivia Munn, Cate Blanchett, Dakota Fanning, Matt Damon", "Plot": "Debbie Ocean gathers a crew to attempt an impossible heist at New York City's yearly Met Gala.", "Language": "English", "Country": "USA", "Awards": "N/A", "Poster": "https://ia.media-imdb.com/images/M/MV5BMjAyNDEyMzc4Ml5BMl5BanBnXkFtZTgwMjEzNjM0NTM@._V1_SX300.jpg", "Ratings": [{ "Source": "Rotten Tomatoes", "Value": "68%" }], "Metascore": "N/A", "imdbRating": "N/A", "imdbVotes": "N/A", "imdbID": "tt5164214", "Type": "movie", "DVD": "N/A", "BoxOffice": "N/A", "Production": "Warner Bros. Pictures", "Website": "http://www.oceans8movie.com/", "Response": "True" };
        }
    }).controller('movieController', ['$scope', 'movieFactory', function ($scope, movieFactory) {
        $scope.movie = movieFactory.getMovieInfo();
        $scope.rows = movieFactory.getRows();
        $scope.selectedSeats = [];
        $scope.selectedSeat = function (seat) {
            angular.forEach($scope.rows, function (row) {
                if (row.name === seat.row) {
                    angular.forEach(row.seats, function (row_seat) {
                        if (row_seat.name === seat.name) {
                            row_seat.isSelected = !row_seat.isSelected;
                            row_seat.row_class = row_seat.isSelected ? 'row_selected' : 'not_selected';
                            if (row_seat.isSelected) {
                                $scope.selectedSeats.push(row_seat);
                            }
                        }
                    })
                }
            })
        }
    }])
})();
