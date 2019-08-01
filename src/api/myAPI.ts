import axios from "axios"

const HOST = process.env.REACT_APP_HOST
const PORT = process.env.REACT_APP_APIPORT

export default axios.create({
  baseURL: `${HOST}:${PORT}`,
})
