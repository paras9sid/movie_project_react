// {
//     type: 'ADD_MOVIES'
//     movies: [m1,m2,m3]
// }

// {
//     type: 'INCREASE_COUNT'
// }
// // {
// //     type: 'DECREASE_COUNT'
// // }


// store string comparison in variable and moving this var into another file actions index.js
// below const are called action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';


//below functions are called action creators
export function addMovies(movies){
    return {
        type : ADD_MOVIES,
        movies
    }
}

export function addFavourite(movie){
    return {
        type : ADD_FAVOURITE,
        movie
    }
}


export function removeFromFavourites(movie){
    return {
        type : REMOVE_FROM_FAVOURITES,
        movie
    };
}