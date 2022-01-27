import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import board from '/assets/scrum-board.svg';


const Login: NextPage = () => {
  return (
    <div className="bg-[#E5E5E5] h-[100vh] flex justify-between items-center flex-row-reverse">
      <div className="flex h-[100vh] w-[50%] flex items-center justify-center">

        <main className="bg-[#FFF] flex flex-col justify-around w-[35vw] items-start rounded-3xl gap-4 max-w-lg pt-20 pb-20 p-10 shadow-lg">
          <h1 className="text-[40px] text-[#7E2ADB] mb-6">Entre com sua conta <b>Educare</b></h1>
          <form action="" className="flex flex-col justify-center items-start w-full gap-y-2 mb-2">
            <label className="text-[#7E2ADB]">E-mail</label>
            <input type="email" className="w-full h-8 border-solid border-2 border-[#7E2ADB] rounded-md mb-2 px-2" />
            <label className="text-[#7E2ADB]">Senha</label>
            <input type="password" className="w-full h-8 border-solid border-2 border-[#7E2ADB] rounded-md mb-2 px-2" />
          </form>
          <div className="flex justify-between items-center w-full">

            <span className="text-[#646464] underline cursor-pointer">Esqueceu a senha?</span>
            <button className="bg-[#7E2ADB] text-white text-[20px] rounded-3xl w-[150px] h-[50px] shadow-lg">
              <Link href="/cadastro">
                Entrar
              </Link>
            </button>
          </div>
        </main>
      </div>

      <aside className="max-w-[50vw] pl-10 pt-10 w-[50%] h-[100vh] rounded-r-[40px] bg-cover bg-[url('../assets/waves-bg.png')] bg-no-repeat">
        <Link href="/" >
          <span className="text-[#fff] text-[45px] font-black cursor-pointer">Educare</span>
        </Link>
        <div className="flex w-full h-[70vh] items-center justify-end pr-1">
          <Image src={board} width="600px" height="400px" />
        </div>
      </aside>
    </div>

  )
}

export default Login;