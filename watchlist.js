document.addEventListener('DOMContentLoaded', () => {
    const movieItems = document.getElementById('return-movie-search')
    const myItems = JSON.parse(localStorage.getItem('moviesInStorage'))
    let list = ''

    myItems.forEach(movies => {
        list += `
        <div class="movie-section">
            <div class="section">
                <div>
                    <img src="${movies.Poster}" class="movie-profile-pic">
                </div>
                <div class="main-section">
                    <div class="top-section">
                        <h2>${movies.Title}</h2>
                        <p><i class="fa-solid fa-star"></i>${movies.imdbRating}</p>
                    </div>
                    <div class="middle-section">
                        <p>${movies.Runtime}</p>
                        <p>${movies.Genre}</p>
                        <p class="add-watchlist" data-movieid="${movies.imdbID}" id="remove-watchlist"><i class="fa-solid fa-minus"></i> Remove</p>
                    </div>
                    <div class="document bottom-section">
                        <p>${movies.Plot}</p>
                    </div>
                    <div class="base-section">
                        <p>${movies.Year}</p>
                    </div>
                </div>
            </div>
        </div>
        `

        movieItems.innerHTML = `
            <h1 class="watchList--heading">My Movie Watch List</h1>
            ${list}
        `
    });

    const removeWatchListItems = document.querySelectorAll('.add-watchlist')

    removeWatchListItems.forEach(item => {
        item.addEventListener('click', function(event) {
            const movieid = event.target.dataset.movieid
            if (movieid) {
                removeFromWatchList(movieid)
            }
        })
    })

    function removeFromWatchList(newId) {
        let myItems = JSON.parse(localStorage.getItem('moviesInStorage'))
        myItems = myItems.filter(item => item.imdbID !== newId)
        localStorage.setItem('moviesInStorage', JSON.stringify(myItems))
    }
})
