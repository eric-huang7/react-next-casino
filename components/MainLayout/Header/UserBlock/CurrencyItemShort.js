import styles from '../../../../styles/CurrencySelectorShort/CurrencySelectorShort.module.scss'
import {baseVariants} from "../../../../envs/currency";
import CurrencyIcon from "../../../currency/CurrencyIcon";

export const CurrencyItemShort = ({ currencyData, isMilli }) => {

  const abbr = currencyData?.abbreviation
  const base = currencyData?.base
  let colorBase = '#4fadcf'

  if (base) {
    colorBase = !!baseVariants[base] ? baseVariants[base] : '#ef8a13'
  } else {
    colorBase = null
  }

  return (
    <div className={styles.currencyItem}>
      <CurrencyIcon id={currencyData?.abbreviation} size={6} mx={2}/>
      <div className={styles.abbreviation}>
        <div>{isMilli && 'm'}{abbr}</div>
        {!!base && <div className={styles.baseContainer} style={{ backgroundColor: `${colorBase}` }}>{base}</div>}
      </div>
    </div>
  )
}
