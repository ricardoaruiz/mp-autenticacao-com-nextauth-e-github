import { Avatar } from "@/components/Avatar"
import { Arrow } from "@/components/Icons/Arrow"

export default function DashboardPage() {
  return (
    <section className="container flex flex-col flex-nowrap mx-auto min-h-screen bg-right-bottom bg-no-repeat pt-10 md:pt-24 bg-dashboard-squares bg-[length:467px_463px] md:bg-[url()]" >
      <div className="flex flex-col items-center">
        <Avatar />
        <h1 className="text-4xl mt-6 md:mt-0 md:text-8xl/tight text-center w-[303px] md:w-full">Boas vindas, <span className="font-bold">Fulano de Tal</span></h1>
        <h3 className="text-lg mt-3 md:mt-0 md:text-3xl/tight font-thin text-slate-500">Que tal analisarmos seu GitHub?</h3>
      </div>

      <div className="flex content-start flex-col items-center md:items-start md:bg-dashboard-squares bg-no-repeat bg-[right_top_50px] md:bg-right-top min-h-[467px] w-full mt-6 mb:mt-10 md:bg-[length:600px_600px] ">
        <ul className="w-2/3 md:w-1/2 mx-auto md:mx-0 bg-white">
          <li className="border-t border-slate-300 flex justify-between items-center">
            <button className="flex justify-between items-center w-full h-full px-2 py-8">
                Meus Repositórios (0)
              <div className="text-violet-700">
                <Arrow />
              </div>
            </button>
          </li>
          <li className="border-t border-slate-300">
              <button className="flex justify-between items-center w-full h-full px-2 py-8">
                Meus Gists (0)
                <div className="text-violet-700">
                  <Arrow />
                </div>
              </button>
          </li>
          <li className="border-y border-slate-300 flex justify-between items-center">
            <button className="flex justify-between items-center w-full h-full px-2 py-8">
                Meus Seguidores (0)
              <div className="text-violet-700">
                <Arrow />
              </div>
            </button>
          </li>
        </ul>

        <button className="px-5 py-4 bg-black text-white flex justify-center gap-4 rounded-lg text-xl min-w-56 mt-16">
          Logout
        </button>
      </div>
    </section>
  )
}