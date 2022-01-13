import styles from "../../../../styles/CurrencySelector/CurrencySelector.module.scss";
import {currencyIconsUrl} from "../../../../helpers/imageUrl";


export const CurrencyItem = ({t, currencyData, currencySelectorHandler}) => {

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
    <li onClick={() => currencySelectorHandler(currencyData)} className={styles.currencyItem}>
      <div  className={styles.iconContainer}>
        {/*<img src={'/assets/icons/some.svg'} alt="currency icon"/>*/}
        {/*<svg href={"/assets/icons/some.svg"} id={"iconsSvg"}>*/}
        {/*</svg>*/}
        {/*<svg >*/}
        {/*  <use xlinkHref={"/assets/icons/some.svg#ach"}>some svg</use>*/}
        {/*</svg>*/}


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