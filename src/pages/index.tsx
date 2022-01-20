import styles from '../styles/pages/Home.module.css'

import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import CoverPage from '../components/CoverPage'
import Option from '../components/Option'
import ListCard from '../components/ListCard'

import { HandlerDelayApresentation } from '../services/generic'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Virgo - eCommerce</title>
      </Head>

      {/*** Presentation ***/}
      <CoverPage />
      
      {/* <h1 className={styles.title}>Virgo</h1> */}
      {/*** Options select ***/}
      {/* <Option title="Lista de Produtos" /> */}
      {/* <Option title="Carrinho" /> */}

      {/*** Card  ***/}
      {/* <ListCard />  */}
    </div>
  )
}

export default Home
