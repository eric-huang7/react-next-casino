import styles from '../../../../styles/ContactUs/FAQ.module.scss'

import Image from "next/image";
import {useState} from "react";
import {FaqInnerInfoDropdown} from "./FaqInnerInfoDropdown";

export const FaqDropdownItem = ({t, heading, img, innerInfo}) => {
  const active = true;

  const [activeMenu, setActiveMenu] = useState(false);

  function openMenu() {
    if (activeMenu) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }

  return (
    <div className={`${styles.faqItemMainBlock} ${activeMenu ? styles.active : ''}`}>
      <img src={img} alt={`icon ${heading}`}/>
      <div className={styles.faqItemMainBlockWrapper}>
        <div className={styles.faqItemMainBlockHeadingWrapper} onClick={() => openMenu()}>
          <h3 className={styles.faqItemMainBlockHeading}>{heading}</h3>
        </div>
        <ul className={`${styles.innerInfoList} ${activeMenu ? styles.activeInnerInfoList : ''}`}>
          {
            innerInfo.map((el) => {
              return (
                <li key={el.id} className={styles.innerInfoListItem}>
                  <FaqInnerInfoDropdown heading={el.heading} text={el.text} t={t} />
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}