import React, { useContext } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ComicClanContext from '../context/comicClan/comicClanContext'
import { Image } from './styledComponents/StyledImage'
import { Title, LabelText, NameText } from './styledComponents/StyledText'

const Book = ({ book }) => {
    const comicClanContext = useContext(ComicClanContext)

    const { getBook, currentBook } = comicClanContext

    const changeCurrentBook = () => {
        getBook(book)
        console.log(currentBook)
    }

    return (
        <Link to={`/book/${book.name}`} onClick={changeCurrentBook} style={{ textDecoration: 'none' }}>
            <Image image={book.image} />
            <div>
                <Title>{book.name}</Title>
            </div>
            <div>
                <LabelText>Owned By </LabelText>
                <NameText>{book.owner}</NameText>
            </div>
        </Link>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired
}

export default Book