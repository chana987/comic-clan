import React, { useContext } from 'react'
import Book from './Book'
import ComicClanContext from '../context/comicClan/comicClanContext'
import styled from 'styled-components'

const Grid = styled.div`
    margin: 10px auto 40px auto;
    padding-bottom: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 50px;
    border-bottom: 1px solid #535353;
`

const GroupName = styled.p`
    color: #AAAAAA;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
`

const Group = ({ group, groupName }) => {
    const comicClanContext = useContext(ComicClanContext)

    const { category, books, loading } = comicClanContext

    return (
        <div>
            <GroupName>{groupName}</GroupName>
            <Grid>
            {books.map((book, i) => group === "random"
                ? <Book book={book} key={i} />
                : book[category] === group && <Book book={book} key={i} />)}
            </Grid>
        </div>
    )
}

export default Group