import { useContext, useEffect, useState } from "react"
import { AppContext } from "../appInfo"
import Banner from "../components/Banner";
import '../assets/styles/ranking/pantallaRanking.scss'
import CardRanking from "../components/ranking/CardRanking";
import Structure from "../components/Structure";
import PuntuacionUser from "../components/ranking/PuntuacionUser";
import CardPodio from "../components/ranking/CardPodio";
import { instancia } from "../components/interceptors";
import userEvent from "@testing-library/user-event";

function PantallaRanking() {
  const [arrRankingGlobalPodio, setArrRankingGlobalPodio] = useState([])
  const [arrRankingGlobal, setArrRankingGlobal] = useState([])
  const { state, dispatch } = useContext(AppContext)
  const { ranking, user, userHabilitado } = state;

  useEffect(() => {
    getRanking()
  }, [])

  useEffect(() => {
    if (ranking.ranking) {
      setArrRankingGlobalPodio(ranking.ranking.slice(0, 2))
      setArrRankingGlobal(ranking.ranking.slice(3))
    }
  }, [ranking])

  const posiciones = {
    1: 'oro',
    2: 'plata',
    3: 'bronce'
  }

  const getRanking = () => {
    instancia.get(process.env.REACT_APP_RANKING_URL)
      .then(res => {
        dispatch({ type: "setRanking", payload: res.data })
      })
      .catch(err => console.log(err))
  }

  console.log("ranking", ranking)

  return (
    <Structure>
      <div className="containerPP">
        <section className="contpp-banner">
          <Banner />
        </section>
        <section className="contpp-ranking">
          <article className="cont-tit">
            <h1>Ranking</h1>
          </article>
          <PuntuacionUser />
          {/* {userHabilitado
            ? */}
            <article className="rank-global">
              <div className="cont-tit-punt">
                <h3>Puntuación Global</h3>
              </div>
              <div className="cont-card-ranking">
                <div className="cont-podio">
                  {arrRankingGlobalPodio.map((rank, i) => (
                    <CardPodio
                      nombre={rank.username}
                      podio={posiciones[rank.posicion]}
                      posicion={i}
                      puntos={rank.puntaje_total}
                    />
                  ))}
                </div>
                {arrRankingGlobal.map((rank,i) =>
                  <CardRanking
                    nombre={rank.username}
                    podio={posiciones[rank.posicion]}
                    posicion={i+3}
                    puntos={rank.puntaje_total}
                  />
                )}
              </div>
            </article>
            {/* : <p>Debe loguearse para ver el ranking</p>} */}
        </section>
      </div>

    </Structure>
  )
}

export default PantallaRanking