import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ComicClanContext from '../context/comicClan/comicClanContext'
import Group from './Group'
import leftArrow from '../assets/back.png'
import starGold from '../assets/star-gold.png'
import starGrey from '../assets/star-grey.png'
import { BigImage } from './styledComponents/StyledImage'
import { BookDiv, StarGrid } from './styledComponents/StyledLayout'
import { LinkText, BigTitle, LabelText, NameText, PText } from './styledComponents/StyledText'

const BookDetail = (props) => {
    const comicClanContext = useContext(ComicClanContext)
    
    const { currentBook, category, loading } = comicClanContext


    const { name, image, year, rating, writer, artist, publication, owner, summary } = currentBook

    return (
        <div>
            <Link to={`/catalog/${category}`} >
                <img src={leftArrow} />
                <LinkText>Back to collection</LinkText>
            </Link>
            <BookDiv>
                <BigImage src={image} />
                <div>
                    <div>
                        <BigTitle>{name} ({year})</BigTitle>
                        <StarGrid>
                            <img src={rating > 0 ? starGold : starGrey} />
                            <img src={rating > 1 ? starGold : starGrey} />
                            <img src={rating > 2 ? starGold : starGrey} />
                            <img src={rating > 3 ? starGold : starGrey} />
                            <img src={rating > 4 ? starGold : starGrey} />
                        </StarGrid>
                    </div>
                    <div>
                        <LabelText>Writer: </LabelText>
                        <NameText>{writer}</NameText>
                    </div>
                    <div>
                        <LabelText>Artist: </LabelText>
                        <NameText>{artist}</NameText>
                    </div>
                    <div>
                        <LabelText>Publication: </LabelText>
                        <NameText>{publication}</NameText>
                    </div>
                    <div>
                        <LabelText>Owner: </LabelText>
                        <NameText>{owner}</NameText>
                    </div>
                    <PText>{summary}</PText>
                </div>
            </BookDiv>
            <div>
                <Group group={"random"} groupName={"Other Random Books"} />
            </div>
        </div>
    )
}

export default BookDetail