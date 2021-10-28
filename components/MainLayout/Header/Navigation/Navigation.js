import Link from 'next/link'
import {useTranslation} from "next-i18next";

import styles from '../../../../styles/Header/Navigation.module.scss';
import {useState} from "react";


export const Navigation = ({t}) => {
  const linksKey = [
    {key: 'home', route: '/'},
    {key: 'promotions', route: '/promotions'},
    {key: 'contactUs', route: '/contactUs'},
    {key: 'termsAndConditions', route: '/termsAndConditions'},
    {key: 'aboutUs', route: '/aboutUs'},
  ]
  const termsConditionsLinks = [
    {key: "termsAndConditionsInner", name: "header.termsAndConditionsLinks.termsAndConditions", route: '/termsAndConditions'},
    {key: "responsibleGamingInner", name: "header.termsAndConditionsLinks.responsibleGaming", route: '/termsAndConditions/responsibleGambling'},
    {key: "kycPolicy", name: "header.termsAndConditionsLinks.kycPolicy", route: '/termsAndConditions/kycpolicy'},
    {key: "amlPolicy", name: "header.termsAndConditionsLinks.amlPolicy", route: '/termsAndConditions/amlpolicy'}
  ]

  const [isTermsPopupActive, setIsTermsPopupActive] = useState(false);

  const termsPopupClickHandler = (e) => {
    e.preventDefault();
    if (isTermsPopupActive) {
      setIsTermsPopupActive(false);
    } else {
      setIsTermsPopupActive(true);
    }
  }

  return (
    <nav className={styles.headerNavbar}>
      <ul className={styles.headerNavbarList}>
        {linksKey.map((link) => {
          if (link.key === 'termsAndConditions') {
            return (
              <li key={link.key} className={`${styles.headerNavbarListItem} ${styles.headerNavbarTerms}`}>
                <a
                  onClick={(e) => termsPopupClickHandler(e)}
                  className={styles.termsConditionsLink}
                >
                  {
                    t(`header.navbarLinks.${link.key}`)
                  }
                </a>
                <ul className={`${styles.termsConditionsPopup} ${isTermsPopupActive ? styles.termsConditionsPopupActive : '' }`}>
                  {
                    termsConditionsLinks.map((el) => {
                      return (
                        <li key={el.key} className={styles.termsConditionsPopupItem}>
                          <Link href={el.route}>
                            <a onClick={() => setIsTermsPopupActive(false)}>
                              {
                                t(el.name)
                              }
                            </a>
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
            )
          } else {
            return(
              <li key={link.key} className={styles.headerNavbarListItem}>
                <Link  href={link.route}>
                  {
                    t(`header.navbarLinks.${link.key}`)
                  }
                </Link>
              </li>
            )
          }

        })}
      </ul>
    </nav>
  )
}

