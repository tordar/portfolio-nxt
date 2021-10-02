import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/dist/client/link';
import Card from '../../components/Card';



export default function About() {
    
  return (
    <div>
    <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        ABOUT PAGE
        </div>
    </div>
  )
}
