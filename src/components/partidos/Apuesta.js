import Input from "./Input"
import Separador from "../Separador"
import "../../assets/styles/partidos/apuesta.scss"
import { useEffect, useState } from "react"
import Editar from "../../assets/img/Editar.svg"
import Confirmar from "../../assets/img/Confirmar.svg"
import { useContext } from "react";
import { AppContext } from "../../appInfo"
import { instancia } from "../interceptors"
//import toast from "react-hot-toast"

function Apuesta({ editable, infoPartido }) {
  const [editar, setEditar] = useState(false)
  const [valorApuesta, setValorApuesta] = useState({ apuestaEq1: '', apuestaEq2: '' })
  const { state } = useContext(AppContext);
  const { userHabilitado } = state;

  useEffect(() => {
  })

  const handleChange = (e) => {
    if (e.target.value.length <= 2) {
      setValorApuesta((state) => ({
        ...state,
        [e.target.name]: Math.round(e.target.value),
      }))
    }
  }

  const handleClick = (e) => {
    if (e.target.name === "confirmar") {
      instancia.post(process.env.REACT_APP_PARTIDOS_URL, {
        'partido_id': infoPartido.partido_id,
        'pronostico_equipo_1': valorApuesta.apuestaEq1,
        'pronostico_equipo_2': valorApuesta.apuestaEq2,
      },
      )
      .then((res)=>{console.log(res)})
      .catch((err)=>{console.log(err)})
    }
    if (e.target.name === "editar" && !editable) {
      alert('no puede realizar la apuesta porque el partido ya comenzo')
    }
    setEditar(!editar)
  }

  return (
    <>
      <div className="apuesta">
        <div className={userHabilitado ? "cont-apuesta" : "cont-apuesta no-edit"}>
          <Input
            value={valorApuesta.apuestaEq1}
            onChange={(e) => {
              handleChange(e)
            }}
            name={"apuestaEq1"}
            editar={editar}
            readOnly={editar ? false : true}
          />
          <Separador />
          <Input
            value={valorApuesta.apuestaEq2}
            onChange={handleChange}
            name={"apuestaEq2"}
            editar={editar}
            readOnly={editar ? false : true}
          />
        </div>
        {userHabilitado
          ?
          <div className="edit">
            {editar && editable
              ?
              <button
                className="btn-apuesta btn-confirmar"
                name="confirmar"
                onClick={handleClick}
              >
                <img src={Confirmar} name="confirmar" alt="confirmar" />
              </button>
              :
              <button
                className="btn-apuesta btn-editar"
                name="editar"
                onClick={handleClick}
              >
                <img src={Editar} name="editar" alt="edit" />
              </button>
            }

          </div>
          : null
        }
      </div>
    </>
  )
}

export default Apuesta