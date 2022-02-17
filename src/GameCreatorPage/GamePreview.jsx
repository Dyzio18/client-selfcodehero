import React from 'react'
import { useSelector } from 'react-redux'

function GamePreview() {
    const game = useSelector((store) => store.games.currgame)

    if (!game || game.name == "") {
        return (<></>)
    }

    return (
        <>
            <div className="card mt-3">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">Name:</h6>
                    <h4 className="card-title">{game.name}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Description:</h6>
                    <p className="card-text">
                        {game.desc}
                    </p>
                </div>
            </div>
        </>
    )
}

export { GamePreview }