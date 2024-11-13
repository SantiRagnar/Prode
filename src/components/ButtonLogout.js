import "../assets/styles/buttonLogIn.scss"
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../appInfo";

function ButtonLogOut(){
  const {state} = useContext(AppContext)
  const {mobile} = state
  const navigate = useNavigate();

  console.log("Button Log Out")
  return(
    <button 
      className={mobile ?"buttonLogIn" : "buttonLogIn-desk"}
      onClick={()=>{
        localStorage.removeItem("userAgeRedBull");
        window.location.reload();
      }}
      >
      <LogoutIcon />
      <span>Cerrar Sesion</span>
    </button>
  )
}

export default ButtonLogOut