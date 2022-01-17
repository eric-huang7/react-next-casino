import styles from '../../../styles/ExitIntentComponent/BonusesContainer/BonusesContainer.module.scss';
import {iconsUrl, urlGen} from "../../../helpers/imageUrl";
import {BonusImageContainer} from "./BonusImageContainer";
import {BonusTittle} from "./BonusTittle";
import {BonusIcon} from "./BonusIcon";
import {BonusDescription} from "./BonusDescription";
import {BonusSubmitButton} from "./BonusSubmitButton";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {activateBonus, getUserActivePendingBonuses} from "../../../redux/actions/userData";
import axios from "axios";
import {user_url} from "../../../redux/url/url";
import {setUserBonus, setUserRegisterBonusCode} from "../../../redux/actions/setUserBonus";
import {showDepositModal} from "../../../redux/actions/showPopups";
import {useDispatch} from "react-redux";
import {showRegister} from "../../../redux/actions/registerShow";
import {log} from "qrcode/lib/core/galois-field";


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
      const config = {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const body = JSON.stringify(sendData);
      axios.patch(user_url, body, config).then((data) => {
        console.log(data, 'success');
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
              bonus_heading: t(`bonuses.${bonusData.id}.deposit_bonus.heading`),
            }
          })
        }
      }).catch((errorData) => {
        exit();
        console.log(errorData.response, 'error');
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
        <BonusTittle locale={router.locale} title={t(`bonuses.${bonusData.id}.deposit_bonus.heading`)} />
        <div className={styles.bonusInfoInnerContainer}>
          <BonusIcon bonusData={bonusData} />
          <div  className={styles.bonusDataContainer}>
            <BonusDescription locale={router.locale} description={t(`bonuses.${bonusData.id}.deposit_bonus.description`)} />
            <BonusSubmitButton userData={userData.isAuthenticated} submitBonusHandler={submitBonusHandler} />
          </div>
        </div>
      </div>
    </div>
  )
}