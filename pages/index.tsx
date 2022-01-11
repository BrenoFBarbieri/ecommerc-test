import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Virgo - eCommerce</title>
      </Head>
      <div className={styles.containerTitle}>
        <h1>
          Olá, bem-vindo ao Virgo!
        </h1>
        <span className={styles.subTitleAnimation}>Agradecemos sua preferência : )</span>
      </div>
    </div>
  )
}

export default Home
