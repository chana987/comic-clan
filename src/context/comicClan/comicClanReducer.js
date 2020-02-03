import {
    SEARCH_BOOKS, GET_BOOK, CHANGE_CATEGORY, SET_LOADING, GET_GROUPS, TOGGLE_MENU
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case SEARCH_BOOKS:
            return {
                ...state,
                books: action.payload,
                loading: false
            }
        case CHANGE_CATEGORY: 
            return {
                ...state,
                category: action.payload,
                loading: false
            }
        case GET_BOOK: 
            return {
                ...state,
                currentBook: action.payload,
                loading: false
            }
        case GET_GROUPS: 
            return {
                ...state,
                groups: action.payload,
                loading: false
            }
        case TOGGLE_MENU: 
            return {
                ...state,
                menu: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}