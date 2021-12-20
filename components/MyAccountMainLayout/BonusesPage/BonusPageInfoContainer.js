import Link from "next/link";

import styles from '../../../styles/MyAccount/BonusPage/BonusPage.module.scss';
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {BonusItemContainer} from "./BonusPageComponents/BonusItemContainer";
import {AddPromoCodeContainer} from "./BonusPageComponents/AddPromoCodeContainer";
import {useDispatch} from "react-redux";
import {activateBonus, cancelBonus, getUserActivePendingBonuses} from "../../../redux/actions/userData";
import {useState} from "react";
import axios from "axios";
import {user_url} from "../../../redux/url/url";


export const BonusPageInfoContainer = ({t, bonusInfo, currency}) => {
  const dispatch = useDispatch();

  let errorText = "myAccount.bonusPage.addPromoCode.invalidPromo";
  let bonusNeedDepositText = "myAccount.bonusPage.addPromoCode.bonusNeedDeposit";

  const activateBonusClickHandler = (bonusData) => {
    //bonusData.user_id || bonusInfo.user.user.id
    let params = {
      user_id: bonusInfo.user.user.id,
      bonus_redemption_id: bonusData.id,
      status: 1
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
  const [promoDepositText, setPromoDepositText] = useState("")
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
        // bonus_offer.deposit_cnt_requirements
        if (!data.data.bonus_spec) {
          dispatch(getUserActivePendingBonuses({status: "1,5"}));
          setPromoDepositText('');
        } else {
          setPromoDepositText(t(bonusNeedDepositText));
        }
        setPromoCodeValue('');
        setPromoErrorValue('')
        console.log(data, 'bonus data!!');
      }).catch((errorData) => {
        console.log(errorData.response, 'error data!!');
        setPromoCodeValue('');
        setPromoDepositText('');
        setPromoErrorValue(t(errorText) + " " + promoCodeValue);
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
            promoDepositText={promoDepositText}
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
              promoDepositText={promoDepositText}
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