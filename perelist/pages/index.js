import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
    
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>sndfjfbjfnjvnvkfvmkfmde3kfmekdfmdkf</p>
      <p className={styles.text}>sndfjfbjfnjvnvkfvmkfmde3kfmekdfmdkf</p>
      <Link legacyBehavior href="/peres">
        <a className={styles.btn}>See ninja listing</a>
      </Link>
     
    </div>
  )
}
