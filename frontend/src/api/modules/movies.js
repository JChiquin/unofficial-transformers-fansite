import movies from '../db/movies.json'

export const getMoviesAPI = async () => {
    return {
        message: "Ok",
        data: movies,
        errors: []
    }
}

export const getMovieAPI = async (id) => {
    let movie = movies.find(movie => movie.id == id)

    return {
        message: "Ok",
        data: movie,
        errors: []
    }
}
  