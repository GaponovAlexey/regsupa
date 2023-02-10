import supabase from "supabase"

export const LoginApp = () => {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    })
  }
  // const [token, setToken] = useState(null)
  // const router = useRouter()

  // useEffect(() => {
  //   const hash = router.asPath
  //   const newToken = hash.replace('#access_token=', '')
  //   setToken(newToken)
  // }, [router.asPath])
  return (
    <div>
      <button onClick={handleLogin}>click</button>
    </div>
  )
}
