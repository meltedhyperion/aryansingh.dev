import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import dp from "../assets/Aryan.jpg"
import { FiTwitter,FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
import { useRouter } from 'next/router'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home({props}: any) {
  const Router = useRouter();

  return (
    <>
      <Head>
        <title>Aryan</title>
        <meta name="description" content="Portfolio by Aryan Singh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-gradient-to-r from-green-400 to-blue-500 h-screen flex justify-between text-gray-300 font-bold text-3xl w-full bg-clip-border	">
      <div className="flex flex-col ">
        <div className="flex justify-between items-center">
          <div className="p-8 "><Image alt="profile" className='rounded-full' src = {dp} height={400} width={400} /> </div>
          <div className="font-semibold  text-[8rem]">Hey, I&apos;m Aryan</div>
        </div>
        <div className="font-semibold text-[8rem] mt-[8rem] px-8">I am a <span className="text-red-500">backend</span> developer</div>
      </div>
      <div className="flex flex-col justify-end p-10">
        <div className="flex flex-col gap-16 ">
        <div className=""><Link href={`https://twitter.com/meltedhyperion`}><FiTwitter /></Link></div>
        <div className=""><Link href={`https://www.linkedin.com/in/aryan-singh-337699221/`}><FiLinkedin/></Link></div>   
        <div className=""><Link href={`https://instagram.com/aryansingh.dev`}><FiInstagram/></Link></div>
        <div className=""><Link href={`https://github.com/meltedhyperion`}><FiGithub /></Link></div>
        </div>
        
      </div>
      </main>
    </>
  )
}

// export async function getServerSideProps() {
//   return {
//     props: {data:"Aryan"}, 
//   }
// }
