import axios from "axios"
import { HOST, PORT } from "./index"

export default axios.create({
  baseURL: `${HOST}:${PORT}`,
})
