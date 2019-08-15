import axios from "axios"
import { CORS_ANYWHERE, HOST } from "./index"

console.log("Cors!!", CORS_ANYWHERE, "Host: ", HOST)
export default axios.create({
  baseURL: `${HOST}:${CORS_ANYWHERE}/https://www.boardgamegeek.com/xmlapi2`,
})
//http://localhost:8080/https://www.boardgamegeek.com/xmlapi2
