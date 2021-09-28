import React, { useEffect, useState } from 'react'
import axios from '../axios'
import requests from '../request'
import { base_url } from './Row'
import './Banner.css'
import { addToFavorite } from './movie/action'
import { useDispatch } from 'react-redux'

function Banner() {
    const [movie, setMovie] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchTrending)
            const interval = setInterval(() => {
                setMovie(
                    request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1
                    )
                ]
                )
                return request;
            }, 5000)
            return () => clearInterval(interval)
        }
        fetchData()
    }, [])

    function onSave(mupi){
        dispatch(addToFavorite(mupi))
    }

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }
    
    return (
        <div className='banner'
        style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${base_url}/${movie?.backdrop_path})`,
            backgroundPosition: 'center center',
        }}>
            <div className='banner--blacklayer'>
                        <div className='banner__contents'>
                            <h1 className='banner__title'>
                                {movie?.title || movie?.name || movie?.original_name }
                            </h1>
                            <div className="banner__buttons">
                                <button className="banner__button">
                                    Watch
                                </button>
                                <button onClick={() => onSave(movie)} className="banner__button">
                                    Add to Favorite
                                </button>
                            </div>
                            <h1 className="banner__description">
                                {truncate(movie?.overview, 150)}
                            </h1>
                        </div>
            <div className='banner--fadeBottom' />
            </div>
        </div>
    )
}

export default Banner
