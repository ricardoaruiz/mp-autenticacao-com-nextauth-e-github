'use client'

import { signOut } from "next-auth/react"
import { Button } from "../Button"

export const LogoutButton = () => {
  return (
    <Button className="mt-16" onClick={() => signOut()}>
      Logout
    </Button>
  )
}
