import { actionSwitch } from "../reducer";

export const addToFavorite = (movie) => {
    return {
        type: actionSwitch.ADD_FAVORITE,
        data: movie
    }
}

export const removeFromFavorite = (movie_id) => {
    return {
        type: actionSwitch.REMOVE_FAVORITE,
        data: movie_id
    }
}

export const clearFavorite = (movie) => {
    return {
        type: actionSwitch.CLEAR_FAVORITE,
        data: movie
    }
}
