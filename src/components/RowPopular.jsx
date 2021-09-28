import React, { useEffect, useState } from 'react'
import PopularCard from './PopularCard';
import axios from '../axios'

import './Row.css'

function RowPopular({title, fetchUrl}) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData(){
           const request = await axios.get(fetchUrl)
           setMovies(request.data.results)
           return request
        }
        fetchData()
   }, [fetchUrl]);

    return (
        <>
        <div className="row">
            <h2>{title}</h2>
            {movies.map((movie) => {
                return <PopularCard movie={movie} />
            })}
        </div>
        </>
    )
}

export default RowPopular
