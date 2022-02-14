import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import board from '/assets/scrum-board.svg';


const Login: NextPage = () => {
  return (
    <div className="bg-[#E5E5E5] h-[100vh] flex justify-between items-center flex-row-reverse">
      <div className="h-[100vh] w-[50%] flex items-center justify-center">

        <main className="bg-[#FFF] flex flex-col justify-around w-[38vw] items-start rounded-3xl gap-4 max-w-lg pt-20 pb-20 p-10 shadow-lg">
          <h1 className="text-[40px] text-[#7E2ADB] mb-6">Entre com sua conta <span className="font-black">Educare</span></h1>
          <form action="" className="flex flex-col justify-center items-start w-full gap-y-2 mb-2">
            <label className="text-[#7E2ADB]">E-mail</label>
            <input type="email" className="w-full h-8 border-solid border-2 border-[#7E2ADB] rounded-[10px] mb-2 px-2 focus:outline-none" />
            <label className="text-[#7E2ADB]">Senha</label>
            <input type="password" className="w-full h-8 border-solid border-2 border-[#7E2ADB] rounded-[10px] mb-2 px-2 focus:outline-none" />
          </form>
          <div className="flex justify-between items-center w-full">

          <span className="text-[#646464]">Não possui uma conta? <br/><a className="underline text-[#7E2ADB] cursor-pointer">Cadastre-se</a></span>
            <button className="bg-[#7E2ADB] text-white text-[20px] rounded-[20px] w-[150px] h-[50px] shadow-lg">
              <Link href="/#">
                Entrar
              </Link>
            </button>
          </div>
        </main>
      </div>

      <aside className="max-w-[50vw] pl-10 pt-10 w-[50%] h-[100vh] rounded-r-[40px] bg-cover bg-[url('../assets/waves-bg.png')] bg-no-repeat">
        
      </aside>
    </div>

  )
}

export default Login;