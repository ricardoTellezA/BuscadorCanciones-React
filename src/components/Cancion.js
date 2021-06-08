import React from 'react'

export const Cancion = ({ respuestaLetra }) => {
    if (respuestaLetra.length === 0) return null;
    return (


        <>
            <h2>Letra de la canción</h2>
            <p className="letra">{respuestaLetra}</p>
        </>
    )
}
