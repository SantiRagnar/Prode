import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../../assets/styles/devs/CardDesarrollador.scss";

function CardDesarrollador({nombre, papel, redes}) {
  
  const handleClick =()=>{
    console.log('clock en red')
  }

  return (
    <div className="cont-dev">
      <div className="img-dev">
        <img src="#" />
      </div>
      <div className="name-dev">
        <h2>nombre</h2>
      </div>
      <div className='papel-dev'>
        <h4>papel</h4>
      </div>
      <div className="cont-social-dev">
        <div className='social-dev'>
          <div className='icon' onClick={handleClick}>
            <LinkedInIcon fontSize={'large'} onClick={() => console.log('hola')} />
          </div>
          <div className='icon' onClick={handleClick}>
            <EmailIcon fontSize={'large'} />
          </div>
          <div className='icon' onClick={handleClick}>
            <GitHubIcon fontSize={'large'} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default CardDesarrollador