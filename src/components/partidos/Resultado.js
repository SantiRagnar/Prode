import Input from "./Input"
import Separador from "../Separador"
import '../../assets/styles/partidos/resultado.scss'

function Resultado(){
  return(
    <div className="resultado">
      <div className="cont-resultado">
        <Input value={"?"} readOnly={true}/>
        <Separador />
        <Input value={"?"} readOnly={true}/>
      </div>
    </div>
  )
}

export default Resultado