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
        <link
          href="https://fonts.googleapis.com/css2?family=Krona+One&display=optional"
          rel="stylesheet"
        />
      </Head>
  <div className={styles.container}>
      <div className={styles.containerLeft}>
        <div className={styles.left}>
          <Image className={styles.image} src='https://live.staticflickr.com/65535/51582220598_aa78eea24c_k.jpg' width='2048px' height='1153px'/>
        </div>
        <div className={styles.right}>
          <h4 className={styles.content}>Fullstack developer</h4>
        </div>
      </div>

      <div className={styles.containerRight}>
        <div className={styles.left}>
            <h4 className={styles.content}>Passionate about learning and continuing to break the mold</h4>        
          </div>
        <div className={styles.right}>
          <Image className={styles.image} src='https://live.staticflickr.com/65535/51582064381_b78b2270d0_k.jpg' width='2048px' height='1374px'/>
        </div>
    </div>
        <div className={styles.containerLeft}>
        <div className={styles.left}>
          <Image className={styles.image} src='https://live.staticflickr.com/65535/51582760604_d26435c449_k.jpg' width='2048px' height='1374px'/>
        </div>
        <div className={styles.right}>
          <h4 className={styles.content}>Self-taught developer, with a bachelors in International Relations, and experience in humanitarian work</h4>
        </div>
      </div>
      </div>
      
      </div>
  )
}
