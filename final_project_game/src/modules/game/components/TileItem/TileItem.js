import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { clickOnTile, resetErrorState } from '../../../../store/actions/game25Actions';
import './TileItem.css'

function TileItem({tile}) {
    const dispatch = useDispatch ();

    function onTileClick () {
        console.log("tile clicked: " + tile.id);
        dispatch(clickOnTile(tile));
    }

    useEffect(() => {
        if (tile.error) {
            setTimeout(()=> dispatch(resetErrorState(tile)), 300);
        }

    }, [tile])
    

    function tileClasses (tile) {
        // console.log(tile);
        if (tile.error) {
            return "tile wrong"
        }
        if(tile.done) {
            return "tile done"
        }
        return "tile"
    }

    return (
        <div className={tileClasses(tile)} onClick={onTileClick}>{tile.id}</div>
    )
}

export default TileItem