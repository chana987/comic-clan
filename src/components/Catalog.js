import React, { useEffect, useContext } from 'react'
import Search from './Search'
import Group from './Group'
import Category from './Category'
import ComicClanContext from '../context/comicClan/comicClanContext'

const Catalog = () => {
    const comicClanContext = useContext(ComicClanContext)

    const { searchBooks, category, groups, loading } = comicClanContext

    useEffect(() => {
        searchBooks();
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <Search />
            <div>
                <Category name="year" />
                <Category name="writer" />
                <Category name="artist" />
                <Category name="owner" />
                <Category name="random" />
            </div>
            <div>
                {category === "random"
                    ? <Group group={category} groupName={"Random"} />
                    : groups.map((g, i) => <Group group={g} groupName={g} key={i} />)}
            </div>
        </div>
    )
}

export default Catalog