import styles from '../../../../styles/CurrencySelector/CurrencySelector.module.scss'

import { useEffect } from 'react'
import { svgSetter } from '../../../../helpers/iconNameFinder'
import {baseVariants} from "../../../../envs/currency";

export const CurrencyItem = ({ t, currencyData, currencySelectorHandler = () => {} }) => {

  const abbr = currencyData.abbreviation
  const name = currencyData.name
  const base = currencyData.base
  let colorBase = '#4fadcf'

  if (base) {
    colorBase = !!baseVariants[base] ? baseVariants[base] : '#ef8a13'
  } else {
    colorBase = null
  }

  useEffect(() => {
    const returnAbbr = true
    svgSetter(currencyData, returnAbbr)
  }, [])

  return (
    <li onClick={() => currencySelectorHandler(currencyData)} className={styles.currencyItem}>
      <div id={`currencyImageContainer${currencyData.id}`} className={styles.iconContainer}>

      </div>
      <div className={styles.currencyInfoContainer}>
        <div className={styles.currencyAbbrBaseWrapper}>
          <span className={styles.abbreviation}>{abbr}</span>
          {!!base ? <span className={styles.baseName} style={{ backgroundColor: `${colorBase}` }}>{base}</span> : <></>}

        </div>
        <span className={styles.name}>{name}</span>
      </div>

    </li>
  )
}
