import styles from '../styles/components/Option.module.css'

const Option = (props) => {
    return (
        <div className={styles.container}>
            <h4>{props.title}</h4>
        </div>
    )
}

export default Option