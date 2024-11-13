import '../../assets/styles/ranking/cardRanking.scss'
import User from '../../assets/img/user 1.svg'
import Puntos from './Puntos'


function CardRanking({ posicion, puntos, nombre}) {
  return (
    <>
    <div className="cont-ranking" >
      <Puntos valor={puntos} color={'normal'}/>
      <div className='cont-user'>
        <img src={User} alt="user"/>
        <p>{nombre}</p>
      </div>
      <Puntos valor={posicion} color={''}/>
    </div>

    </>
  )
}

export default CardRanking