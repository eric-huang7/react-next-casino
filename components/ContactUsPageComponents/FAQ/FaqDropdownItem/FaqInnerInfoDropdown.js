import styles from '../../../../styles/ContactUs/FAQInnerInfo.module.scss'

import {useState} from "react";

export const FaqInnerInfoDropdown = ({t, heading, text, menuShown}) => {

  const [activeMenu, setActiveMenu] = useState(false);

  function openMenu() {
    if (activeMenu) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }

  return (
    <div  className={styles.faqItemInnerInfo}>
      <h3
        onClick={() => openMenu()}
        className={`${styles.faqItemInnerInfoHeading} ${menuShown ? styles.showMenuPoints : ''} ${activeMenu && menuShown ? styles.menuActive : ''}`}
      >
        {t(heading)}
      </h3>
      <div className={`${styles.itemInnerInfoText} ${activeMenu ? styles.activeText : ''}`}>
        <p>{t(text)}</p>
      </div>
    </div>
  )
}