import { ADD_MOVIES } from '../actions/index';

export default function movies(state = [],action) { // will print in console - state = empty array [] when store.getState() mehtod called in index.js
    if(action.type === ADD_MOVIES){
        return action.movies;
    }
    return state;
}

// // store string comparison in variable and moving this var into another file actions index.js
// const ADD_MOVIES = 'ADD_MOVIES';

