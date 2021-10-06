import styles from '../../../../styles/ContactUs/FAQInnerInfo.module.scss'

import {useState} from "react";

export const FaqInnerInfoDropdown = ({t, heading, text}) => {

  const [activeMenu, setActiveMenu] = useState(false);

  function openMenu() {
    if (activeMenu) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }

  return (
    <div onClick={() => openMenu()} className={`${styles.faqItemInnerInfo} ${activeMenu ? styles.active : ''}`}>
      <h3 className={styles.faqItemInnerInfoHeading}>{heading}</h3>
      <div className={`${styles.itemInnerInfoText} ${activeMenu ? styles.activeText : ''}`}>
        <p>{text}</p>
      </div>
    </div>
  )
}