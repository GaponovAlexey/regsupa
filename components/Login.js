import supabase from "supabase"

export const LoginApp = () => {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    })
  }

  return (
    <div>
      <button onClick={handleLogin}>click</button>
    </div>
  )
}
