import styles from "../../../../styles/PromotionsPage/TypeOneBonusContainer.module.scss";
import {showDepositModal} from "../../../../redux/actions/showPopups";
import {useDispatch, useSelector} from "react-redux";
import {setUserBonus} from "../../../../redux/actions/setUserBonus";
import {useRouter} from "next/router";
// import imageButton from '/assets/img/promotionsPage/bonus2.png'

export const BonusButton = ({bonusInfo}) => {
  const router = useRouter()
  const dispatch = useDispatch();
  const isShowDepositModal = useSelector((state) => state.showPopupsReducer.isShowDepositModal);

  const openDepositModalHandler = () => {
    console.log(bonusInfo, 'bonus button')
    if (!isShowDepositModal) {
      dispatch(setUserBonus(bonusInfo.id));
      dispatch(showDepositModal(true));
    }
  }
  let bonusButton = null;
  if (bonusInfo.button) {
    bonusButton = bonusInfo.button.split('.').join(`_${router.locale}.`);
  }

  let bonusImage = '/assets/img/promotionsPage/bonus2.png'
  return (
    <div onClick={() => openDepositModalHandler()} className={styles.bonusButtonBlock}>
      {/*<div className={styles.bonusButton}></div>*/}
      <img draggable={false}
           src={bonusButton ? `https://cimagehost1.sos-ch-gva-2.exoscale-cdn.com/images/${bonusButton}` : bonusImage}
           alt="bonus button icon"/>
    </div>
  )
}