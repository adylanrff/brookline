import styles from '../styles/Home.module.css'

export default function MainPage() {
  return (
    <div className={styles.container}>
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <img className={styles.logoImg} src='/brookline.png' />
                <p className={styles.logoText}>Brookline</p>
            </div>
        </div>
        <div className={styles.base}>

        </div>
        <div className={styles.detail}>

        </div>
    </div>
  )
}
