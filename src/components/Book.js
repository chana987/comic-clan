import React, { useContext } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ComicClanContext from '../context/comicClan/comicClanContext'
import { Image } from './styledComponents/StyledImage'
import { Title, LabelText, NameText } from './styledComponents/StyledText'

const Book = ({ book }) => {
    const comicClanContext = useContext(ComicClanContext)

    const { name, image, owner } = book

    return (
        <Link to={`/book/${name}`} style={{ textDecoration: 'none' }}>
            <Image image={image} />
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