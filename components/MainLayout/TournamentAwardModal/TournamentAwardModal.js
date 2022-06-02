import styles from '../../../styles/HomePage/TournamentAward.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {showTournamentAwardModal} from "../../../redux/popups/action";
import useWindowScroll from "../../../hooks/useWindowScroll";
import {useEffect, useState} from "react";
import {currencyFinder} from "../../../helpers/currencyFinder";
import Connect from "../../../helpers/connect";
import {tournament_award_url} from "../../../redux/url/url";
import BalanceErrorBoundary from "../../BalanceMenuContainer/BalanceErrorBoundary/BalanceErrorBoundary";
import {BalanceMenuContainer} from "../../BalanceMenuContainer/BalanceMenuContainer";
import {CurrencySelector} from "./CurrencySelector";
import {siteID} from "../../../envs/envsForFetching";

export const TournamentAwardModal = ({t}) => {
  let scrollHeight = useWindowScroll();
  const dispatch = useDispatch();
  const isTournamentAwardModal = useSelector(({popups}) => popups?.isTournamentAwardModal);
  const [activeCurrency, setActiveCurrency] = useState()
  const [isShowBalanceList, setIsShowBalanceList] = useState()
  const [balanceData, setBalanceData] = useState(false)
  const [error, setError] = useState(false)

  const userCurrency = useSelector((state) => state.currency)
  const userInfo = useSelector((state) => state.authInfo)

  useEffect(() => {
    if (userCurrency.currency && userInfo.balance && isTournamentAwardModal) {
      let balanceData = userInfo?.balance?.balances.filter((el) => !!Number(el.is_default))
      setBalanceData(balanceData);
      const currency = currencyFinder(balanceData, userInfo, userCurrency);
      const activeCurrency = userCurrency.currency.results.find((el) => el.abbreviation === currency);
      setActiveCurrency(activeCurrency)
    }
  }, [userCurrency, userInfo, isTournamentAwardModal])

  const closeModal = () => {
    dispatch(showTournamentAwardModal(false));
  }

  const onCurrencySelect = (value) => {
    setActiveCurrency(value)
    setIsShowBalanceList(false)
  }

  const submit = () => {
    const payload = {
      site_id: siteID,
      currency_id: activeCurrency?.id,
    }
    Connect.post(tournament_award_url, JSON.stringify(payload), {}, (status, data) => {
      closeModal();
    }).catch((error) => {
      setError(true);
    })
  }

  const getCloseButton = (dark = false) => <div
    className={styles.awardCloseButton}
    onClick={closeModal}
  >
    <img src={`/assets/icons/close-icon${dark ? "-dark" : ""}.svg`} alt=""/>
  </div>

  if (!isTournamentAwardModal) return null

  return (
    <div className={`${styles.awardMainWrapper}`}>
      {error && (
        <div className={styles.awardNotificationContainer}>
          <div className={styles.awardNotificationBody}>
            {getCloseButton()}
            <div className={styles.awardNotificationPoints}>
              {t("tournaments.award.notificationSorry")}
            </div>
            <div className={styles.awardError}>
              {t("tournaments.award.error")}
            </div>
          </div>
        </div>
      )}
      {!error && (
        <div className={`${styles.awardMainContainer} ${scrollHeight > 100 ? styles.marginNull : ''}`}>
          <div className={styles.awardHeadingBlock}>
            <h3 className={styles.awardHeading}>{t("tournaments.award.heading")}</h3>
            {getCloseButton(true)}
          </div>
          <div className={styles.awardBody}>
            <div className={styles.awardTitle}>
              {t("tournaments.award.title")}
            </div>

            <div className={styles.balanceList}>
              <div onClick={() => setIsShowBalanceList(true)}>
                <CurrencySelector mt="30px" mb="30px" value={activeCurrency?.name}/>
              </div>
              {
                isShowBalanceList && balanceData.length > 0
                  ?
                  <BalanceErrorBoundary>
                    <BalanceMenuContainer
                      balanceData={userInfo}
                      activeBalance={balanceData}
                      currencyData={userCurrency}
                      onSelect={onCurrencySelect}
                    />
                  </BalanceErrorBoundary>
                  :
                  <></>
              }
            </div>

            <button className={styles.button} onClick={submit}>
              {t("tournaments.award.save")}
            </button>
          </div>
          <div className={styles.awardFooter}/>
        </div>
      )}
    </div>
  )
}
