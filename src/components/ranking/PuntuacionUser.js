import CardRanking from "./CardRanking"
import { useContext } from "react";
import { AppContext } from "../../appInfo"

function PuntuacionUser() {
  const { state } = useContext(AppContext);
  const { userHabilitado, ranking, user } = state;
  return (
    <>
      {userHabilitado
        ?
        <article className="rank-user">
          <div className="cont-tit-punt">
            <h3>Tu Puntuación</h3>
          </div>
          {ranking.posicion
          ?
            <CardRanking
              podio={'normal'}
              nombre={user.username}
              // podio={posiciones[rank.posicion]}
              posicion={ranking.posicion}
              puntos={ranking.puntaje_total}
            />
          : <p className="sin-dato">Comienza a realizar pronosticos para ver tu ranking</p>
          }
        </article>
        : null
      }
    </>
  )
}

export default PuntuacionUser