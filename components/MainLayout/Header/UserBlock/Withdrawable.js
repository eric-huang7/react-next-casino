import styles from '../../../../styles/CurrencySelectorShort/CurrencySelectorShort.module.scss'

import { useEffect } from 'react'
import {svgSetterById} from '../../../../helpers/iconNameFinder'
import {baseVariants} from "../../../../envs/currency";

export const Withdrawable = ({ currencyData, isMilli }) => {

  const abbr = currencyData?.abbreviation
  const base = currencyData.base
  let colorBase = '#4fadcf'

  if (base) {
    colorBase = !!baseVariants[base] ? baseVariants[base] : '#ef8a13'
  } else {
    colorBase = null
  }

  useEffect(() => {
    const returnAbbr = false
    svgSetterById(currencyData, `withrawableImageContainer${currencyData.id}`, returnAbbr);
  }, [currencyData])

  return (
    <div className={styles.currencyItem}>
      <div id={`withrawableImageContainer${currencyData.id}`} className={styles.iconContainer}></div>
      <div className={styles.abbreviation}>
        <div>{isMilli && 'm'}{abbr}</div>
        {!!base && <div className={styles.baseContainer} style={{ backgroundColor: `${colorBase}` }}>{base}</div>}
      </div>
    </div>
  )
}
