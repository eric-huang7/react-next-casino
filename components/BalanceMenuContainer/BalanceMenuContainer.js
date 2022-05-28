import styles from '../../styles/BalanceMenu/BalanceMenu.module.scss'

import { BalanceItem } from './BalanceItem'
import BalanceItemError from './BalanceErrorBoundary/BalansItemError'

export const BalanceMenuContainer = ({ balanceData, currencyData, activeBalance, onSelect }) => {

  let balanceArr = []

  try {
    balanceArr = balanceData.balance.balances.filter((el) => Number(el.currency_id) !== Number(activeBalance[0].currency_id))
  } catch (e) {
    balanceArr = []
  }

  return (
    <div className={styles.balanceMenuContainer}>
      <ul className={styles.balanceList}>
        {
          balanceArr.map((el) => {

            return (
              <BalanceItemError key={`${el.id} balance item`}>
                <BalanceItem
                  key={`${el.id} balance item`}
                  balanceData={el}
                  currencyData={currencyData}
                  onSelect={onSelect}
                />
              </BalanceItemError>
            )
          })
        }

      </ul>
    </div>
  )
}
