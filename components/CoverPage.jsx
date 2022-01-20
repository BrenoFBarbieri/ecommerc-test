import styles from '../styles/components/CoverPage.module.css'

const CoverPage = () => {
    return (
        <div className={styles.containerTitle}>
            <h1>
            Olá, bem-vindo ao Virgo!
            </h1>
            <span className={styles.subTitleAnimation}>Agradecemos sua preferência : )</span>
        </div>
    )
}

export default CoverPage