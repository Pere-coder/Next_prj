import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import Link from 'next/link'
import Ninjas from './peres'

export default function Home() {
  return (
    <>
      <Head>
           <title>Ninja List | Home</title> 
           <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
      
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>welcome to my test home page.</p>
        <p className={styles.text}>Basically i am testing out Next js functionalities</p>
        <Link legacyBehavior href="/peres">
          <a className={styles.btn}>See ninja listing</a>
        </Link>
      
      </div>
    </>
  )
}
