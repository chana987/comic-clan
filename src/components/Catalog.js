import React, { useEffect, useContext } from 'react'
import Search from './Search'
import Group from './Group'
import Category from './Category'
import ComicClanContext from '../context/comicClan/comicClanContext'
import Loading from './Loading'
import MenuIcon from './MenuIcon'

const Catalog = () => {
    const comicClanContext = useContext(ComicClanContext)

    const { searchBooks, category, groups, loading, menu } = comicClanContext

    useEffect(() => {
        searchBooks();
        // eslint-disable-next-line
    }, [])

    if (loading) return <Loading /> 

    return (
        <div>
            <Search />
            {window.innerWidth <= 350 && <MenuIcon />}
            {((menu || window.innerWidth) > 350) && <div>
                <Category name="year" />
                <Category name="writer" />
                <Category name="artist" />
                <Category name="owner" />
                <Category name="random" />
            </div>}
            <div>
                {category === "random"
                    ? <Group group={category} groupName={"Random"} />
                    : groups.map((g, i) => <Group group={g} groupName={g} key={i} />)}
            </div>
        </div>
    )
}

export default Catalog