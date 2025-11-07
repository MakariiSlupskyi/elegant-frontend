import type { User } from "@/types/types"

export async function getCurrentUser(): Promise<User> {
  const response = await fetch(`http://localhost:8080/auth/me`, {
    credentials: 'include'
  })

  if (!response.ok) {
    throw new Error('Not authenticated')
  }

  return response.json()
}

export async function logoutUser() {
  const responce = await fetch('http://localhost:8080/auth/logout', { credentials: 'include'})
  
  if (!responce.ok) {
    throw new Error("Couldn't logout")
  }
}