import React, { useContext } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ComicClanContext from '../context/comicClan/comicClanContext'

const Button = styled.p`
    color:  #777777;
    display: inline-block;
    padding: 0 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 14px;
    text-transform: capitalize;
    text-align: center;
    cursor: pointer;
`

const active = {
    background: '#F15454',
    borderRadius: '19px',
    boxShadow: '0px 2px 3px rgba(34, 34, 34, 0.6)',
    color: '#FFFFFF',
    padding: '6px 20px'
}

const Category = ({ name }) => {
    const comicClanContext = useContext(ComicClanContext)

    const { changeCategory, category, loading } = comicClanContext

    const callChangeCategory = () => {
        changeCategory(name)
    }

    return (
        <Button style={name === category ? active : null} onClick={callChangeCategory}>{name}</Button>
    )
}

Category.propTypes = {
    name: PropTypes.string.isRequired
}

export default Category