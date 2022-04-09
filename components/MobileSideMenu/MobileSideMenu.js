import Image from 'next/image'
import styles from '../../styles/MobileSideMenu/MobileSideMenu.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { showMobileMenu } from '../../redux/actions/sideMobileMenuShow'
import { MobileListContainer } from './MobileSideComponents/MobileListContainer'
import { LogoutButtonMobileMenu } from './MobileSideComponents/LogoutButtonMobileMenu'
import { UserInfoBlock } from './MobileSideComponents/UserInfoBlock'
import { SideLagSwitcherWrapper } from './MobileSideComponents/SideLagSwitcherWrapper'
import { SideMenuLogo } from './MobileSideComponents/SideMenuLogo'
import { SideMenuCloseComponent } from './MobileSideComponents/SideMenuCloseComponent'
import ErrorEmpty from '../ErrorBoundaryComponents/ErrorEmpty'

const socilaLinks = [
  { key: 'facebook', href: '#facebook', img: '/assets/img/mobileSideMenu/facebook.svg' },
  { key: 'twitter', href: '#twitter', img: '/assets/img/mobileSideMenu/twitter.svg' },
  { key: 'youtube', href: '#youtube', img: '/assets/img/mobileSideMenu/youtube.svg' },
  { key: 'instagram', href: '#instagram', img: '/assets/img/mobileSideMenu/instagram.svg' },
]

export const MobileSideMenu = ({ t, userInform }) => {
  const dispatch = useDispatch()

  const isShowMobileMenu = useSelector((state) => state.showMobileMenu.isShow)
  const isShowLogin = useSelector((isShowLogin) => isShowLogin.ui.isShowLogin)
  const isShowRegister = useSelector((isShowRegister) => isShowRegister.showRegister.isShow)
  const currency = useSelector((state) => state.currency)

  const closeClickHandler = () => {
    if (isShowMobileMenu) {
      dispatch(showMobileMenu(false))
    } else {
      dispatch(showMobileMenu(true))
    }
  }
  const [isOpenLanguages, setIsOpenLanguages] = useState(false)

  function openLanguagesClickHandler () {
    if (isOpenLanguages) {
      setIsOpenLanguages(false)
    } else {
      setIsOpenLanguages(true)
    }
  }

  useEffect(() => {
    dispatch(showMobileMenu(false))
  }, [isShowLogin, isShowRegister])

  return (
    <div className={`${styles.sideMenuWrapper} ${isShowMobileMenu ? styles.showMobileMenu : ''}`}>
      <div className={`${styles.sideMenuMainWrapper}`}>
        <div className={styles.sideMenuHeader}>
          <SideMenuCloseComponent
            closeClickHandler={closeClickHandler}
          />
          <SideMenuLogo/>
          <ErrorEmpty>
            <UserInfoBlock
              t={t}
              userInform={userInform}
              currency={currency}
            />
          </ErrorEmpty>
          <div className={styles.mobileSideListWrapper}>
            <MobileListContainer
              isAuth={userInform.isAuthenticated}
              t={t}
            />
            <SideLagSwitcherWrapper
              t={t}
              isOpenLanguages={isOpenLanguages}
              openLanguagesClickHandler={openLanguagesClickHandler}
            />
            <LogoutButtonMobileMenu
              t={t}
              isLogined={userInform.isAuthenticated}
            />
          </div>
          <div className={styles.sideMenuFooter}>
            <div className={styles.sideMenuFooterIconsBlock}>
              {socilaLinks.map((el) => {
                return (
                  <a className={styles.socialLink} target="_blank" rel={'noreferrer'} key={`${el.key} footer`}
                     href={el.href}>
                    <Image className={styles.socialImage} height={35} width={35} src={el.img} alt={el.key}/>
                  </a>
                )
              })}
            </div>
            <p className={styles.sideFooterRights}>{"2020 SlotsIdol.com&#169; All Rights Reserved"}</p>
          </div>
        </div>
      </div>
    </div>

  )
}
