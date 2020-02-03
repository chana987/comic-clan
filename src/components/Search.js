import React, { useContext, useState } from 'react'
import ComicClanContext from '../context/comicClan/comicClanContext'
import { SearchForm, SearchInput, SearchButton } from './styledComponents/StyledSearch'
import SearchIcon from '../assets/search.png'

const Search = () => {
    const comicClanContext = useContext(ComicClanContext)

    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        comicClanContext.searchBooks(text);
        setText('')
    }

    const onChange = (e) => setText(e.target.value);

    return (
        <SearchForm onSubmit={onSubmit}
            className="form">
            <SearchButton type="submit">
                <img src={SearchIcon} alt="" style={{ height: '1.5rem' }} />
            </SearchButton>
            <SearchInput type="text"
                name="text"
                placeholder="Search by book name"
                value={text}
                onChange={onChange}
                autoComplete="off" />
        </SearchForm>
    )
}

export default Search