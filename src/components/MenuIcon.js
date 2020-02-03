import React, { useContext, useState } from 'react'
import '../styles/Menu.css'
import ComicClanContext from '../context/comicClan/comicClanContext'
import { IconDiv, Bar } from './styledComponents/StyledMenu'

const MenuIcon = () => {
    const comicClanContext = useContext(ComicClanContext)

    const [ toggle, setToggle ] = useState(false)
    
    const changeIcon = () => {
        setToggle(!toggle)
        comicClanContext.toggleMenu()
    }
    
    return (
        <IconDiv onClick={changeIcon}>
            <Bar num="1" change={toggle ? true : false}></Bar>
            <Bar num="2" change={toggle ? true : false}></Bar>
            <Bar num="3" change={toggle ? true : false}></Bar>
        </IconDiv>
    )
}

export default MenuIcon