import styles from '../../../../styles/CurrencySelector/CurrencySelector.module.scss';
import {InputContainer} from "./InputContainer";
import {CurrencyItem} from "./CurrencyItem";
import {CurrencyList} from "./CurrencyList";
import {useState} from "react";

export const CurrencySelector = ({t, cryptoCurrency, popularCurrency, stableCurrency, fiatCurrency}) => {
  const [searchValue, setSearchValue] = useState('');

  const [cryptoFindArr, setCryptoFindArr] = useState(cryptoCurrency);
  const [popularFindArr, setPopularFindArr] = useState(popularCurrency);
  const [stableFindArr, setStableFindArr] = useState(stableCurrency);
  const [fiatFindArr, setFiatFindArr] = useState(fiatCurrency);


  const searchInputHandler = (value) => {
    setSearchValue(value);

    cryptoFinder(value);
  }

  // console.log(searchValue);

  const cryptoFinder = (value) => {
    let searchReg = new RegExp(value.toLowerCase().trim());

    const cryptoFindArr = cryptoCurrency.filter((currency) => {
      if (searchReg.test(currency.abbreviation.toLowerCase()) || searchReg.test(currency.name.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    })
    setCryptoFindArr(cryptoFindArr);
    const popularFindArr = popularCurrency.filter((currency) => {
      if (searchReg.test(currency.abbreviation.toLowerCase()) || searchReg.test(currency.name.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    })
    setPopularFindArr(popularFindArr);
    const stableFindArr = stableCurrency.filter((currency) => {
      if (searchReg.test(currency.abbreviation.toLowerCase()) || searchReg.test(currency.name.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    })
    setStableFindArr(stableFindArr);
    const fiatFindArr = fiatCurrency.filter((currency) => {
      if (searchReg.test(currency.abbreviation.toLowerCase()) || searchReg.test(currency.name.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    })
    setFiatFindArr(fiatFindArr);

  }

  return (
    <div  className={styles.currencySelectorContainerWrapper}>
      <div className={styles.currencySelectorContainer}>
        <InputContainer searchValue={searchValue} searchInputHandler={searchInputHandler} t={t} />
        <div  className={styles.currenciesListsContainer}>
          {popularFindArr.length === 0 ? <></> : <CurrencyList t={t} type={"Popular Crypto"} currenciesData={popularFindArr}/>}
          {stableFindArr.length === 0 ? <></> : <CurrencyList t={t} type={"Stable Coins"} currenciesData={stableFindArr}/>}
          {fiatFindArr.length === 0 ? <></> : <CurrencyList t={t} type={"Fiat"} currenciesData={fiatFindArr}/>}
          {cryptoFindArr.length === 0 ? <></> : <CurrencyList t={t} type={"Crypto Currencies"} currenciesData={cryptoFindArr}/>}
          {
            popularFindArr.length || stableFindArr.length || fiatFindArr.length || cryptoFindArr.length
              ?
              <></>
              :
              <p className={styles.nothingFoundText}>{"No matches were found for your query"}</p>
          }
        </div>
      </div>
    </div>
  )
}