import React from 'react'
import { Button, CardContainer, CardImage, CardMovie, CardTitle } from './FavoriteCardElements';
import { base_url } from './Row'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { removeFromFavorite } from './movie/action';
import { useDispatch } from 'react-redux';

function FavoriteCard({favorite}) {
    const dispatch = useDispatch()

    function onRemove(favorite){
        dispatch(removeFromFavorite(favorite))
    }
    return (
        <>
        <CardContainer>
                <CardMovie>
                    <Button onClick={() => onRemove(favorite.id)}>
                        <FavoriteIcon />
                    </Button>
                    <CardImage src={`${base_url}${favorite.poster_path}`} />
                    <CardTitle>{favorite.original_title || favorite.original_name}</CardTitle>
                </CardMovie>
        </CardContainer>
        
        </>
    )
}

export default FavoriteCard
