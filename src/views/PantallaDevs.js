import CardDesarrollador from "../components/devs/CardDesarrollador"
import Structure from "../components/Structure"
import '../assets/styles/devs/pantallaDevs.scss';

function PantallaDevs() {
  return (
    <Structure>
      <div className="containerPP">
        <div className="contpp-devs">
          <CardDesarrollador
            nombre={"Santiago Barrios"}
            papel={"Front End"}
            redes={{
              linkedIn: '',
              mail: '',
              gitHub: ''
              }}
          />
          <CardDesarrollador />
        </div>
      </div>
    </Structure>
  )
}

export default PantallaDevs