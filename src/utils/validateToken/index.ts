// Define
import * as jwt from "jsonwebtoken"

//https://www.youtube.com/watch?v=8Ip0pcwbWYM&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&index=13

interface Payload {
  email: string
  iat: number
  exp: number
  userId: number
}

export const validateToken = (token: string) => {
  try {
    const { exp } = jwt.decode(token) as Payload
    if (Date.now() >= exp * 1000) {
      return false
    }
  } catch (err) {
    console.log(err.message)
    return false
  }
  return true
}
