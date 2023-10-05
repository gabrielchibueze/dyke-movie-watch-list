let searchResult
let movieListfromDB
const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')
const returnedMovieSearch = document.getElementById('return-movie-search')
const movieList = document.getElementsByClassName('.movie-list-fromDB')
const myWatchlist = document.getElementsByClassName('.watchlist')

searchBtn.addEventListener('click', getMovieResultFromOMDB)

const myMovieBtn = document.getElementById('mymovies')

async function getMovieResultFromOMDB(){
    searchResult = searchInput.value
    const response = await fetch(`http://www.omdbapi.com/?t=${searchResult}&apikey=70a0fdf`)
    const data = await response.json()
    
    movieListfromDB = `
    <div class="movie-section">
        <div class="section">
            <div>
                <img src="${data.Poster}" class="movie-profile-pic">
            </div>
            <div class="main-section">
                <div class="top-section">
                    <h2>${data.Title}</h2>
                    <p><i class="fa-solid fa-star"></i>${data.imdbRating}</p>
                </div>
                <div class="middle-section">
                    <p>${data.Runtime}</p>
                    <p>${data.Genre}</p>
                    <p class="add-watchlist" id="add-watchlist"><i class="fa-solid fa-plus"></i>Watchlist</p>
                </div>
                <div class="document bottom-section">
                    <p>${data.Plot}</p>
                </div>
                <div class="base-section">
                    <p>${data.Year}</p>
                </div>
            </div>
        </div>
    </div>
    `
    returnedMovieSearch.innerHTML = movieListfromDB
    const addWatchlist = document.getElementById('add-watchlist')

    addWatchlist.addEventListener('click', ()=>{
        let MyWatchList = JSON.parse(localStorage.getItem("moviesInStorage")) ||[]
        MyWatchList.push(data)
        localStorage.setItem("moviesInStorage", JSON.stringify(MyWatchList)) 
    })

}