import styles from './RefreshBtn.module.css'

type RefreshBtnProps = {
	onClick: () => void
}

export function RefreshBtn({onClick}: RefreshBtnProps){
	return <button className={styles.btn} onClick={onClick}>Start again</button>
}