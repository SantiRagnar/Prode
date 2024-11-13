import LogIn from './views/LogIn';
import PantallaPartidos from './views/PantallaPartidos'
import PantallaRanking from './views/PantallaRanking'
import PantallaDevs from './views/PantallaDevs'
import NavBar from './components/NavBar';
import { appReducer, initialState, AppContext } from "./appInfo";
import './App.scss';
import { useState, useReducer, useEffect } from "react";
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { userHabilitado, user, mobile } = state;
  const [items, setItems] = useState([])

  useEffect(() => {
    currentUser();
    isMobile();
  }, [])

  const currentUser = () => {
    const item = JSON.parse(localStorage.getItem('userAgeRedBull'));
    if (item) {
      dispatch({type: "setUser", payload: item})
      dispatch({ type: "setUserHabilitado", payload: true })
    }
  }

  const isMobile = () => {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)){
        dispatch({type: "setMobile", payload: true})
      }
  }

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path='/' element={<PantallaPartidos />} />
        <Route path='/ranking' element={<PantallaRanking />} />
        <Route path='/devs' element={<PantallaDevs />} />
        <Route path='/logIn' element={<LogIn />} />
      </Routes>
      {/* <NavBar /> */}
    </AppContext.Provider>
  );
}

export default App;
