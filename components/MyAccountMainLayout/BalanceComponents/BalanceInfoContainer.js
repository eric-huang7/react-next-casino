import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss'
import { TableContainer } from './TableContainer'
import { useDispatch } from 'react-redux'
import { LoadingComponent } from '../../LoadingComponent/LoadingComponent'
import { showCurrencySwitcher } from '../../../redux/popups/action'
import { setCurrencySelectorType } from '../../../redux/userFinance/action'
import {useEffect, useState} from "react";
import Connect from "../../../helpers/connect";
import {currency_quotes_url, token_url} from "../../../redux/url/url";
import {
  get_crypto_currency,
  get_fiat_currency,
  get_popular_currency,
  get_stable_currency
} from "../../../redux/currency/action";

export const BalanceInfoContainer = ({ t, balanceInfo, currency }) => {
  const dispatch = useDispatch();
  const [rates, setRates] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [abbr, setAbbr] = useState([]);
  const [total, setTotal] = useState({crypto: 0, fiat: 0});

  const addCurrencyClickHandler = () => {
    dispatch(showCurrencySwitcher(true));
    dispatch(setCurrencySelectorType(false));
  }

  useEffect(() => {
    if (balanceInfo?.balance?.balances && currency?.currency?.results) {
      const currencies = balanceInfo?.balance?.balances?.map((item) => ({
        ...item,
        currency: currency?.currency?.results?.find((el) => Number(el.id) === Number(item.currency_id))
      }))
      setCurrencies(currencies);

      const abbr = currencies?.
        filter(item => Number(item.cash_amount) > 0).
        map(item => ({abbr: item.currency?.abbreviation, id: item.currency?.id})) || [];
      const isUsd = abbr.find(item => item.abbr === 'USD');
      if (!isUsd) {
        const currencyUsd = currencies?.find(item => item.currency?.abbreviation === 'USD');

        if (currencyUsd) {
          abbr.push({abbr: currencyUsd.currency?.abbreviation, id: currencyUsd.currency?.id});
        }
      }
      
      setAbbr(abbr);
    }
  }, [balanceInfo?.balance?.balances, currency?.currency?.results]);

  useEffect(() => {
    if (rates && currencies) {
      const rateArr = [];
      let usdCurrency = currencies.find(item => item.currency?.abbreviation === 'USD');
      let rateUsd = usdCurrency ? rates[usdCurrency.currency.id] : 1;
      let totalCrypto = 0;
      let totalFiat = 0;

      currencies.forEach(item => {
        const rate = rates[item.currency?.id];

        if (!isNaN(rate)) {
          const isFiat =  item.currency?.type === 3;
          const cryptoAmount =  parseFloat(item.current_balance) / rate;
          const fiatAmount = rateUsd * cryptoAmount;
          if (isFiat) {
            totalFiat += cryptoAmount
          } else {
            totalCrypto += cryptoAmount
          }

          rateArr.push({
            currency: item,
            rate,
            cryptoAmount,
            fiatAmount,
            isFiat
          })
        }
      })

      setTotal({
        cryptoBtc: totalCrypto.toFixed(8),
        cryptoUsd: (totalCrypto * rateUsd).toFixed(2),
        fiatBtc: totalFiat.toFixed(8),
        fiatUsd: (totalFiat * rateUsd).toFixed(2),
        totalBtc: (totalCrypto + totalFiat).toFixed(8),
        totalUsd: ((totalCrypto + totalFiat) * rateUsd).toFixed(2)
      })
    }
  }, [rates, currencies]);

  useEffect(() => {
    if (abbr?.length > 0 && rates.length === 0) {
      const abbrs = abbr.map(item => item.abbr);
      const ids = abbr.map(item => item.id);
      Connect.get(`${currency_quotes_url}&convertIds=${ids.join(',')}`, {}, (status, data) => {
        const rates = data?.results
        setRates(rates)
      }).catch((err) => {
      })
    }
  }, [abbr])

  if (balanceInfo?.balance?.success && !currency.loading) {
    return (
      <>
        <div className={styles.balanceHeader}>
          <div>
            <div>{t('myAccount.balance.fiatAndSpotBalance')}</div>
            <div className={styles.balanceCrypto}>
              {total.totalBtc} BTC <span className={styles.balanceFiat}>≈ {total.totalUsd} USD</span>
            </div>
          </div>
          <div>
            <div>{t('myAccount.balance.spotBalance')}</div>
            <div className={styles.balanceCrypto}>{total.cryptoBtc} BTC</div>
            <div className={styles.balanceFiat}>≈ {total.cryptoUsd} USD</div>
          </div>
          <div>
            <div>{t('myAccount.balance.fiatBalance')}</div>
            <div className={styles.balanceCrypto}>{total.fiatBtc} BTC</div>
            <div className={styles.balanceFiat}>≈ {total.fiatUsd} USD</div>
          </div>
        </div>
        <div className={styles.tableContainerWrapper}>
          <TableContainer currency={currency} balanceInfo={balanceInfo} t={t}/>
        </div>
        <button onClick={() => addCurrencyClickHandler()} className={styles.addCurrencyButton}>
          {t('myAccount.balance.buttons.addCurrency')}
        </button>
      </>
    )
  } else {
    return (
      <LoadingComponent t={t}/>
    )
  }

}
