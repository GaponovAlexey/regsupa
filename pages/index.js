import supabase from "@/supabase"
import { Inter } from "@next/font/google"
import { Auth } from "@supabase/ui"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const [users, setUser] = useState("")
  console.log("users-",users)

  
  // const r = useRouter()
  // console.log(r.asPath)
  const { user, session } = Auth.useUser()
  console.log("user", user)
  console.log("session", session)
  const hand = async () => {
    const { data } = supabase.auth.onAuthStateChange()
    console.log("da", data.subscription.id)
  }
  hand()

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((e) => {
        console.log("data user", e.data.user)
        if (e.data?.user) {
          setUser(e.data?.user)
        } else {

        }
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
