import { useEffect } from "react"
import supabase from "supabase"

export const LoginApp = () => {
  const handleLogin = async () => {
    const { error: signInError } = await supabase.auth.signInWithOAuth({
      provider: "google",
    })
    console.log(signInError)
  }
  async function getUserData() {
    const { da } = await supabase.auth.getUser
    console.log("da4a", da)
  }
  getUserData()
  return (
    <div>
      <button onClick={handleLogin}>click</button>
    </div>
  )
}
