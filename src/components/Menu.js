import React, {useContext } from 'react'
import Category from './Category'
import MenuIcon from './MenuIcon'
import ComicClanContext from '../context/comicClan/comicClanContext'

const Menu = () => {
    const comicClanContext = useContext(ComicClanContext)

    return (
        <div>
            
            {(comicClanContext.menu || window.innerWidth > 350) && <div>
                <Category name="year" />
                <Category name="writer" />
                <Category name="artist" />
                <Category name="owner" />
                <Category name="random" />
            </div>}
        </div>
    )
}

export default Menu