import { ItemButton, Avatar, LogoutButton } from "@/components"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return redirect('/')
  }

  const user = session.user

  return (
    <section className="container flex flex-col flex-nowrap mx-auto min-h-screen bg-right-bottom bg-no-repeat pt-10 md:pt-24 bg-dashboard-squares bg-[length:467px_463px] md:bg-[url('')]" >
      <header className="flex flex-col items-center">
        <Avatar imgUrl={user?.image ?? ''}/>
        <h1 className="text-4xl mt-6 md:mt-0 md:text-8xl/tight text-center w-[303px] md:w-full">Boas vindas, <span className="font-bold">{user?.name}</span></h1>
        <h3 className="text-lg mt-3 md:mt-0 md:text-3xl/tight font-thin text-slate-500">Que tal analisarmos seu GitHub?</h3>
      </header>

      <section className="flex content-start flex-col items-center md:items-start md:bg-dashboard-squares bg-no-repeat bg-[right_top_50px] md:bg-right-top min-h-[467px] w-full mt-6 mb:mt-10 md:bg-[length:600px_600px] ">
        <ul className="w-2/3 md:w-1/2 mx-auto md:mx-0 bg-white">
          <li className="border-t border-slate-300 flex justify-between items-center">
            <ItemButton>Meus Repositórios (0)</ItemButton>
          </li>
          <li className="border-t border-slate-300">
            <ItemButton>Meus Gists (0)</ItemButton>
          </li>
          <li className="border-y border-slate-300 flex justify-between items-center">
          <ItemButton>Meus Seguidores (0)</ItemButton>
          </li>
        </ul>

        <LogoutButton />
      </section>
    </section>
  )
}