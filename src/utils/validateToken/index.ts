// Define
import * as jwt from "jsonwebtoken"

type ValidateToken = <A>(a: A) => A

// Implement
export const validateToken: ValidateToken = x => x

//https://www.youtube.com/watch?v=8Ip0pcwbWYM&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&index=13
export const verifyToken = (token: string) => {
  try {
    const key = process.env.REACT_APP_SECRET_KEY
      ? process.env.REACT_APP_SECRET_KEY
      : ""
    return jwt.verify(token, key)
  } catch (err) {
    return err.message
  }
}
