import axios from "axios"
import { PORT, HOST } from "./index"



export default axios.create({
  baseURL: `${HOST}:${PORT}`,
})
