import { useEffect, useState } from "react"

import { Auth, ThemeSupa } from "@supabase/auth-ui-react"
import { useRouter } from "next/router"
import { supabase } from "supabase"
import { useSession } from "@supabase/auth-helpers-react"



export const LoginApp = () => {
  const [dataUser, setUser] = useState({})
  const rou = useRouter()
  console.log(rou.pathname)
  
  return (
    <div>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={["discord", "apple", "google"]}
        redirectTo="/success"
        // magicLink={e =>setUser(e)}
        // onlyThirdPartyProviders={e =>setUser(e)}
        // showLinks
        // view={}
        // socialLayout={}
      />
    </div>
  )
}
