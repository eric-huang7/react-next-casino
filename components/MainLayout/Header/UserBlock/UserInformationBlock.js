import styles from '../../../../styles/Header/UserBlock.module.scss'
import { DesktopMenuContainer } from '../../../DesktopMenuComponents/DesktopMenuContainer'
import {useState} from 'react'

export const UserInformationBlock = ({ userInfo, userCurrency }) => {

  const [isShowLinksMenu, setIsShowLinksMenu] = useState(false)

  const showLinksMenuHandler = () => {
    setIsShowLinksMenu(true)
  }
  const hideLinksMenuHandler = () => {
    setIsShowLinksMenu(false)
  }

  return userCurrency.currency && userInfo.balance ? (
    <div className={styles.userMainBlockUserInfoBlock}>
      <div
        className={`${styles.userTextContainer} ${isShowLinksMenu ? styles.active : ''}`}
        onMouseEnter={() => showLinksMenuHandler()}
        onMouseLeave={() => hideLinksMenuHandler()}
      >
        <span className={styles.userName}>
          {userInfo.user.user.username}
        </span>
        {
          isShowLinksMenu
            ? <DesktopMenuContainer onClose={hideLinksMenuHandler} userInfo={userInfo} userCurrency={userCurrency}/>
            : null
        }
      </div>
    </div>
  ) : (
    <div className={styles.userMainBlockUserInfoBlock}>
      <span>{'     '}</span>
      <span>{'     '}</span>
    </div>
  )
}
