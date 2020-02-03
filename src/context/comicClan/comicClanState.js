import React, { useReducer } from 'react'
import axios from 'axios'
import ComicClanContext from './comicClanContext'
import ComicClanReducer from './comicClanReducer'
import {
    SEARCH_BOOKS, GET_BOOK, CHANGE_CATEGORY, SET_LOADING, GET_GROUPS, TOGGLE_MENU
} from '../types'

const ComicClanState = props => {
    const initialState = {
        books: [],
        currentBook: {},
        category: 'year',
        groups: [],
        loading: false,
        menu: false
    }

    const [state, dispatch] = useReducer(ComicClanReducer, initialState)

    const searchBooks = async (text) => {
        setLoading()
        let url = text ? `https://comicclan.vett.io/comics?q=${
            text}` : `https://comicclan.vett.io/comics`

        const res = await axios.get(url, { headers: { Authorization: "Bearer ComicClanVettIO2019" } })

        let homePage = window.location.href.includes("http://localhost:3000/catalog/")
        let category = homePage ? window.location.href.replace("http://localhost:3000/catalog/", "") : 'year'
      
        changeCategory(category)
        getGroups(category, res.data)

        dispatch({
            type: SEARCH_BOOKS,
            payload: res.data
        })
    }

    const changeCategory = async (category) => {
        setLoading()

        dispatch({
            type: CHANGE_CATEGORY,
            payload: category
        })
    }

    const getGroups = (category, books) => {
        const groups = category === "random" ? []
            : [...new Set(books.map(b => b[category]))]
                .sort(category === "year" ? function (a, b) { return b - a } : undefined)

        dispatch({
            type: GET_GROUPS,
            payload: groups
        })
    }

    const getBook = (name) => {
        setLoading()
        let book = state.books.find(b => b.name.includes(name))
        dispatch({
            type: GET_BOOK,
            payload: book
        })
    }

    const toggleMenu = () => {
        setLoading()
        let menu = !state.menu
        dispatch({
            type: TOGGLE_MENU,
            payload: menu
        })
    }

    const setLoading = () => dispatch({ type: SET_LOADING })

    return <ComicClanContext.Provider
        value={{
            books: state.books,
            currentBook: state.currentBook,
            category: state.category,
            groups: state.groups,
            loading: state.loading,
            menu: state.menu,
            searchBooks,
            changeCategory,
            getBook,
            getGroups,
            toggleMenu
        }}>
        {props.children}
    </ComicClanContext.Provider>
}

export default ComicClanState