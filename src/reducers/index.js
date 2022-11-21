import { ADD_MOVIES , ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../actions/index';

const initialMovisState = {
    list: [],
    favourites: []
}
export default function movies(state = initialMovisState,action) { // will print in console - state = empty array [] when store.getState() mehtod called in index.js
    // if(action.type === ADD_MOVIES){
    //     // return action.movies; will throw error aftaer adding initialMoviesState
    //     //to avoid error
    //     return {
    //         ...state,
    //         list:action.movies
    //     }
    // }
    // return state;

    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list: action.movies
            }
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites:[action.movie , ...state.favourites]
            }
            case REMOVE_FROM_FAVOURITES:
                const filteredArray = state.favourites.filter(
                    movie => movie.Title !== action.movie.Title
                );
                return {
                    ...state,
                    favourites: filteredArray
                }
            default:
                return state;
    }
}

// // store string comparison in variable and moving this var into another file actions index.js
// const ADD_MOVIES = 'ADD_MOVIES';

