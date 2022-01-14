import styles from "../../../../styles/CurrencySelector/CurrencySelector.module.scss";

import {useEffect, useState} from "react";

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

useEffect(() => {
  function svgSetter () {
    let svg = document.getElementById("currencyIframe");
    let container = document.getElementById(`currencyItemContainer${currencyData.abbreviation}`);
    if (svg) {
      let currencyIcon = svg.contentWindow.window.document.getElementById(currencyData.abbreviation.toLowerCase())

      if (currencyIcon) {
        container.innerHTML = currencyIcon.outerHTML;
      } else {
        container.innerHTML = currencyData.abbreviation;
      }
    } else {
      container.innerHTML = currencyData.abbreviation;
    }
  }
  svgSetter();
}, [])




  return (
    <li onClick={() => currencySelectorHandler(currencyData)} className={styles.currencyItem}>
      <div id={`currencyItemContainer${currencyData.abbreviation}`} className={styles.iconContainer}>

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