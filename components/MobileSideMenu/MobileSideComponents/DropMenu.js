import styles from '../../../styles/MobileSideMenu/MobileSideMenu.module.scss';
import Link from "next/link";
import {MobileSideListLinks} from "./MobileSideList";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {MobileSideButtons} from "./MobileSideButtons";
import {showMobileMenu} from "../../../redux/ui/action";
import {showManageSubscriptions, showPlaySafe} from "../../../redux/popups/action";

export const DropMenu = ({t,el, isAuth}) => {
  const dispatch = useDispatch();

  const isShowMobileMenu = useSelector((state) => state.ui.isShowMobileMenu);
  const [isDropActive, setIsDropActive] = useState(false);

  function handleDropActive() {
    if (isDropActive) {
      setIsDropActive(false);
    } else {
      setIsDropActive(true);
    }
  }
  const manageSubscriptionHandler = (e) => {
    e.preventDefault();
    dispatch(showMobileMenu(false));
    dispatch(showManageSubscriptions(true));
  }
  const playSafeHandler = (e) => {
    e.preventDefault();
    dispatch(showMobileMenu(false));
    dispatch(showPlaySafe(true));
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
              } else if (innerEl.type === "block") {
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
              } else if (innerEl.type === "button") {
                if (innerEl.path === "/#manageSubscriptions") {
                  if (isAuth) {
                    return (
                      <div className={styles.dropMenuListItem} key={innerEl.id}>
                        <MobileSideButtons t={t} buttonData={innerEl} shouldDo={manageSubscriptionHandler}/>
                      </div>
                    )
                  } else {
                    return (
                      ""
                    )
                  }
                } else if (innerEl.path === "/#PlaySafe") {
                  return (
                    <div className={styles.dropMenuListItem} key={innerEl.id}>
                      <MobileSideButtons t={t} buttonData={innerEl} shouldDo={playSafeHandler}/>
                    </div>
                  )
                }

              }
            })
          }
        </div>
      </div>
    )

}
