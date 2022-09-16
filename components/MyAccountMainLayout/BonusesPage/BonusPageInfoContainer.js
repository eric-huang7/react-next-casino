import Link from 'next/link'

import styles from '../../../styles/MyAccount/BonusPage/BonusPage.module.scss'
import { LoadingComponent } from '../../LoadingComponent/LoadingComponent'
import { BonusItemContainer } from './BonusPageComponents/BonusItemContainer'
import { AddPromoCodeContainer } from './BonusPageComponents/AddPromoCodeContainer'
import {useDispatch, useSelector} from 'react-redux'
import {
  activateBonus,
  cancelBonus,
  getUserActivePendingBonuses,
  setActivePendingBonusesTerms
} from '../../../redux/user/action'
import { useState } from 'react'
import {user_url} from '../../../redux/url/url'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'
import Connect from "../../../helpers/connect";

export const BonusPageInfoContainer = ({ t, bonusInfo, currency }) => {
  const dispatch = useDispatch()

  let errorText = 'myAccount.bonusPage.addPromoCode.invalidPromo'
  let bonusNeedDepositText = 'myAccount.bonusPage.addPromoCode.bonusNeedDeposit'

  const activateBonusClickHandler = (bonusData) => {
    let params = {
      user_id: bonusInfo.user.user.id,
      bonus_redemption_id: bonusData.id,
      status: 1
    }
    dispatch(activateBonus(params))
  }
  const cancelBonusClickHandler = (bonusData) => {
    let params = {
      user_id: bonusInfo.user.user.id,
      bonus_redemption_id: bonusData.id
    }
    dispatch(cancelBonus(params))
  }

  const [promoCodeValue, setPromoCodeValue] = useState('')
  const [promoErrorValue, setPromoErrorValue] = useState('')
  const [promoDepositText, setPromoDepositText] = useState('')
  const promoCodeInputHandler = (value) => {
    setPromoCodeValue(value)
  }

  const savePromoCodeClickHandler = (e) => {
    e.preventDefault()

    const userData = {
      id: bonusInfo.user.user.id,
      current_bonus_code: promoCodeValue,
    }
    Connect.patch(user_url, JSON.stringify(userData), {}, (status, data) => {
      if (!data.bonus_spec) {
        dispatch(getUserActivePendingBonuses({ status: '1,5' }))
        setPromoDepositText('')
      } else {
        setPromoDepositText(t(bonusNeedDepositText))
      }
      setPromoCodeValue('')
      setPromoErrorValue('')
    }).catch((errorData) => {
      setPromoCodeValue('')
      setPromoDepositText('')
      setPromoErrorValue(t(errorText) + ' ' + promoCodeValue)
    })
    // dispatch(patchUserBonusCode(userData))

  }

  return (bonusInfo?.activePendingBonuses?.success && !currency.loading) ? (
    bonusInfo.activePendingBonuses.bonuses.length === 0 ? (
      <>
        <div className={styles.noBonusesContainer}>
          <p className={styles.noBonusesText}>{t('myAccount.bonusPage.noBonuses')}</p>
          <div className={styles.bonusesLinkWrapper}>
            <Link href={'/accounts/history/history/bonus'}><a>{t('myAccount.bonusPage.bonusHistoryLink')} &gt;&gt;</a></Link>
          </div>
        </div>
        <ErrorEmpty>
          <AddPromoCodeContainer
            promoCodeInputHandler={promoCodeInputHandler}
            savePromoCodeClickHandler={savePromoCodeClickHandler}
            promoCodeValue={promoCodeValue}
            isCenter={false}
            t={t}
            promoErrorValue={promoErrorValue}
            promoDepositText={promoDepositText}
          />
        </ErrorEmpty>
      </>
    ) : (
      <div>
        <div className={styles.mainContainer}>
          {bonusInfo.activePendingBonuses.bonuses.map((bonus) => (
            <ErrorText key={`${bonus.id} bonus key`}>
              <BonusItemContainer
                activateBonusClickHandler={activateBonusClickHandler}
                cancelBonusClickHandler={cancelBonusClickHandler}
                key={`${bonus.id} bonus key`}
                currencyData={currency}
                bonusData={bonus}
                t={t}
              />
            </ErrorText>
          ))}
          <ErrorEmpty>
            <AddPromoCodeContainer
              promoCodeInputHandler={promoCodeInputHandler}
              savePromoCodeClickHandler={savePromoCodeClickHandler}
              promoCodeValue={promoCodeValue}
              isCenter={true}
              t={t}
              promoErrorValue={promoErrorValue}
              promoDepositText={promoDepositText}
            />
          </ErrorEmpty>
        </div>
        {
          bonusInfo.activePendingBonuses.bonuses.length % 2 === 0 ? <div className={styles.divider}></div> : ''
        }

        <div className={styles.bonusesLinkWrapper}>
          <Link
            href={'/accounts/history/history/bonus'}><a>{t('myAccount.bonusPage.bonusHistoryLink')} &gt;&gt;</a></Link>
        </div>
      </div>
    )
  ) : <LoadingComponent t={t}/>
}
