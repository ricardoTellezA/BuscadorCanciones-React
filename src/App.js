import axios from "axios";
import { useEffect, useState } from "react";
import { Cancion } from "./components/Cancion";
import { Formulario } from "./components/Formulario";
import { Info } from "./components/Info";


function App() {
  const [resultado, guardarResultado] = useState({});
  const [respuestaLetra, guardarRespuestaLetra] = useState('');
  const [info,guardarInfo] = useState({});

  useEffect(() => {
    if (Object.keys(resultado).length === 0) return null;

    const leerApi = async () => {
      const { artista, cancion } = resultado;

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;


      const [letra, informacion] = await Promise.all([
        axios(url),
        axios(url2),
      ]);
      guardarRespuestaLetra(letra.data.lyrics);
      guardarInfo(informacion.data.artists[0]);

    }

    leerApi();
  }, [resultado])
  return (
    <>

      <Formulario
        guardarResultado={guardarResultado}

      />

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <Info info={info}/>
        </div>

          <div className="col-md-6">
            <Cancion respuestaLetra={respuestaLetra} />
          </div>
        </div>
      </div>


    </>
  );
}

export default App;
