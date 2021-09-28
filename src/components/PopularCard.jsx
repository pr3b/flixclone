import React, { useEffect, useState } from 'react'
import { Button, CardContainer, CardImage, CardMovie, CardTitle } from './FavoriteCardElements';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
import { base_url } from './Row'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addToFavorite, removeFromFavorite } from './movie/action';
import { useDispatch, useSelector } from 'react-redux';

function PopularCard({ movie }) {
    const [trailerUrl, setTrailerUrl] = useState('')
    const [clicked, setClicked] = useState(false)
    const dispatch = useDispatch()

    const favorites = useSelector((state) => state.movie.favorite)

    useEffect(() => {
        const index = favorites.map(fave => fave.id).indexOf(movie.id)
        if (index >= 0){
            setClicked(true)
        } else {
            setClicked(false)
        }
    }, [clicked, favorites, movie.id])

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.original_title || '')
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
            })
            .catch(error => console.log(error))
        }
    }

    const handleClickFave = () => {
        const index = favorites.map(fave => fave.id).indexOf(movie.id)
        if (index >= 0){
            setClicked(false)
            dispatch(removeFromFavorite(movie.id))
        } else {
            setClicked(true)
            dispatch(addToFavorite(movie))
        }
    }

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    return (
        <>
        <CardContainer>
                <CardMovie>
                    <Button onClick={handleClickFave}>
                        {clicked ? <FavoriteIcon style={{color: 'red'}} /> : <FavoriteBorderIcon style={{color: 'white'}} />}
                    </Button>
                    <CardImage onClick={() => handleClick(movie)} src={`${base_url}${movie.poster_path}`} />
                    <CardTitle>{movie.original_title}</CardTitle>
                </CardMovie>
        </CardContainer>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </>
    )
}

export default PopularCard
