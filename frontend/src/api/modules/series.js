import series from '../db/series.json'

export const getSeriesAPI = async () => {
    return {
        message: "Ok",
        data: series,
        errors: []
    }
}

export const getSerieAPI = async (id) => {
    let serie = series.find(serie => serie.id == id)

    return {
        message: "Ok",
        data: serie,
        errors: []
    }
}
  