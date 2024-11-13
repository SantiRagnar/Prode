import Banner from "../components/Banner"
import CardPartidos from "../components/partidos/CardPartidos"
import { Toaster } from 'react-hot-toast';
import '../assets/styles/partidos/pantallaPartidos.scss'
import { useContext, useEffect } from "react";
import Structure from "../components/Structure";
import { AppContext } from "../appInfo";
import { instancia } from "../components/interceptors";

function PantallaPartidos() {
  const { state, dispatch } = useContext(AppContext);
  const { user, partidos } = state;

  useEffect(() => {
    getPartidos()
  }, [])

  const getPartidos = () => {
    instancia.get(process.env.REACT_APP_PARTIDOS_URL)
      .then((res) => {
        // console.log(res)
        dispatch({ type: "setPartidos", payload: res.data.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // console.log("PARTIDOS", partidos)

  return (
    <Structure>
      <div className="containerPP">
        <Toaster />
        <section className="contpp-banner">
          <Banner />
        </section>
        <section className="contpp-partidos">
          <article className="cont-tit">
            <h1>Partidos</h1>
          </article>
          <article className="cont-partidos">
            {partidos.length > 0
              ?
              partidos?.map(partido => (
                <CardPartidos infoPartido={partido} />
              ))
              : <p>Debe loguearse para ver los partidos</p>
            }
          </article>
        </section>
      </div>
    </Structure>
  )
}

export default PantallaPartidos