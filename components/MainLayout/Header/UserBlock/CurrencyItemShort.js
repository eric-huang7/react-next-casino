import styles from '../../../../styles/CurrencySelectorShort/CurrencySelectorShort.module.scss'

import { useEffect } from 'react'
import { svgSetter } from '../../../../helpers/iconNameFinder'
import {baseVariants} from "../../../../envs/currency";

export const CurrencyItemShort = ({ currencyData }) => {

  const abbr = currencyData?.abbreviation
  const base = currencyData?.base
  let colorBase = '#4fadcf'

  if (base) {
    colorBase = !!baseVariants[base] ? baseVariants[base] : '#ef8a13'
  } else {
    colorBase = null
  }

  useEffect(() => {
    const returnAbbr = false
    svgSetter(currencyData, returnAbbr)
  }, [])

  return (
    <div className={styles.currencyItem}>
      <div id={`currencyImageContainer${currencyData?.id}`} className={styles.iconContainer}></div>
      <div className={styles.abbreviation}>
        <div>{abbr}</div>
        {!!base && <div className={styles.baseContainer} style={{ backgroundColor: `${colorBase}` }}>{base}</div>}
      </div>
    </div>
  )
}
