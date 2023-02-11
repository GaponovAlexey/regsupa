import supabase from "@/supabase"

export const Projects =  () => {
  const isProjects = async () => {
    let { data: projects, error } = await supabase.from("projects").select()
    console.log("projects",projects)
  }
  isProjects()
  return <div>hi</div>
}
