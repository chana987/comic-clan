import React, { useReducer } from 'react'
import axios from 'axios'
import ComicClanContext from './comicClanContext'
import ComicClanReducer from './comicClanReducer'
import {
    SEARCH_BOOKS, GET_BOOK, CHANGE_CATEGORY, SET_LOADING, GET_GROUPS
} from '../types'

const ComicClanState = props => {
    const initialState = {
        books: [],
        currentBook: null,
        category: 'year',
        groups: [],
        loading: false
    }

    const [state, dispatch] = useReducer(ComicClanReducer, initialState)

    // search books
    const searchBooks = async (text) => {
        setLoading()
        let url = text ? `https://comicclan.vett.io/comics?q=${
            text}` : `https://comicclan.vett.io/comics`
        
        const res = await axios.get(url, { headers: { Authorization: "Bearer ComicClanVettIO2019" } })
            console.log(res)
            getGroups(state.category, res.data)
            
            dispatch({
                type: SEARCH_BOOKS,
                payload: res.data
            })
    }

    // change category
    const changeCategory = async (category) => {
        setLoading()
        getGroups(category, state.books)
        
        dispatch({
            type: CHANGE_CATEGORY,
            payload: category
        })
    }

    // get groups
    const getGroups = (category, books) => {
        const groups = category === "random" ? []
            : [...new Set(books.map(b => b[category]))]
                .sort(category === "year" ? function (a, b) { return b - a } : undefined)

        dispatch({
            type: GET_GROUPS,
            payload: groups
        })
    }

    // get book
    const getBook = async (name) => {
        setLoading()
        let book = state.books.filter(b => b.name === name)

        dispatch({
            type: GET_BOOK,
            payload: book
        })
    }

    // set loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    return <ComicClanContext.Provider
        value={{
            books: state.books,
            currentBook: state.currentBook,
            category: state.category,
            groups: state.groups,
            loading: state.loading,
            searchBooks,
            changeCategory,
            getBook
        }}>
        {props.children}
    </ComicClanContext.Provider>
}

export default ComicClanState