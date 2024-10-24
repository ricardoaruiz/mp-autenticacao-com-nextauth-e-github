import { authOptions } from "@/lib/auth"
import NextAuth from "next-auth"


/*
  Com essa configuração já teremos as seguintes rotas disponíveis:
  http://localhost:3000/api/auth/signin
  http://localhost:3000/api/auth/signout
  http://localhost:3000/api/auth/error
*/

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }