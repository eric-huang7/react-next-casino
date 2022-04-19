import styles from '../../../styles/ExitIntentComponent/BonusesContainer/BonusesContainer.module.scss';

import {BonusImageContainer} from "./BonusImageContainer";
import {BonusTittle} from "./BonusTittle";
import {BonusIcon} from "./BonusIcon";
import {BonusDescription} from "./BonusDescription";
import {BonusSubmitButton} from "./BonusSubmitButton";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {user_url} from "../../../redux/url/url";
import {setUserBonus, setUserRegisterBonusCode} from "../../../redux/userBonus/action";
import {showDepositModal} from "../../../redux/popups/action";
import {useDispatch} from "react-redux";
import {showRegister} from "../../../redux/ui/action";
import Connect from "../../../helpers/connect";

export const BonusItemContainer = ({bonusData, userData, exit}) => {
  const dispatch = useDispatch()
  const {t} = useTranslation('promotionsPage');
  const router = useRouter();

  const submitBonusHandler = () => {
    if (userData.isAuthenticated) {
      const sendData = {
        id : userData.user.user.id,
        current_bonus_code: bonusData.redemption_code,
      }
      Connect.patch(user_url, JSON.stringify(sendData), {}, (status, data) => {
        if (data.data.bonus_offer) {
          dispatch(setUserBonus(bonusData.id));
          dispatch(showDepositModal(true));
          exit();

        } else {
          exit();
          router.push({
            pathname: '/games-page/bonus-games',
            query: {
              id: "bonus-games",
              bonus_heading: t(`bonuses.bonus_${bonusData.id}.deposit_bonus.heading`),
            }
          })
        }
      }).catch((errorData) => {
        exit();
      })
    } else {
      exit();
      dispatch(showRegister(true));
      dispatch(setUserRegisterBonusCode(bonusData.redemption_code));
    }
  }

  return (
    <div className={styles.bonusItemContainer}>
      <BonusImageContainer bonusData={bonusData} />
      <div  className={styles.bonusInfoContainer}>
        <BonusTittle locale={router.locale} title={t(`bonuses.bonus_${bonusData.id}.deposit_bonus.heading`)} />
        <div className={styles.bonusInfoInnerContainer}>
          <BonusIcon bonusData={bonusData} />
          <div  className={styles.bonusDataContainer}>
            <BonusDescription locale={router.locale} description={t(`bonuses.bonus_${bonusData.id}.deposit_bonus.description`)} />
            <BonusSubmitButton userData={userData.isAuthenticated} submitBonusHandler={submitBonusHandler} />
          </div>
        </div>
      </div>
    </div>
  )
}
