import { createClient } from "@supabase/supabase-js"

const SUPABASE_URL = "https://iakjucmhukqakhswuqgh.supabase.co"
const SUPABASE_KEY = process.env.DB_KEY
export const supabase = createClient(SUPABASE_URL, String(SUPABASE_KEY))
