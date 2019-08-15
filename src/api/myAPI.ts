import axios from "axios"
import { PORT, HOST } from "./index"

console.log("myApi:", HOST, PORT)

export default axios.create({
  baseURL: `${HOST}:${PORT}`,
})
