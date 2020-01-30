import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ComicClanContext from '../context/comicClan/comicClanContext'
import Group from './Group'
import styled from 'styled-components'
import leftArrow from '../assets/back.png'
import starGold from '../assets/star-gold.png'
import starGrey from '../assets/star-grey.png'
import { BigImage } from './styledComponents/StyledImage'
import { LinkText, BigTitle, LabelText, NameText, PText } from './styledComponents/StyledText'

const BookDiv = styled.div`
    display: grid;
    grid-template-columns: 30% 1fr;
    border-bottom: 1px solid #535353;
    padding: 40px 0;
`

const BookDetail = ({ match }) => {
    const comicClanContext = useContext(ComicClanContext)

    const { currentBook, loading } = comicClanContext
    const { name, image, year, rating } = currentBook

    return (
        <div>
            <Link to="/catalog" >
                <img src={leftArrow} />
                <LinkText>Back to collection</LinkText>
            </Link>
            <BookDiv>
                <BigImage image={image} />
                <div>
                    <div>
                        <BigTitle>{name} ({year})</BigTitle>
                        <img src={rating > 0 ? starGold : starGrey} />
                        <img src={rating > 1 ? starGold : starGrey} />
                        <img src={rating > 2 ? starGold : starGrey} />
                        <img src={rating > 3 ? starGold : starGrey} />
                        <img src={rating > 4 ? starGold : starGrey} />
                    </div>
                </div>
            </BookDiv>
            <div>
                <Group group={"random"} groupName={"Other Random Books"} />
            </div>
        </div>
    )
}

export default BookDetail