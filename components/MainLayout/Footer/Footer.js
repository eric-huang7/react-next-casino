import styles from '../../../styles/Footer/Footer.module.scss'



export const Footer = ({t}) => {
  const linkKey = [
    {key: 'liveChat', route: '#', name: `Live Chat <span>7/24</span>>`}
  ]

  return (
    <footer className={styles.mainFooter}>
      <section className={styles.footerUpperBlock}>
        <ul>

        </ul>
      </section>
      <section className={styles.footerMiddleBlock}>

      </section>
      <section className={styles.footerLowerBlock}>

      </section>
    </footer>
  )
}