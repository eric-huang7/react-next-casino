import styles from '../../../../styles/Header/HeaderButtons.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {showDepositModal} from "../../../../redux/actions/showPopups";
import Link from "next/link";




export const HeaderButtonsDeposit = ({t, isUserLogined}) => {
  const dispatch = useDispatch();
  const isShowDepositModal = useSelector((state) => state.showPopupsReducer.isShowDepositModal);

  const closeDepositModalHandler = () => {
    if (!isShowDepositModal) {
      dispatch(showDepositModal(true));
    }
  }

  return (
      <div className={`${styles.userMainBlockButtons} ${styles.depositButtons} ${isUserLogined ? '' : styles.hide}`}>
        <Link href={'/accounts/cashout'}><a>{t('header.navbarButtons.cashOut')}</a></Link>
        {/*<button>{t('header.navbarButtons.cashOut')}</button>*/}
        <button onClick={() => closeDepositModalHandler()}>{t('header.navbarButtons.deposit')}</button>
      </div>
  )
}