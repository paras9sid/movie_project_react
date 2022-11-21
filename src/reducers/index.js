import { ADD_MOVIES , ADD_FAVOURITE } from '../actions/index';

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
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites:[action.movie , ...state.favourites]
            }
            default:
                return state;
    }
}

// // store string comparison in variable and moving this var into another file actions index.js
// const ADD_MOVIES = 'ADD_MOVIES';

