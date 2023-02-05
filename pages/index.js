import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "@/styles/Home.module.css"
import { useRouter } from "next/router"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const r = useRouter()
  console.log(r.asPath)

  return (
    <>
      <main className={inter.className}>starts</main>
      <Link href="/login">login</Link>
    </>
  )
}
