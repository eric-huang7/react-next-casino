import styles from "../../../../styles/PromotionsPage/TypeTwoBonusContainer.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {showDepositModal} from "../../../../redux/actions/showPopups";
import {setUserBonus} from "../../../../redux/actions/setUserBonus";
import {useRouter} from "next/router";


export const BonusButton = ({bonusInfo, userData}) => {
  const router = useRouter()
  const dispatch = useDispatch();
  const isShowDepositModal = useSelector((state) => state.showPopupsReducer.isShowDepositModal);

  const openDepositModalHandler = () => {
    if (userData.isAuthenticated) {
      if (!isShowDepositModal) {
        dispatch(setUserBonus(bonusInfo.id));
        dispatch(showDepositModal(true));
      }
    }
  }

  let bonusButton = null;
  if (bonusInfo.button) {
    bonusButton = bonusInfo.button.split('.').join(`_${router.locale}.`);
  }

  let bonusImage = '/assets/img/promotionsPage/bonus2.png'
  return (
    <div onClick={() => openDepositModalHandler()} className={styles.bonusButtonBlock}>
      <img draggable={false} src={bonusButton ? `https://cimagehost1.sos-ch-gva-2.exoscale-cdn.com/images/${bonusButton}` : bonusImage} alt="bonus button icon"/>
    </div>
  )
}