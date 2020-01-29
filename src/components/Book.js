import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Image = styled.img`
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 150px;
    height: 220px;
    border-radius: 3px;
    display: block;
    margin-bottom: 10px;
`

const Title = styled.span`
    color: #CCCCCC;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: ${props => props.size}px;
    line-height: ${props => props.height}px;
    display: inline-block;
    max-width: 170px;
`

const SemiTitle = styled(Title)`
    color: #999999;
    font-weight: 500;
    padding-right: 5px;
`

const Book = ({ book }) => {
    return (
        <Link to={`/book/${book.name}`} style={{ textDecoration: 'none' }}>
            <Image image={book.image} />
            <div>
                <Title weight="bold" size="14" height="20">{book.name}</Title>
            </div>
            <div>
                <SemiTitle weight="bold" size="11" height="9">Owned By </SemiTitle>
                <Title weight="bold" size="11" height="9">{book.owner}</Title>
            </div>
        </Link>
    )
}

export default Book