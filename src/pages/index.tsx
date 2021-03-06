import styles from '../styles/pages/Home.module.css'

import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import CoverPage from '../components/CoverPage'
import Loader from '../components/Loader'
import Option from '../components/Option'
import ListCard from '../components/ListCard'

import { HandlerDelayApresentation } from '../services/generic'

const Home: NextPage = () => {
  // States for presentation
  const [showApresentation, setShowApresentation] = useState(true)
  const [showLoader, setShowLoader] = useState(false)
  const [showOptions, setShowOptions] = useState(false)

  // States for options
  const [openListCard, setOpenListCard] = useState(false)

  // States for product list
  const [addedItems, setAddedItems] = useState(new Array)

  function originalState(): void {
    console.log('exec')
    setOpenListCard(false)
    setShowLoader(false)
    setShowOptions(true)
  }

  function handlerOptionList(): void {
    setShowOptions(false)
    setOpenListCard(true)
  }

  useEffect(() => {
    async function handlerDelayApresentation() {
      const apresentation: boolean = await HandlerDelayApresentation(showApresentation)
      setShowApresentation(apresentation)
      setShowLoader(true)
      const loader: boolean = await HandlerDelayApresentation(showApresentation, 3800)
      setShowLoader(loader)
      setShowOptions(true)
    }
    handlerDelayApresentation()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Virgo - eCommerce</title>
      </Head>
      
      {/***  Title ***/}
      {!showApresentation && !showLoader && <h1 className={styles.title} onClick={_ => originalState()}>Virgo</h1>}

      {/*** Presentation ***/}
      {showApresentation && <CoverPage /> }

      {/***  Loader ***/}
      {showLoader && <Loader />}

      {/*** Options ***/}
      {showOptions &&
        <div className={styles.containerOptions}>
          {/*** Options select ***/}
          <Option title="Lista de Produtos" Func={handlerOptionList} />
          <Option title="Carrinho" />
        </div>  
      }

      {/*** Cards  ***/}
      {openListCard && 
        <>
            <span className={styles.listQtd}>Carrinho: {addedItems.length}</span>
            <ListCard addedItems={[addedItems, setAddedItems]} />
        </>
      }
    </div>
  )
}

export default Home
