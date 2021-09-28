import React from 'react'
import { useSelector } from 'react-redux'
import FavoriteCard from './FavoriteCard'
import { Title } from './FavoriteCardElements';

function Favorite() {
    const favorites = useSelector((state) => state.movie.favorite)
    console.log(favorites);
    
    return (
        <>
        <Title>Favorite</Title>
        {favorites.map((favorite) => {
            return <FavoriteCard favorite={favorite} />
        })}
        </>
    )
}

export default Favorite
