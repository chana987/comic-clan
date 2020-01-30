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
        currentBook: {
            name: "The True Story of Captain Girl #620",
            writer: "Analiese Mandy",
            artist: "Lola Gerrilee",
            publication: "Convincing Co.",
            owner: "Grayasp",
            rating: 4,
            image: "https://comicclan.vett.io/images/image-placeholder2.svg",
            summary: "Eiusmod ad sit veniam sunt minim consectetur commodo ut incididunt nostrud qui incididunt nulla excepteur cillum. Id commodo voluptate commodo nulla et cillum id officia fugiat ut sunt in anim aute dolore nostrud elit. Proident veniam aliquip labore occaecat esse nulla enim ut enim officia laborum dolor ipsum ex exercitation nulla. Velit minim et elit fugiat dolore ipsum culpa sit laboris. Officia ipsum veniam do sint quis in magna eu. Voluptate pariatur ullamco reprehenderit irure sint sint irure do veniam pariatur in est voluptate ullamco ullamco.↵Fugiat aliquip non nisi dolore deserunt id dolore. Officia velit cillum consequat do adipisicing id cupidatat nostrud elit velit ad ipsum adipisicing ea nisi. Magna id elit aliquip tempor enim deserunt sit elit sit deserunt sunt reprehenderit nisi aute ea sunt laboris sint. Sunt duis anim sit in ipsum aliquip enim labore enim sint commodo do et do sit est est sit ipsum. Et mollit esse velit irure aliquip id dolore duis aliquip labore aliqua.",
            year: 2013
        },
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
    const getBook = (name) => {
        setLoading()
        let book = state.books.find(b => b.name.includes(name))
        console.log(book)
        console.log(state.books)
        console.log(name)

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