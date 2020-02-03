import React, { useEffect, useContext } from 'react'
import Search from './Search'
import Group from './Group'
import Loading from './Loading'
import Menu from './Menu'
import MenuIcon from './MenuIcon'
import ComicClanContext from '../context/comicClan/comicClanContext'

const Catalog = () => {
    const comicClanContext = useContext(ComicClanContext)

    const { searchBooks, category, groups, loading } = comicClanContext

    useEffect(() => {
        searchBooks();
        // eslint-disable-next-line
    }, [])

    if (loading) return <Loading />

    return (
        <div>
            <Search />
            {window.innerWidth <= 350 && <MenuIcon />}
            <Menu />
            <div>
                {category === "random"
                    ? <Group group={category} groupName={"Random"} />
                    : groups.map((g, i) => <Group group={g} groupName={g} key={i} />)}
            </div>
        </div>
    )
}

export default Catalog