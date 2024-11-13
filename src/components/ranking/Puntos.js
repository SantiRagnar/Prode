import "../../assets/styles/ranking/puntos.scss"

function Puntos({color, valor, className}){
  return (
    <div className={`cont-puntos ${color} ${className}`} >
      <p>{valor
            ? valor : "0000"
        }
      </p>
    </div>
  )
}

export default Puntos