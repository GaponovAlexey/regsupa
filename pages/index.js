import supabase from "@/supabase"
import { Inter } from "@next/font/google"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {

  useEffect(() => {
    supabase.auth.onAuthStateChange((e) => {
      console.log("onAuthStateChange", e)
    })

    supabase.auth.getUser().then((v) => {
      console.log("getUser.id", v?.data)
    })
  }, [])

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  const [token, setToken] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const hash = router.asPath
    const newToken = hash.split('&')[0].replace('/#access_token=', '')
    setToken(newToken)
  }, [router.asPath])

  console.log("token", token)
  

  return (
    <>
      <main className={inter.className}>starts</main>
      <Link href="/login">login</Link>
      <button onClick={signOut}>SignOut</button>
    </>
  )
}
