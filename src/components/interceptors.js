import axios from "axios";

export const instancia = axios.create();

const userToken = JSON.parse(localStorage.getItem('userAgeRedBull'));

instancia.interceptors.request.use(function (config) {
  config.token = userToken.token.toString() 
  config.headers = {
    "Authorization": `Token ${userToken.token}`
  }
  return config
})