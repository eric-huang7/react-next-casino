import Link from "next/link";

import styles from '../../../styles/MyAccount/BonusPage/BonusPage.module.scss';
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {BonusItemContainer} from "./BonusPageComponents/BonusItemContainer";
import {AddPromoCodeContainer} from "./BonusPageComponents/AddPromoCodeContainer";
import {useDispatch} from "react-redux";
import {activateBonus, cancelBonus, patchUserBonusCode} from "../../../redux/actions/userData";
import {useState} from "react";
import axios from "axios";
import {user_url} from "../../../redux/url/url";


export const BonusPageInfoContainer = ({t, bonusInfo, currency}) => {
  const dispatch = useDispatch();

  const activateBonusClickHandler = (bonusData) => {
    //bonusData.user_id || bonusInfo.user.user.id
    let params = {
      user_id: bonusInfo.user.user.id,
      bonus_redemption_id: bonusData.id,
      status: "ACTIVE"
    }
    dispatch(activateBonus(params));

  }
  const cancelBonusClickHandler = (bonusData) => {
    let params = {
      user_id: bonusInfo.user.user.id,
      bonus_redemption_id: bonusData.id
    }
    dispatch(cancelBonus(params));
  }

  const [promoCodeValue, setPromoCodeValue] = useState("");
  const [promoErrorValue, setPromoErrorValue] = useState("");
  const promoCodeInputHandler = (value) => {
    setPromoCodeValue(value);
  }

  const savePromoCodeClickHandler = () => {
    const userData = {
      id : bonusInfo.user.user.id,
      current_bonus_code: promoCodeValue,
    }
    const config = {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const body = JSON.stringify(userData)
      axios.patch(user_url, body, config).then((data) => {
        console.log(data, 'bonus data!!');
      }).catch((errorData) => {
        console.log(errorData.response, 'error data!!');
        setPromoErrorValue(errorData.response.data.extra_error_info.message);
      })


    // dispatch(patchUserBonusCode(userData))
    // console.log(promoCodeValue);
  }

  if (bonusInfo?.activePendingBonuses?.success && !currency.loading) {

    if (bonusInfo.activePendingBonuses.bonuses.length === 0) {
      return (
        <>
          <div className={styles.noBonusesContainer}>
            <p className={styles.noBonusesText}>{t("myAccount.bonusPage.noBonuses")}</p>
            <div className={styles.bonusesLinkWrapper}>
              <Link href={'/accounts/history/history/bonus'}><a>{t("myAccount.bonusPage.bonusHistoryLink")} &gt;&gt;</a></Link>
            </div>
          </div>
          <AddPromoCodeContainer
            promoCodeInputHandler={promoCodeInputHandler}
            savePromoCodeClickHandler={savePromoCodeClickHandler}
            promoCodeValue={promoCodeValue}
            isCenter={false}
            t={t}
            promoErrorValue={promoErrorValue}
          />
        </>

      )
    } else {
      return (
        <div>
          <div className={styles.mainContainer}>
            {
              bonusInfo.activePendingBonuses.bonuses.map((bonus) => {
                return (
                  <BonusItemContainer activateBonusClickHandler={activateBonusClickHandler} cancelBonusClickHandler={cancelBonusClickHandler} key={`${bonus.id} bonus key`} currencyData={currency} bonusData={bonus} t={t}/>
                )
              })
            }
            <AddPromoCodeContainer
              promoCodeInputHandler={promoCodeInputHandler}
              savePromoCodeClickHandler={savePromoCodeClickHandler}
              promoCodeValue={promoCodeValue}
              isCenter={true}
              t={t}
              promoErrorValue={promoErrorValue}
            />
          </div>
          {
            bonusInfo.activePendingBonuses.bonuses.length % 2 === 0 ? <div className={styles.divider}></div> : ""
          }

          <div className={styles.bonusesLinkWrapper}>
            <Link href={'/accounts/history/history/bonus'}><a>{t("myAccount.bonusPage.bonusHistoryLink")} &gt;&gt;</a></Link>
          </div>
        </div>
      )
    }
  } else {
    return (
      <LoadingComponent t={t}/>
    )
  }
}