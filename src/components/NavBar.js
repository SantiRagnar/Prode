import { Link } from "react-router-dom";
import '../assets/styles/navBar.scss'
import IconPartido from '../assets/img/icon-partido.svg'
import IconRanking from '../assets/img/icon-podio.svg'
import IconDevs from '../assets/img/icon-devs3.svg'
import { useNavigate } from "react-router-dom";
import ButtonLogIn from "./ButtonLogIn";
import { useContext } from "react";
import { AppContext } from "../appInfo";
import ButtonLogOut from "./ButtonLogout";

function NavBar() {
  const { state } = useContext(AppContext)
  const { userHabilitado, mobile } = state;
  const navigate = useNavigate();
  const redirectTo = (url) => {
    navigate(url)
  }
  console.log(userHabilitado)
  if(mobile){
    return (
      <>
        {userHabilitado
          ? <ButtonLogOut />
          : <ButtonLogIn />
        }
        
        <nav className="cont-nav">
          <ul className="nav">
            <li className="ranking">
              <a
                onClick={() => redirectTo("/ranking")}
              >
                <img src={IconRanking} />
              </a>
            </li>
            <li className="partido">
              <a onClick={() => redirectTo("/")}>
                <img src={IconPartido} />
              </a>
            </li>
            <li className="devs">
              <a
                onClick={() => redirectTo("/devs")}
              >
                <img src={IconDevs} />
              </a>
            </li>
          </ul>
        </nav>
      </>
    )
  }else{
    return (
      <>
        {userHabilitado
          ? <ButtonLogOut />
          : <ButtonLogIn />
        }
        
        <nav className="cont-nav-desk">
          <ul className="nav">
            <li className="ranking">
              <a
                onClick={() => redirectTo("/ranking")}
              >
                <img src={IconRanking} />
              </a>
            </li>
            <li className="partido">
              <a onClick={() => redirectTo("/")}>
                <img src={IconPartido} />
              </a>
            </li>
            <li className="devs">
              <a
                onClick={() => redirectTo("/devs")}
              >
                <img src={IconDevs} />
              </a>
            </li>
          </ul>
        </nav>
      </>
    )
  }
}

export default NavBar