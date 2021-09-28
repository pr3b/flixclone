import React from 'react'
import request from '../request'
import Row from './Row'
import RowPopular from './RowPopular'

function Movie() {
    return (
        <>
            <RowPopular title="Popular" 
              fetchUrl={request.fetchPopular}
              isLargeRow={true} />
            <Row title="Trending" fetchUrl={request.fetchTrending} isLargeRow={true} />
            <Row title="Top Rated" fetchUrl={request.fetchTopRated} isLargeRow={true} />
            <Row title="TV Shows" fetchUrl={request.fetchTV} />
            <Row title="Top Rated TV Shows" fetchUrl={request.fetchTVTopRated} />
            <Row title="Search" fetchUrl={request.fetchSearch} isLargeRow={true} />
        </>
    )
}

export default Movie
