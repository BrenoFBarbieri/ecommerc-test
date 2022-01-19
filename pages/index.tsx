import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import CoverPage from '../components/CoverPage'
import Option from '../components/Option'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Virgo - eCommerce</title>
      </Head>

      <h1 className={styles.title}>Virgo</h1>

      {/*** Presentation ***/}
      {/* <CoverPage /> */}

      {/*** Options select ***/}
      {/* <Option title="Lista de Produtos" />
      <Option title="Carrinho" /> */}
    </div>
  )
}

export default Home
