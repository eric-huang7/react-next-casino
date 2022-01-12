import styles from "../../../../styles/CurrencySelector/CurrencySelector.module.scss";
import {currencyIconsUrl} from "../../../../helpers/imageUrl";
import {useEffect} from "react";
import axios from "axios";


export const CurrencyItem = ({t, currencyData}) => {

  const abbr = currencyData.abbreviation;
  const name = currencyData.name;
  const base = currencyData.base;
  let colorBase = "#4fadcf";

  if (base) {
    colorBase = base === "ETN" ? "#4fadcf" : base === "TRX" ? "#f00b0b" : base === "BSC" ? "#f0b90b" : "#ef8a13";
  } else {
    colorBase = null;
  }


  return (
    <li className={styles.currencyItem}>
      <div  className={styles.iconContainer}>
        {/*<img src={currencyIconsUrl()} alt="currency icon"/>*/}
        <svg viewBox='0 0 16 16'>
          <use href={"https://cimagehost1.sos-ch-gva-2.exoscale-cdn.com/currency/coins.svg#ach"} />
        </svg>

      </div>
      <div  className={styles.currencyInfoContainer}>
        <div className={styles.currencyAbbrBaseWrapper}>
          <span className={styles.abbreviation}>{abbr}</span>
          {!!base ? <span className={styles.baseName} style={{backgroundColor: `${colorBase}`}}>{base}</span> : <></>}

        </div>
        <span className={styles.name}>{name}</span>
      </div>
    </li>
  )
}