import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Image1 from '/assets/principal-main-page.png'


const Home: NextPage = () => {
  return (
    <div>
      <nav className="w-full flex justify-between items-center pl-10 pr-10 pt-5 pb-5 absolute">
        <h1 className="text-[40px] text-[#7E2ADB] font-black">Educare</h1>
        <div>
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

      <div className='w-full h-screen flex pl-32'>
        <div className="h-screen w-[50%] flex flex-col justify-center items-start">
          <h1 className="font-bold text-[55px] text-[#7E2ADB] w-[500px] pb-4">Lorem ipsum sit dolor amet.</h1>
          <h2 className="text-[20px] text-[#646464] w-[400px] pb-5">Lorem ipsum sit dolor amet lux elementum et laoreet.</h2>
          <button className="bg-[#7E2ADB] text-white text-[20px] rounded-[19px] w-[230px] h-[50px] shadow-lg">
          <Link href="/cadastro">
            Quero aprender
          </Link>
          </button>
        </div>
        <div className="h-screen w-[50%] flex flex-col justify-center items-center pr-32">
          <Image src={Image1} width="771px" height="720px"/>
          </div>
      </div>

    </div>
  )
}

export default Home
