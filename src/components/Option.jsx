import styles from '../styles/components/Option.module.css'

const Option = (props) => {
    return (
        <div className={styles.container} onClick={_ => props.Func()}>
            <h4>{props.title}</h4>
        </div>
    )
}

export default Option