import comics from '../db/comics.json'

export const getComicsAPI = async () => {
    return {
        message: "Ok",
        data: comics,
        errors: []
    }
}

export const getComicAPI = async (id) => {
    let comic = comics.find(comic => comic.id == id)

    return {
        message: "Ok",
        data: comic,
        errors: []
    }
}
  