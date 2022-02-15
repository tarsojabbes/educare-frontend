import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Image1 from '/assets/principal-main-page.png'


const Home: NextPage = () => {
  return (
    <div>
      <nav className="w-full flex justify-between items-center pl-8 lg:pl-10 pr-10 pt-5 pb-5 absolute">
        <h1 className="text-[40px] text-[#7E2ADB] font-black">Educare</h1>
        <div className="hidden md:block">
          <Link href="/login">
            <a className="text-[20px] text-[#7E2ADB] pr-7">
            Entrar
            </a>
          </Link>
          <button className="bg-[#7E2ADB] text-white text-[20px] rounded-[19px] w-[180px] h-[50px] shadow-lg">
          <Link href="/cadastro">
            Cadastre-se
          </Link>
          </button>
        </div>
      </nav>

      <div className='w-full h-screen flex flex-col-reverse justify-center items-center lg:flex-row pl-8 pr-8 xl:pl-32 xl:pr-32 lg:pl-16 lg:pr-16'>
        <div className="lg:h-screen h-fit lg:w-[50%] w-[100%] flex flex-col justify-center items-start">
          <h1 className="font-bold text-[34px] sm:text-[44px] md:text-[55px] text-[#7E2ADB] w-[100%] sm:w-[70%] md:w-[70%] lg:w-[500px] pb-4">Lorem ipsum sit dolor amet.</h1>
          <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#646464] w-[100%] sm:w-[70%] md:w-[50%] lg:w-[400px] pb-5">Lorem ipsum sit dolor amet lux elementum et laoreet.</h2>
          <button className="bg-[#7E2ADB] text-white ext-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] rounded-[12px] md:rounded-[16px] lg:rounded-[19px] w-[200px] md:w-[230px] h-[40px] md:h-[50px] shadow-lg">
          <Link href="/cadastro">
            Quero aprender
          </Link>
          </button>
        </div>
        <div className="lg:h-screen h-fit w-[100%] lg:w-[50%] lg:pt-0 flex flex-row justify-center items-center">
          <Image src={Image1} width="771px" height="720px" />
          </div>
      </div>

    </div>
  )
}

export default Home
