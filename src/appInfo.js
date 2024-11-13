import { createContext } from "react";

export const AppContext = createContext();

export const initialState = {
  partidos: [],
  ranking: [],
  user: {},
  userHabilitado: false,
  mobile: false,
}

export const appReducer = (state, action)=>{
  switch(action.type){
    case "setPartidos":{
      return {
        ...state,
        partidos: action.payload,
      }
    }
    case "setRanking":{
      return {
        ...state,
        ranking: action.payload,
      }
    }
    case "setUser":{
      return {
        ...state,
        user: action.payload,
      }
    }
    case "setUserHabilitado":{
      return {
        ...state,
        userHabilitado: action.payload,
      }
    }
    case "setMobile":{
      return {
        ...state,
        mobile: action.payload,
      }
    }
    default:
      return state;
  }
}