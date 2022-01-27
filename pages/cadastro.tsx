import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import creuza from '/assets/creuza-dos-data-science.svg';


const Cadastro: NextPage = () => {
  return (
    <div className="bg-[#E5E5E5] h-[100vh] flex justify-between items-center">
      <div className="flex h-[100vh] w-[50%] flex items-center justify-center">

        <main className="bg-[#FFF] flex flex-col justify-around items-start rounded-3xl gap-4 max-w-lg p-10 shadow-lg">
          <h1 className="text-[40px] text-[#7E2ADB]">Crie sua conta <b>Educare</b></h1>
          <form action="" className="flex flex-col justify-center items-start w-full gap-y-2 mb-2">
            <label className="text-[#7E2ADB]">Nome</label>
            <input type="text" className="w-full h-8 border-solid border-2 border-[#7E2ADB] rounded-md mb-2 px-2" />
            <label className="text-[#7E2ADB]">E-mail</label>
            <input type="email" className="w-full h-8 border-solid border-2 border-[#7E2ADB] rounded-md mb-2 px-2" />
            <label className="text-[#7E2ADB]">Senha</label>
            <input type="password" className="w-full h-8 border-solid border-2 border-[#7E2ADB] rounded-md mb-2 px-2" />
            <label className="text-[#7E2ADB]">Curso</label>
            <input type="text" className="w-full h-8 border-solid border-2 border-[#7E2ADB] rounded-md mb-2 px-2" />
          </form>
          <div className="flex justify-between items-center w-full">

            <span className="text-[#646464]">Já possui uma conta? <a className="underline text-[#7E2ADB] cursor-pointer">Entrar</a></span>
            <button className="bg-[#7E2ADB] text-white text-[20px] rounded-3xl w-[180px] h-[50px] shadow-lg">
              <Link href="/cadastro">
                Cadastre-se
              </Link>
            </button>
          </div>
        </main>
      </div>

      <aside className="max-w-[50vw] pl-10 pt-10 w-[50%] h-[100vh] rounded-l-[40px] bg-cover bg-[url('../assets/waves-bg.png')] bg-no-repeat">
        <Link href="/" >
          <span className="text-[#fff] text-[45px] font-black cursor-pointer">Educare</span>
        </Link>
        <div className="flex w-full h-[80vh] items-end justify-end">
          <Image src={creuza} width="500px" height="500px" />
        </div>
      </aside>
    </div>

  )
}

export default Cadastro;