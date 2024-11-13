import Apuesta from "../partidos/Apuesta"
import Resultado from "../partidos/Resultado"

import '../../assets/styles/partidos/cardPartidos.scss'

function CardPartidos({ infoPartido }) {

  const tiposEstados = {
    0: 'no jugado',
    1: 'en juego',
    2: 'finalizado'
  }

  const tiposEstadosCss = {
    0: 'no-jugado',
    1: 'en-juego',
    2: 'finalizado'
  }

  console.log("INFO PARTIDO", infoPartido)
  return (
    <div className="cont-cardPartido">
      <div className="cont-nomEquipos">
        <div className="equipo">
          <p>{infoPartido.equipo_1}</p>
        </div>
        <div className="equipo">
          <p>{infoPartido.equipo_2}</p>
        </div>
      </div>
      <div className="cont-datosPartido">
        <div className="cont-dato">
          <div className="cont-date">
            <p>{infoPartido.fecha}</p>
          </div>
          <div className="cont-obs">
            {infoPartido.descripcion}
          </div>
        </div>
        <div className={`cont-estado ${tiposEstadosCss[infoPartido.estado]}`}>
          <p>{tiposEstados[infoPartido.estado]}</p>
        </div>
      </div>
      <div className="cont-resul-apu">
        <Apuesta
          editable={infoPartido.estado == 0 ? true : false}
          infoPartido={infoPartido}
        />
        <Resultado />

        {/* <div className="cont-puntosObt">
          <p>Puntos Obtenidos</p>
          <Input />
        </div> */}
        
      </div>
    </div>
  )
}

export default CardPartidos