import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ComicClanContext from '../context/comicClan/comicClanContext'
import { MenuButton } from './styledComponents/StyledText'

const Category = ({ name }) => {
    const comicClanContext = useContext(ComicClanContext)

    const { changeCategory, category } = comicClanContext

    const callChangeCategory = () => {
        changeCategory(name)
    }

    return (
        <Link to={`/catalog/${name}`}>
            <MenuButton
                active={name === category ? 'active' : null}
                onClick={callChangeCategory}>
                {name}
            </MenuButton>
        </Link>
    )
}

Category.propTypes = {
    name: PropTypes.string.isRequired
}

export default Category