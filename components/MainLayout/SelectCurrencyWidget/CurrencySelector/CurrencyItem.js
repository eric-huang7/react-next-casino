import styles from '../../../../styles/CurrencySelector/CurrencySelector.module.scss'

import { useEffect } from 'react'
import { svgSetter } from '../../../../helpers/iconNameFinder'

export const CurrencyItem = ({ t, currencyData, currencySelectorHandler = () => {} }) => {

  const abbr = currencyData.abbreviation
  const name = currencyData.name
  const base = currencyData.base
  let colorBase = '#4fadcf'
  const baseVariants = {
    'ETH': '#4fadcf',
    'EOS': '#002fe8',
    'NEO': '#50b271',
    'BNB': '#f0b90b',
    'XLM': '#b362ff',
    'MATIC': '#7123af',
    'ATOM': '#140069',
    'KLAY': '#3b2727',
    'TRX': '#f00b0b',
    'RBTC': '#9f7e38',
    'ONT': '#0088a2',
    'WAVES': '#124fff',
    'HTML': '#001d8f',
    'CHZ': '#e14040',
    'TOMO': '#565151',
    'FTM': '#3a7bfa',
    'XDC': '#3b447a',
    'CELO': '#d5ba3b',
    'STAKE': '#434356',
    'AVAX': '#e05555',
    'SOL': '#67498f',
    'ZIL': '#6fbdba',
    'HT': '#272657',
    'WAN': '#4574da',
    'IOST': '#5e0000',
    'LUNA': '#002bff',
    'ADA': '#1c3a9d',
    'BSC': '#ffc241'
  }

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
