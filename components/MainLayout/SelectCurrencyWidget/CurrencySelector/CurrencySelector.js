import styles from '../../../../styles/CurrencySelector/CurrencySelector.module.scss';
import {InputContainer} from "./InputContainer";
import {CurrencyItem} from "./CurrencyItem";
import {CurrencyList} from "./CurrencyList";
import {useState} from "react";

export const CurrencySelector = ({t, cryptoCurrency, popularCurrency, stableCurrency, fiatCurrency}) => {
  const [searchValue, setSearchValue] = useState('');

  const [cryptoFindArr, setCryptoFindArr] = useState(cryptoCurrency);
  const [popularFindArr, setPopularFindArr] = useState(popularCurrency);


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

  }

  return (
    <div  className={styles.currencySelectorContainerWrapper}>
      <div className={styles.currencySelectorContainer}>
        <InputContainer searchValue={searchValue} searchInputHandler={searchInputHandler} t={t} />
        <div  className={styles.currenciesListsContainer}>
          {popularFindArr.length === 0 ? <></> : <CurrencyList t={t} type={"Popular Crypto"} currenciesData={popularFindArr}/>}
          <CurrencyList t={t} type={"Stable Coins"} currenciesData={stableCurrency}/>
          <CurrencyList t={t} type={"Fiat"} currenciesData={fiatCurrency}/>
          {cryptoFindArr.length === 0 ? <></> : <CurrencyList t={t} type={"Crypto Currencies"} currenciesData={cryptoFindArr}/>}
        </div>
      </div>
    </div>
  )
}