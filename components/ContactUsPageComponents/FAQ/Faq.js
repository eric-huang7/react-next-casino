import styles from '../../../styles/ContactUs/FAQ.module.scss'
import { data } from './faqData'
import { FaqDropdownItem } from './FaqDropdownItem/FaqDropdownItem'

export const Faq = ({ t }) => {

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqInnerWrapper}>
        <h2 id={'faq'} className={styles.faqHeading}>FAQ</h2>
        <ul className={styles.faqItemsList}>
          {
            data.map((el) => {
              return (
                <li key={el.id} className={styles.faqItem}>
                  <FaqDropdownItem
                    t={t}
                    heading={el.heading}
                    img={el.img}
                    innerInfo={el.innerInfo}
                  />
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}