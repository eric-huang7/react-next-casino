import styles from '../../../styles/MenuModal/MenuModal.module.scss'
import {GrClose} from "react-icons/gr";
import Link from "next/link";
import {useTranslation} from "next-i18next";

const MenuModal = ({ open, onClose }) => {
  const { t } = useTranslation('common')
  const linksKey = [
    { key: 'home', route: '/' },
    { key: 'promotions', route: '/promotions' },
    { key: 'contactUs', route: '/contactUs' },
    { key: 'termsAndConditions', route: '/termsAndConditions' },
    { key: 'aboutUs', route: '/aboutUs' },
  ]

  const contacts = [
    { key: 'liveChat', route: '/#livechat', name: `LiveChat` },
    { key: 'tel', route: '/#tel', name: `Tel:7-55-7-99-8-487` },

  ]
  const rightMenu = [
    { key: 'faqs', route: '/contactUs#faq', name: `FAQs` },
    { key: 'contactUs', route: '/contactUs', name: `ContactUs` },
    { key: 'privacyPolicy', route: '/privacy-policy', name: `privacyPolicy` },
    { key: 'paymentsMethods', route: '/paymentsMethods', name: `paymentsMethods` },
    { key: 'whyUseCrypto', route: '/whyUseCrypto', name: `whyUseCrypto` },
    { key: 'promotions', route: '/promotions', name: `promotions` },
    { key: 'termsAndConditions', route: '/termsAndConditions', name: `TermsAndConditions` },
  ]

  return (
    <div className={`${styles.menuContainer} ${open ? styles.open : ''}`} onClick={onClose}>
      <div className={styles.menuItem1} style={{transform: open ? 'translate(0%, 0%)' : 'translate(0px, -101%)'}}>
        <div className={styles.itemInner} style={{transform: open ? 'translate(0%, 0%)': 'translate(0%, 101%)'}}>
          <nav className={styles.headerNavbar}>
            <ul className={styles.headerNavbarList}>
              {linksKey.map((link) => {
                return (
                  <li key={link.key} className={styles.headerNavbarListItem}>
                    <Link href={link.route}>
                      {
                        t(`header.navbarLinks.${link.key}`)
                      }
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.menuItem2} style={{transform: open ? 'translate(0%, 0%)' : 'translate(0px, 101%)'}}>
        <div className={styles.itemInner} style={{transform: open ? 'translate(0%, 0%)' : 'translate(0%, -101%)'}}>
          <nav className={styles.headerNavbar}>
            <ul className={styles.rightNavbarList}>
              {rightMenu.map((link) => {
                return (
                  <li key={link.key} className={styles.rightNavbarListItem}>
                    <Link href={link.route}>
                      {
                        t(`footer.${link.name}`)
                      }
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <nav className={styles.headerNavbar} style={{marginTop: 80}}>
            <ul className={styles.contactNavbarList}>
              {contacts.map((link) => {
                return (
                  <li key={link.key} className={styles.contactNavbarListItem}>
                    <Link href={link.route}>
                      {
                        t(`footer.${link.name}`)
                      }
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.menuClose} onClick={onClose}>
        <GrClose size={30} />
      </div>
    </div>
  )
}

export default MenuModal;
