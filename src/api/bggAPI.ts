import axios from "axios"

const CORS_ANYWHERE = process.env.REACT_APP_CORS_ANYWHERE_PORT
const HOST = process.env.REACT_APP_HOST

console.log("Cors!!", CORS_ANYWHERE, "Host: ", HOST)
export default axios.create({
  baseURL: `${HOST}:${CORS_ANYWHERE}/https://www.boardgamegeek.com/xmlapi2`,
})
//http://localhost:8080/https://www.boardgamegeek.com/xmlapi2
