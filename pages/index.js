import supabase from "@/supabase"
import { Inter } from "@next/font/google"
import Link from "next/link"
import { useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  useEffect(() => {
    supabase.auth.onAuthStateChange((e) => {
      console.log("onAuthStateChange", e)
    })

    supabase.auth.getUser().then((v) => {
      console.log("getUser.id", v.data?.user)
    })
  }, [])

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <>
      <main className={inter.className}>starts</main>
      <Link href="/login">login</Link>
      <button onClick={signOut}>SignOut</button>
    </>
  )
}
