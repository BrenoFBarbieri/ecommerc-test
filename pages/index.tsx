import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

import CoverPage from '../components/CoverPage'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Virgo - eCommerce</title>
      </Head>
      <CoverPage />
    </div>
  )
}

export default Home
