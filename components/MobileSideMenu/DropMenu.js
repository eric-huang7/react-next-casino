import styles from '../../styles/MobileSideMenu/MobileSideMenu.module.scss';
import Link from "next/link";
import {MobileSideListLinks} from "./MobileSideList";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export const DropMenu = ({t,el}) => {
  const isShowMobileMenu = useSelector((state) => state.showMobileMenu.isShow);
  const [isDropActive, setIsDropActive] = useState(false);

  function handleDropActive() {
    if (isDropActive) {
      setIsDropActive(false);
    } else {
      setIsDropActive(true);
    }
  }

  useEffect(() => {
    if (!isShowMobileMenu) {
      setIsDropActive(false);
    }
  }, [isShowMobileMenu])

  const liveChatClick = (e) => {

    e.preventDefault();
    const liveChatButton = document.getElementById('lhc_status_widget_v2').contentWindow.document.body.childNodes[0];
    liveChatButton.click();
    console.log(liveChatButton, '!!!!!!!!!!!!!!!!!!!!SSS');
  }


  return (

      <div
        className={`${styles.wrapperItemsDrop} ${isDropActive && isShowMobileMenu ? '' : styles.dropHide}`}
      >
        <p onClick={() => handleDropActive()}>{t(el.name)}</p>
        <div className={styles.dropMenu}>
          {
            el.blockData.map((innerEl) => {
              if (innerEl.type === "link") {
                return (
                  <div className={styles.dropMenuListItem} key={innerEl.id}>
                    <MobileSideListLinks t={t} dataList={innerEl}/>
                  </div>
                )
              } else {
                return (
                  <div className={styles.helpMenuBlock} key={innerEl.id}>
                    <p className={styles.helpMenuHeading}>
                      <img src='/assets/img/mobileSideMenu/helpPremium.svg' alt="help premium icon"/>
                      {t(innerEl.name)}</p>
                    <p className={styles.helpMenuInfo}>{t(innerEl.info)}</p>
                    <div className={styles.helpMenuLinksWrapper}>
                      {innerEl.blockData.map((links) => {
                        if (links.path === "#liveChat") {
                          return (
                            <div className={styles.helpMenuLinkBlock} key={links.id}>
                              <Link href={links.path}>
                                <a onClick={(e) => liveChatClick(e)} className={styles.helpMenuLinks}>
                                  {t(links.name)}
                                </a>
                              </Link>
                            </div>
                          )
                        } else {
                          return (
                            <div className={styles.helpMenuLinkBlock} key={links.id}>
                              <Link href={links.path}>
                                <a className={styles.helpMenuLinks}>
                                  {t(links.name)}
                                </a>
                              </Link>
                            </div>
                          )
                        }
                      })}
                    </div>
                  </div>
                )
              }
            })
          }
        </div>
      </div>
    )

}