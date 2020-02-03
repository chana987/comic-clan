import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Image } from './styledComponents/StyledImage'
import { Title, LabelText, NameText } from './styledComponents/StyledText'
import ComicClanContext from '../context/comicClan/comicClanContext'

const Book = ({ book }) => {
    const comicClanContext = useContext(ComicClanContext)

    const { name, image, owner } = book

    const changeCurrentBook = () => {
        comicClanContext.getBook(name)
    }

    return (
        <Link to={`/book/${name}`}
            style={{ textDecoration: 'none' }}
            onClick={changeCurrentBook}>
            <Image src={image} alt="" />
            <div>
                <Title>{name}</Title>
            </div>
            <div>
                <LabelText>Owned By </LabelText>
                <NameText>{owner}</NameText>
            </div>
        </Link>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired
}

export default Book