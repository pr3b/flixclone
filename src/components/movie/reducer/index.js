const initialState = {
    favorite: [],
    search: 'robin-hood',
}

export const actionSwitch = {
    ADD_FAVORITE: 'ADD_FAVORITE',
    REMOVE_FAVORITE: 'REMOVE_FAVORITE',
    CLEAR_FAVORITE: 'CLEAR_FAVORITE',
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case actionSwitch.ADD_FAVORITE: {
            console.log(action, 'reducer');
            return {
                ...state,
                favorite: [...state.favorite, action.data]
            }
        }
        case actionSwitch.REMOVE_FAVORITE: {
            return {
                ...state,
                favorite: state.favorite.filter((movie) => movie.id !== action.data)
                
            }
        }
        case actionSwitch.CLEAR_FAVORITE: {
            return {
                ...state,
                favorite: [...state.favorite.slice(0, action.data)]
            }
        }
        default:
            return state
    }
}