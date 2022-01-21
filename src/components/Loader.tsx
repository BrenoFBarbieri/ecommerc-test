import styles from '../styles/components/Loader.module.css'

const Loader = () => {
    return (
        <div className={styles.centered}>
            <div className={styles.blob1}></div>
            <div className={styles.blob2}></div>
        </div>
    )
}

export default Loader