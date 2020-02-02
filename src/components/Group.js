import React, { useContext } from 'react'
import Book from './Book'
import ComicClanContext from '../context/comicClan/comicClanContext'
import PropTypes from 'prop-types'
import { StyledGrid } from './styledComponents/StyledLayout'
import { BigTitle } from './styledComponents/StyledText'

const Group = ({ group, groupName }) => {
    const comicClanContext = useContext(ComicClanContext)

    const { category, books, loading } = comicClanContext

    return (
        <div>
            <BigTitle>{groupName}</BigTitle>
            <StyledGrid>
            {books.map((book, i) => group === "random"
                ? <Book book={book} key={i} />
                : book[category] === group && <Book book={book} key={i} />)}
            </StyledGrid>
        </div>
    )
}

Group.propTypes = {
    group: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    groupName: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Group