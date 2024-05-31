import Head from 'next/head'
import { Inter } from 'next/font/google'
import { FiTwitter, FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
import { useRouter } from 'next/router'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const Router = useRouter();

  return (
    <>
      <Head>
        <title>aryansingh</title>
        <meta name="description" content="Portfolio by Aryan Singh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black h-screen flex flex-col justify-center items-center text-gray-300 font-bold text-3xl w-full bg-clip-border">
        <div className="text-center font-mono">
          v2 coming soon...
        </div>
        <div className="flex flex-row justify-center mt-8 gap-6">
          <div><Link href="https://twitter.com/meltedhyperion"><FiTwitter /></Link></div>
          <div><Link href="https://www.linkedin.com/in/meltedhyperion/"><FiLinkedin/></Link></div>   
          <div><Link href="https://instagram.com/aryansingh.dev"><FiInstagram/></Link></div>
          <div><Link href="https://github.com/meltedhyperion"><FiGithub /></Link></div>
        </div>
      </main>
    </>
  )
}
