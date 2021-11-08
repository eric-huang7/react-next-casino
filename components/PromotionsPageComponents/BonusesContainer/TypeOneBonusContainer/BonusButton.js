import styles from "../../../../styles/PromotionsPage/TypeOneBonusContainer.module.scss";
import {showDepositModal} from "../../../../redux/actions/showPopups";
import {useDispatch, useSelector} from "react-redux";
// import imageButton from '/assets/img/promotionsPage/bonus2.png'

export const BonusButton = ({bonusInfo}) => {
  const dispatch = useDispatch();
  const isShowDepositModal = useSelector((state) => state.showPopupsReducer.isShowDepositModal);

  const closeDepositModalHandler = () => {
    console.log(bonusInfo, 'bonus button')
    if (!isShowDepositModal) {
      dispatch(showDepositModal(true));
    }
  }

let bonusImage = '/assets/img/promotionsPage/bonus2.png'
  return (
    <div onClick={() => closeDepositModalHandler()} className={styles.bonusButtonBlock}>
      {/*<div className={styles.bonusButton}></div>*/}
      <img draggable={false} src={bonusInfo?.button ? `https://cimagehost1.sos-ch-gva-2.exoscale-cdn.com/images/${bonusInfo.button}` : bonusImage} alt="bonus button icon"/>
    </div>
  )
}