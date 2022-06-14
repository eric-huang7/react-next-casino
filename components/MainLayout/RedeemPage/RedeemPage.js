import styles from '../../../styles/HomePage/RedeemPage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {showRedeemModal} from "../../../redux/popups/action";
import useWindowScroll from "../../../hooks/useWindowScroll";
import {RedeemInput} from "./RedeemInput";
import {useEffect, useState} from "react";
import {currencyFinder} from "../../../helpers/currencyFinder";
import Connect from "../../../helpers/connect";
import {get_reward_point_url, reward_point_url} from "../../../redux/url/url";
import {svgSetterById} from "../../../helpers/iconNameFinder";
import ErrorEmpty from "../../ErrorBoundaryComponents/ErrorEmpty";
import {SelectCurrencyReusableWidget} from "../SelectCurrencyReusableWidget/SelectCurrencyWidget";

export const RedeemPage = ({t}) => {
  let scrollHeight = useWindowScroll();
  const dispatch = useDispatch();
  const isShowRedeemModal = useSelector(({popups}) => popups?.isShowRedeemModal);
  const userData = useSelector((store) => store.authInfo);
  const [maxPointBalance, setMaxPointBalance] = useState(0)
  const [pointBalance, setPointBalance] = useState(0)
  const [activeCurrency, setActiveCurrency] = useState()
  const [rewardPoint, setRewardPoint] = useState(0)
  const [isShowBalanceList, setIsShowBalanceList] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [error, setError] = useState(false)

  const userCurrency = useSelector((state) => state.currency)
  const userInfo = useSelector((state) => state.authInfo)

  const getPointBalance = () => {
    Connect.get(get_reward_point_url, {}, (status, data) => {
      const points = Math.floor(data?.result?.total || 0)
      setPointBalance(points)
      setMaxPointBalance(points)
    }).catch((error) => {
      console.log('error', error?.message);
    })
  }

  const getRewardPoint = () => {
    const payload = {
      is_preview:true,
      points_to_redeem: pointBalance,
      currency_id_to_redeem_in: activeCurrency?.id,
      user_id: userData.user.user.id
    }

    Connect.put(reward_point_url, JSON.stringify(payload), {}, (status, data) => {
      setRewardPoint(data?.award_amount || 0)
    }).catch((error) => {
      setError(true);
      setShowNotification(false);
    })
  }

  useEffect(() => {
    if (isShowRedeemModal) {
      setShowNotification(false)
      setError(false)
      getPointBalance();
    }
  }, [isShowRedeemModal])

  useEffect(() => {
    if (pointBalance && activeCurrency?.id) {
      getRewardPoint();
    }
  }, [pointBalance, activeCurrency?.id])

  useEffect(() => {
    if (userCurrency.currency && userInfo.balance && isShowRedeemModal) {
      let balanceData = userInfo?.balance?.balances.filter((el) => !!Number(el.is_default))
      const currency = currencyFinder(balanceData, userInfo, userCurrency);
      const activeCurrency = userCurrency.currency.results.find((el) => el.abbreviation === currency);
      setActiveCurrency(activeCurrency)
    }
  }, [userCurrency, userInfo, isShowRedeemModal])

  useEffect(() => {
    if (activeCurrency?.id) {
      const returnAbbr = false
      svgSetterById(activeCurrency, `activeCurrency_${activeCurrency?.id}`, returnAbbr);
    }
  }, [activeCurrency])

  const closeModal = () => {
    dispatch(showRedeemModal(false));
  }

  const onSelectCurrency = (value) => {
    setIsShowBalanceList(false)
    setActiveCurrency(value)
  }

  const onChangePoints = (e) => {
    const value = Math.floor(parseFloat(e.target.value)) || 0

    if (value <= maxPointBalance) {
      setPointBalance(value)
    }
  }

  const submit = () => {
    const payload = {
      is_preview:false,
      points_to_redeem: pointBalance,
      currency_id_to_redeem_in: activeCurrency?.id,
      user_id: userData.user.user.id
    }

    Connect.put(reward_point_url, JSON.stringify(payload), {}, (status, data) => {
      setShowNotification(true);
    }).catch((error) => {
      setError(true);
      setShowNotification(false);
    })
  }

  const getCloseButton = (dark = false) => <div
    className={styles.redeemCloseButton}
    onClick={closeModal}
  >
    <img src={`/assets/icons/close-icon${dark && '-dark'}.svg`} alt="close"/>
  </div>

  if (!isShowRedeemModal) return null

  return (
    <div className={`${styles.redeemMainWrapper}`}>
      {error && (
        <div className={styles.redeemNotificationContainer}>
          <div className={styles.redeemNotificationBody}>
            {getCloseButton()}
            <div className={styles.redeemNotificationPoints}>
              {t("redeemPage.notificationSorry")}
            </div>
            <div className={styles.redeemError}>
              {t("redeemPage.notificationError")}
            </div>
          </div>
        </div>
      )}
      {showNotification && (
        <div className={styles.redeemNotificationContainer}>
          <div className={styles.redeemNotificationHeading}>
            <div className={styles.redeemHeading}>
              {t("redeemPage.congratulation")}
            </div>
            {getCloseButton()}
          </div>
          <div className={styles.redeemNotificationBody}>
            <div className={styles.redeemNotificationTitle1}>
              {t("redeemPage.notificationTitle1")}
            </div>
            <div className={styles.redeemNotificationPoints}>
              {pointBalance}{" "}{t("redeemPage.points")}
            </div>
            <div className={styles.redeemNotificationFor}>
              {t("redeemPage.for")}{" "}{rewardPoint || 0}{activeCurrency?.abbreviation}
            </div>

            <div className={styles.redeemNotificationTitle2}>
              {t("redeemPage.notificationTitle2")}
            </div>
            <div className={styles.redeemNotificationTitle3}>
              {userData?.user?.user?.username}
            </div>
          </div>
        </div>
      )}
      {!showNotification && !error && (
        <div className={`${styles.redeemMainContainer} ${scrollHeight > 100 ? styles.marginNull : ''}`}>
          <div className={styles.redeemHeadingBlock}>
            <h3 className={styles.redeemHeading}>{t("redeemPage.heading")}</h3>
            {getCloseButton(true)}
          </div>
          <div className={styles.redeemBody}>
            <div className={styles.redeemTitle}>
              {t('redeemPage.title1')}{" "}<b>1000{" "}{t('redeemPage.points')}</b>
            </div>
            <div className={styles.redeemTitle1}>
              {t('redeemPage.title2')}
            </div>
            <div className={styles.redeemTitle2}>
              {pointBalance?.toLocaleString()} {t('redeemPage.points')}
            </div>
            <div className={styles.redeemTitle3}>
              {t('redeemPage.title3')}
            </div>
            <div className={styles.redeemTitle4}>
              <b>1$</b>{" "}{t('redeemPage.title4')}{" "}<b>100{" "}{t('redeemPage.points')}</b>
            </div>
            <div className={styles.divider}></div>

            <div className={styles.redeemTitle5}>
              {t('redeemPage.title7')}
            </div>

            <div className={styles.balanceList}>
              <div onClick={() => setIsShowBalanceList(true)}  className={styles.pointer}>
                <RedeemInput mt="30px" mb="30px" >
                  <div id={`activeCurrency_${activeCurrency?.id}`} className={styles.iconContainer}></div>
                  {activeCurrency?.name}
                </RedeemInput>
              </div>
            </div>
            <div className={styles.redeemTitle5}>
              {t('redeemPage.title5')}
            </div>
            <div className={styles.redeemTotalButtons}>
              {[25, 50, 75, 100].map((item, index) => (
                <div key={index} onClick={() => setPointBalance(Math.round(item * maxPointBalance / 100))}>
                  {item}%
                </div>
              ))}
            </div>

            <RedeemInput mb="30px" value={pointBalance} onChange={onChangePoints}/>

            <div className={styles.redeemTitle5}>
              {t('redeemPage.title6')}
            </div>

            <RedeemInput mb="30px">
              <span>{rewardPoint}</span>
            </RedeemInput>

            <button className={styles.button} onClick={submit}>
              {t('redeemPage.button')}
            </button>
          </div>
          <div className={styles.redeemFooter}/>
        </div>
      )}
      <ErrorEmpty>
        <SelectCurrencyReusableWidget
          t={t}
          isShowCurrencySwitcher={isShowBalanceList}
          onClose={() => setIsShowBalanceList(false)}
          onSelect={onSelectCurrency}
        />
      </ErrorEmpty>
    </div>
  )
}
