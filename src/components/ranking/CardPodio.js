import '../../assets/styles/ranking/cardPodio.scss'
import User from '../../assets/img/user 1.svg'
import Puntos from './Puntos'
function CardPodio({ podio, posicion, puntos, nombre}) {
  return (
    <>
      <div className={`cont-ranking-podio p-${podio}`} >
        <Puntos valor={posicion} color={podio} className={'posicion'} />
        <div className='cont-datos-podio'>
          <div className='cont-user'>
            <img src={User} alt="user" />
            <p>{nombre}</p>
          </div>
          <Puntos valor={puntos} color={''} className={'puntos'} />
        </div>
      </div>

    </>
  )
}

export default CardPodio