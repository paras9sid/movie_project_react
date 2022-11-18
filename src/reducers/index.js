export default function movies(state = [],action) { // will print in console - state = empty array [] when store.getState() mehtod called in index.js
    if(action.type === 'ADD_MOVIES'){
        return action.movies;
    }
    return state;
}

