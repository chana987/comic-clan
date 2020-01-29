import React, { useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ComicClanContext from '../context/comicClan/comicClanContext'
import Group from './Group'

const BookDetail = ({ match }) => {
    const comicClanContext = useContext(ComicClanContext)

    const { getBook, currentBook, loading } = comicClanContext

    useEffect(() => {
        getBook(match.params.name)
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <Link to="/catalog" />
            <div>
                <Group group={"random"} groupName={"Other Random Books"} />
            </div>
        </div>
    )
}

export default BookDetail