import { GithubLoginButton } from "@/components";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await getServerSession(authOptions);
  
  if (session) {
    return redirect('/dashboard')
  }

  return (
    <main className="px-4 min-h-screen bg-home-mobile md:bg-home-desktop bg-no-repeat bg-[center_bottom_-70px] sm:bg-[center_bottom_-50px] md:bg-contain  md:bg-left flex items-center justify-center">
      <section className="container w-full max-w-[1043px] mx-auto flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl/tight text-center">Desbloqueie o poder da <span className="font-semibold">Análise do GitHub</span></h1>
        
        <p className="text-xl/6 font-light text-foreground text-center mt-9">Eleve o desenvolvimento de software com análises automáticas do GitHub, revelando métricas e KPIs inestimáveis para aprimorar a entrega e a qualidade do software.</p>
              
        <GithubLoginButton />     
      </section>
    </main>
    
  );
}
