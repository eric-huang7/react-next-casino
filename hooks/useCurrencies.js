import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Connect from "../helpers/connect";
import {currency_quotes_url} from "../redux/url/url";

export default function useCurrencies() {
  const dispatch = useDispatch();
  const [rates, setRates] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [abbr, setAbbr] = useState([]);
  const [total, setTotal] = useState({crypto: 0, fiat: 0});

  const balanceInfo = useSelector((store) => store.authInfo)
  const currency = useSelector((store) => store.currency)

  useEffect(() => {
    console.log('useCurrencies 1')
    if (balanceInfo?.balance?.balances && currency?.currency?.results) {
      const currencies = balanceInfo?.balance?.balances?.map((item) => ({
        ...item,
        currency: currency?.currency?.results?.find((el) => Number(el.id) === Number(item.currency_id))
      }))
      setCurrencies(currencies);
      const abbr = currencies?.map(item => item?.currency?.abbreviation) || [];
      if (!abbr?.includes('USD')) {
        abbr.push('USD')
      }
      setAbbr(abbr);
    }
  }, [balanceInfo?.balance?.balances, currency?.currency?.results]);

  // useEffect(() => {
  //   if (rates && currencies) {
  //     const rateArr = [];
  //     let rateUsd = rates['USD'] ?? 1;
  //     let total = 0;
  //     let totalCrypto = 0;
  //     let totalFiat = 0;
  //
  //     currencies.forEach(item => {
  //       const rate = rates[item.currency?.abbreviation];
  //
  //       if (!isNaN(rate)) {
  //         const isFiat =  item.currency?.type === 3;
  //         const cryptoAmount =  parseFloat(item.current_balance) / rate;
  //         const fiatAmount = rateUsd * cryptoAmount;
  //         if (isFiat) {
  //           totalFiat += cryptoAmount
  //         } else {
  //           totalCrypto += cryptoAmount
  //         }
  //
  //         rateArr.push({
  //           currency: item,
  //           rate,
  //           cryptoAmount,
  //           fiatAmount,
  //           isFiat
  //         })
  //       }
  //     })
  //
  //     total = totalCrypto + totalFiat;
  //     setTotal({
  //       cryptoBtc: totalCrypto.toFixed(9),
  //       cryptoUsd: (totalCrypto * rateUsd).toFixed(2),
  //       fiatBtc: totalFiat.toFixed(9),
  //       fiatUsd: (totalFiat * rateUsd).toFixed(2),
  //       totalBtc: (totalCrypto + totalFiat).toFixed(9),
  //       totalUsd: ((totalCrypto + totalFiat) * rateUsd).toFixed(2)
  //     })
  //   }
  // }, [rates, currencies]);

  useEffect(() => {
    console.log('useCurrencies 2')
    if (abbr?.length > 0 && rates.length === 0) {
      Connect.get(currency_quotes_url + abbr.join(','), {}, (status, data) => {
        const rates = data?.results
        setRates(rates)
      }).catch((err) => {
      })
    }
  }, [abbr])

  return {rates, currencies, abbr};
}
