import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Connect from "../helpers/connect";
import {currency_quotes_url} from "../redux/url/url";

export default function useCurrencies() {
  const [rates, setRates] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [abbr, setAbbr] = useState([]);
  const [rateUsd, setRateUsd] = useState(1);

  const balanceInfo = useSelector((store) => store.authInfo)
  const currency = useSelector((store) => store.currency)

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
      let currencyUsd = currencies.find(item => item.currency?.abbreviation === 'USD');
      let rateUsd = currencyUsd?.currency?.id
        ? (rates[currencyUsd.currency.id] ? Number(rates[currencyUsd.currency.id]) : null)
        : null;
      setRateUsd(rateUsd);
    }
  }, [rates, currencies]);

  useEffect(() => {
    if (abbr?.length > 0 && rates.length === 0) {
      const ids = abbr.map(item => item.id);
      Connect.get(`${currency_quotes_url}&convertIds=${ids.join(',')}`, {}, (status, data) => {
        const rates = data?.results
        setRates(rates)
      }).catch((err) => {
      })
    }
  }, [abbr])

  return {rates, currencies, abbr, rateUsd};
}
