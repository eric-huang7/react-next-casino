import styles from "../../../../styles/PromotionsPage/TypeTwoBonusContainer.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {showDepositModal} from "../../../../redux/actions/showPopups";


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
      <img draggable={false} src={bonusInfo?.button ? `https://cimagehost1.sos-ch-gva-2.exoscale-cdn.com/images/${bonusInfo.button}` : bonusImage} alt="bonus button icon"/>
    </div>
  )
}