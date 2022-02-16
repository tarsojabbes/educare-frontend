import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Image1 from '/assets/principal-main-page.png'


const Home: NextPage = () => {
  return (
    <div >
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

      <div className='w-full h-screen
          flex flex-col-reverse justify-center items-center lg:flex-row 
          pl-8 pr-8 pt-16 xl:pl-32 xl:pr-32 lg:pl-16 lg:pr-16'>
            <div className="h-fit w-[100%] lg:w-[50%] lg:h-screen flex flex-col justify-center items-start pb-28">
              <h1 className="w-[100%] sm:w-[70%] md:w-[70%] lg:w-[500px] pb-4
                font-bold text-[#7E2ADB] text-[34px] sm:text-[44px] md:text-[55px]">
                  Lorem ipsum sit dolor amet.
              </h1>
              <h2 className="w-[100%] sm:w-[70%] md:w-[50%] lg:w-[400px] pb-5
              text-[#646464] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
                  Lorem ipsum sit dolor amet lux elementum et laoreet.
              </h2>
              <button className="w-[200px] md:w-[230px] h-[40px] md:h-[50px]
                  text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] 
                    rounded-[12px] md:rounded-[16px] lg:rounded-[19px] 
                  bg-[#7E2ADB] shadow-lg">
                      <Link href="/cadastro">
                        Quero aprender
                      </Link>
              </button>
            </div>
            <div className="h-fit w-[100%] lg:h-screen lg:w-[50%] lg:pt-0 
                  flex flex-row justify-center items-center">
                    <Image src={Image1} width="771px" height="720px" />
            </div>
      </div>

    </div>
  )
}

export default Home
