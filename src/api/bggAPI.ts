import axios from "axios"
import { HOST, CORS_ANYWHERE } from "./index"
export default axios.create({
  baseURL: `${HOST}:${CORS_ANYWHERE}/https://www.boardgamegeek.com/xmlapi2`,
})
//http://localhost:8080/https://www.boardgamegeek.com/xmlapi2
