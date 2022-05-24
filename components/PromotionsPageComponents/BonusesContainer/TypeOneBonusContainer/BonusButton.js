import styles from "../../../../styles/PromotionsPage/TypeOneBonusContainer.module.scss";
import {showDepositModal} from "../../../../redux/popups/action";
import {useDispatch, useSelector} from "react-redux";
import {setUserBonus} from "../../../../redux/userBonus/action";
import {useRouter} from "next/router";
import {imagesUrl} from "../../../../envs/url";


export const BonusButton = ({bonusInfo, userData}) => {
  const router = useRouter()
  const dispatch = useDispatch();
  const isShowDepositModal = useSelector((state) => state.popups.isShowDepositModal);

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

  let bonusImage = '/assets/img/promotionsPage/bonus2.webp'
  return bonusButton ? (
    <div onClick={() => openDepositModalHandler()} className={styles.bonusButtonBlock}>
      <img draggable={false}
           src={bonusButton ? `${imagesUrl}images/${bonusButton}` : bonusImage}
           alt=""/>
    </div>
  ) : null
}
