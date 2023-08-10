import videogames from '../db/videogames.json'

export const getVideogamesAPI = async () => {
    return {
        message: "Ok",
        data: videogames,
        errors: []
    }
}

export const getVideogameAPI = async (id) => {
    let videogame = videogames.find(videogame => videogame.id == id)

    return {
        message: "Ok",
        data: videogame,
        errors: []
    }
}
  