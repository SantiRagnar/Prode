import "../assets/styles/buttonLogIn.scss"
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../appInfo";

function ButtonLogIn(){
  const {state} = useContext(AppContext)
  const {mobile} = state
  const navigate = useNavigate();

  const redirectTo = (url)=>{
    navigate(url);
  }

  return(
    <button 
      className={mobile ?"buttonLogIn" : "buttonLogIn-desk"}
      onClick={()=>{redirectTo("/logIn")}}
      >
      <LoginIcon />
      <span>Iniciar Sesion</span>
    </button>
  )
}

export default ButtonLogIn