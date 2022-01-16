import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div>
      <nav className="w-full flex justify-between items-center pl-10 pr-10 pt-5 pb-5 absolute">
        <h1 className="text-[40px] text-[#7E2ADB] font-sans font-black">Educare</h1>
        <div>
          <Link href="/login">
            <a className="text-[20px] text-[#7E2ADB] font-sans pr-7">
            Entrar
            </a>
          </Link>
          <button className="bg-[#7E2ADB] text-white text-[20px] rounded-[19px] w-[180px] h-[50px] font-sans shadow-lg">
          <Link href="/cadastro">
            Cadastre-se
          </Link>
          </button>
        </div>
      </nav>

      <div className='w-full h-screen flex justify-center items-center'>
        <div className="h-screen flex-col justify-center items-start">
          <h1>Lorem ipsum sit dolor amet</h1>
        </div>
        <div>

        </div>
      </div>

    </div>
  )
}

export default Home
