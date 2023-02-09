import supabase from "@/supabase"
import { Inter } from "@next/font/google"
import Link from "next/link"
import { useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const hand = async () => {
    const { data } = supabase.auth.onAuthStateChange()
    console.log("da", data.subscription.id)
  }
  hand()

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((v) => {
        console.log("get", v.data.user.id)
      })
    }
    getUserData()
  }, [])

  return (
    <>
      <main className={inter.className}>starts</main>
      <Link href="/login">login</Link>
    </>
  )
}
