import { GET_MOVIES, GET_MOVIE } from './actions'

const initialState = {
    movies: [],
    movie: {},
    movieLoaded: false, 
    moviesLoaded: false,
}

export default function(state = initialState, action){
    const { type, data } = action;

    switch(type){
        case GET_MOVIES:
            return {
                ...state,
                movies: data,
                moviesLoaded:true,
            }
        case GET_MOVIE:
            return {
                ...state,
                movie:data,
                movieLoaded: true,
            }
        default:
            return state;

    }
}