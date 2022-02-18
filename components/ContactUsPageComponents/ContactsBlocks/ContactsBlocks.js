import styles from '../../../styles/ContactUs/ContactsBlocks.module.scss'

export const ContactsBlocks = ({ t }) => {
  let blocksInfo = [
    {
      id: 1,
      heading: 'contactUsPage.contactsBlock.liveChat.heading',
      text: 'contactUsPage.contactsBlock.liveChat.textInfo'
    },
    {
      id: 2,
      heading: 'contactUsPage.contactsBlock.email.heading',
      text: 'contactUsPage.contactsBlock.email.textInfo'
    },
    {
      id: 3,
      heading: 'contactUsPage.contactsBlock.phone.heading',
      text: 'contactUsPage.contactsBlock.phone.textInfo'
    },
  ]

  return (
    <section className={styles.contactsSection}>
      <div className={styles.contactsInnerWrapper}>
        {
          blocksInfo.map((el) => {
            return (
              <div key={el.id} className={styles.contactItem}>
                <div className={styles.contactFrame}>
                  <div className={styles.contactTextBlock}>
                    <h3>
                      {t(el.heading)}
                    </h3>
                    <p>
                      {t(el.text)}
                    </p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}