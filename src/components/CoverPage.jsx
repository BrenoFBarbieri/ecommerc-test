import styles from '../styles/components/CoverPage.module.css'
import { useEffect, useState } from 'react'

import { HandlerDelayApresentation } from '../services/generic'

const CoverPage = () => {
    const [delayMsg, setDelayMsg] = useState(false)

    useEffect(() => {
        async function handlerDelayApresentation() {
            const bool = await HandlerDelayApresentation(delayMsg, 1500)
            setDelayMsg(bool)
            console.log('Exec')
        }
        handlerDelayApresentation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={styles.containerTitle}>
            <h1> Olá, bem-vindo ao Virgo!</h1>
            {delayMsg &&
                <span className={styles.subTitleAnimation}>
                    Agradecemos sua preferência :)
                </span>
            }
        </div>
    )
}

export default CoverPage