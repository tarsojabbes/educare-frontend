import type { NextPage } from "next";
import Link from "next/link";
import BackIcon from "../assets/back-icon.png"
import Image from "next/image";

const Cadastro: NextPage = () => {
  return (
    <div className="h-[100vh]
    flex flex-col md:flex-row justify-between items-center
    bg-[#E5E5E5]">
      <div className="h-[100vh] w-[50%] md:w-[75%] xl:w-[50%] 
      flex flex-col items-center justify-end md:flex-row md:justify-center md:absolute md:left-0
      z-50">

        <main className="h-[90%] md:h-fit w-[90vw] sm:w-[80vw] md:w-[60vw] xl:w-[38vw] pt-20 pb-20 p-10
              flex flex-col justify-center items-center
              bg-[#FFF] rounded-t-3xl md:rounded-3xl shadow-lg">
                <div className="w-[100%] flex justify-start py-4">
                  <Link href="/">
                    <div className="w-[100%] flex justify-start">
                    <Image src={BackIcon} width="30px" height="30px"/>
                    <h3 className="text-[14px] md:text-[16px] pl-2 text-[#7E2ADB] flex items-center">Voltar ao início</h3>
                    </div>
                  </Link>
                </div>
          <h1 className="text-[30px] md:text-[36px] lg:text-[40px] text-[#7E2ADB]">
            Crie sua conta <span className="font-black">Educare</span>
          </h1>
          <form className="w-full flex flex-col justify-center items-start pt-4 pb-4">
            <label className="text-[#7E2ADB]">
              Nome
            </label>
            <input type="text" className="w-full h-[30px] md:h-[35px] mb-2 px-2 py-2
                  text-[12px] sm:text-[14px] md:text-[16px]
                  rounded-[8px] md:rounded-[12px]
                  border-solid border-2 border-[#7E2ADB] focus:outline-none" />
            <label className="text-[#7E2ADB]">
              E-mail
            </label>
            <input type="email" className="w-full h-[30px] md:h-[35px] mb-2 px-2 py-2
                  text-[12px] sm:text-[14px] md:text-[16px]
                  rounded-[8px] md:rounded-[12px]
                  border-solid border-2 border-[#7E2ADB] focus:outline-none" />
            <label className="text-[#7E2ADB]">
              Senha
            </label>
            <input type="password" className="w-full h-[30px] md:h-[35px] mb-2 px-2 py-2
                  text-[12px] sm:text-[14px] md:text-[16px]
                  rounded-[8px] md:rounded-[12px]
                  border-solid border-2 border-[#7E2ADB] focus:outline-none" />
          </form>
          <fieldset className="w-[100%] inline-flex flex-row justify-evenly items-center py-4">
                    <div>
                        <input type="radio" name="user-type"/>
                        <label htmlFor="student" className="text-[#7E2ADB]"> Sou aluno</label>
                    </div>
                    <div>
                        <input className="form-radio" type="radio" name="user-type"/>
                        <label htmlFor="teacher" className="text-[#7E2ADB]"> Sou professor</label>
                    </div>

                </fieldset>
          <div className="flex flex-col-reverse items-center justify-center md:flex-row md:justify-between md:items-center w-full py-4">
            <span className="text-[#646464] px-8 py-4">Já possui uma conta? <a className="underline text-[#7E2ADB] cursor-pointer">Entrar</a></span>
            <button className="h-[40px] md:h-[50px] w-[150px] md:w-[170px] min-w-fit px-8
                  text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]
                  rounded-[12px] md:rounded-[16px] lg:rounded-[20px] 
                  bg-[#7E2ADB] shadow-lg">
              <Link href="/#">
                Cadastre-se
              </Link>
            </button>
          </div>
        </main>
      </div>

      <aside className="h-[100vh] w-[100%] md:w-[25%] xl:w-[50%] 
      flex flex-col items-center justify-end md:flex-row md:justify-center absolute md:block md:right-0
      pl-10 pt-10 md:rounded-l-[40px] bg-cover bg-[url('../assets/waves-bg.png')] bg-no-repeat">
      </aside>
    </div>

  )
}

export default Cadastro;