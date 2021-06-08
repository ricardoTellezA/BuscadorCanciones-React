import React, { useState } from 'react'

export const Formulario = ({guardarResultado}) => {

    const [busqueda, guardarBusqueda] = useState({
        artista: '',
        cancion: '',
    });

    const [error, guardarError] = useState(false);
    const { artista, cancion } = busqueda;


    const leerBusqueda = e => {
        guardarBusqueda({ ...busqueda, [e.target.name]: e.target.value });
    }

    const enviarBusqueda = e => {
        e.preventDefault();

        if (artista.trim() === '' || cancion.trim() === '') {
            guardarError(true);
            return;
        }

        guardarError(false);

        guardarResultado(busqueda);


    }


    return (

        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form className="col card text-white bg-transparent mb-5 pt-5 pb-2" onSubmit={enviarBusqueda}>


                        <fieldset>
                            <legend className="text-center">Buscador letras canciones</legend>

                            {
                                error ? <p className="alert alert-danger p-2 text-center"><strong>Ingresa una búsqueda correcta</strong></p> : null
                            }

                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label>Nombre</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Nombre artista"
                                        name="artista"
                                        value={artista}
                                        onChange={leerBusqueda}
                                    />
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Canción</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Nombre canción"
                                        name="cancion"
                                        value={cancion}
                                        onChange={leerBusqueda}
                                    />


                                </div>

                            </div>
                            <button className="btn btn-primary float-right">Enviar</button>

                        </fieldset>

                    </form>
                </div>

            </div>
        </div>
    )
}
