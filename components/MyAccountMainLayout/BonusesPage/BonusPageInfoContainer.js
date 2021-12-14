import Link from "next/link";

import styles from '../../../styles/MyAccount/BonusPage/BonusPage.module.scss';
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {BonusItemContainer} from "./BonusPageComponents/BonusItemContainer";
import {AddPromoCodeContainer} from "./BonusPageComponents/AddPromoCodeContainer";
import {useDispatch} from "react-redux";
import {activateBonus, cancelBonus} from "../../../redux/actions/userData";

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

  if (bonusInfo?.activePendingBonuses?.success && !currency.loading) {

    if (bonusInfo.activePendingBonuses.bonuses.length === 0) {
      return (
        <>
          <div className={styles.noBonusesContainer}>
            <p className={styles.noBonusesText}>You currently do not have any bonus.</p>
            <div className={styles.bonusesLinkWrapper}>
              <Link href={'/accounts/history/history/bonus'}><a>Bonus history &gt;&gt;</a></Link>
            </div>
          </div>
          <AddPromoCodeContainer isCenter={false} t={t} />
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
            <AddPromoCodeContainer isCenter={true} t={t} />
          </div>
          {
            bonusInfo.activePendingBonuses.bonuses.length % 2 === 0 ? <div className={styles.divider}></div> : ""
          }

          <div className={styles.bonusesLinkWrapper}>
            <Link href={'/accounts/history/history/bonus'}><a>Bonus history &gt;&gt;</a></Link>
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