import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {


  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.containerLeft}>
        <div className={styles.left}>
          <Image className={styles.image} src='https://live.staticflickr.com/65535/51582220598_aa78eea24c_k.jpg' width='2048px' height='1153px'/>
        </div>
        <div className={styles.right}>
          <h4>Fullstack developer in the making</h4>
        </div>
      </div>
      <div className={styles.containerRight}>
        <div className={styles.left}>
            <h4>Fullstack developer in the making</h4>        
          </div>
        <div className={styles.right}>
          <Image className={styles.image} src='https://live.staticflickr.com/65535/51582064381_b78b2270d0_k.jpg' width='2048px' height='1374px'/>
        </div>
      </div>
      </div>
  )
}
