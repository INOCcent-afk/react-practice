import React, {useContext} from 'react'
import {MovieContext} from "./MovieContext"

const Nav = () => {
    const [movies,setMovies] = useContext(MovieContext)
    return (
        <header>
            <h3>INOC DAVE</h3>
            <p>LIST OF MOVIES: {movies.length}</p>
        </header>
    )
}

export default Nav
