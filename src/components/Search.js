import React, { useContext, useState } from 'react'
import ComicClanContext from '../context/comicClan/comicClanContext'
import AlertContext from '../context/alert/alertContext'

const Search = () => {
    const comicClanContext = useContext(ComicClanContext)
    const alertContext = useContext(AlertContext)

    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please enter something', 'light')
        } else {
            comicClanContext.searchBooks(text);
            setText('')
        }
    }

    const onChange = (e) => setText(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text"
                    name="text"
                    placeholder="Search by book name"
                    value={text}
                    onChange={onChange} />
                <input type="submit"
                    value="Search"
                    className="" />
            </form>
        </div>
    )
}

export default Search