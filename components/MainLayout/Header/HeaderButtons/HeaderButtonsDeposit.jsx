import styles from '../../../../styles/Header/HeaderButtons.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { showDepositModal } from '../../../../redux/popups/action'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

export const HeaderButtonsDeposit = ({ isUserLogined }) => {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()
  const isShowDepositModal = useSelector((state) => state.popups.isShowDepositModal)

  const closeDepositModalHandler = () => {
    if (!isShowDepositModal) {
      dispatch(showDepositModal(true))
    }
  }

  return isUserLogined && (
    <div className={`${styles.userMainBlockButtons} ${styles.depositButtons}`}>
      <button onClick={() => closeDepositModalHandler()}>{t('header.navbarButtons.deposit')}+</button>
      <Link href={'/accounts/cashout'}><a>{t('header.navbarButtons.cashOut')}</a></Link>
      {/*<button>{t('header.navbarButtons.cashOut')}</button>*/}
    </div>
  )
}
