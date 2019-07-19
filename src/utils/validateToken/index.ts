// Define
import * as jwt from "jsonwebtoken"

//https://www.youtube.com/watch?v=8Ip0pcwbWYM&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&index=13
export const validateToken = (token: string) => {
  try {
    const key = process.env.REACT_APP_SECRET_KEY
      ? process.env.REACT_APP_SECRET_KEY
      : ""
    return jwt.verify(token, key)
  } catch (err) {
    return err.message
  }
}
