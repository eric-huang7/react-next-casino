import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss'
import {useEffect, useState} from "react";
import {useTranslation} from "next-i18next";

export const TotalBalance = ({ rates, rateUsd, currencies, t }) => {
  const [total, setTotal] = useState({crypto: 0, fiat: 0});

  useEffect(() => {
    if (rates && currencies) {
      const rateArr = [];
      let totalCrypto = 0;
      let totalFiat = 0;

      currencies.forEach(item => {
        const rate = rates[item.currency?.id];

        if (!isNaN(rate)) {
          const isFiat =  item.currency?.type === 3;
          const cryptoAmount =  parseFloat(item.current_balance) / rate;
          const fiatAmount = rateUsd * cryptoAmount;
          if (isFiat) {
            totalFiat += cryptoAmount
          } else {
            totalCrypto += cryptoAmount
          }

          rateArr.push({
            currency: item,
            rate,
            cryptoAmount,
            fiatAmount,
            isFiat
          })
        }
      })

      setTotal({
        cryptoBtc: totalCrypto.toFixed(8),
        cryptoUsd: rateUsd ? (totalCrypto * rateUsd).toFixed(2) : null,
        fiatBtc: totalFiat.toFixed(8),
        fiatUsd: rateUsd ? (totalFiat * rateUsd).toFixed(2) : null,
        totalBtc: (totalCrypto + totalFiat).toFixed(8),
        totalUsd: rateUsd ? ((totalCrypto + totalFiat) * rateUsd).toFixed(2) : null
      })
    }
  }, [rates, currencies, rateUsd]);

  return rateUsd ? (
    <div className={styles.balanceHeader}>
      <div>
        <div>{t('myAccount.balance.fiatAndSpotBalance')}</div>
        <div className={styles.balanceCrypto}>
          {total.totalBtc} BTC <span className={styles.balanceFiat}>{total.totalUsd && <span>≈ {total.totalUsd} USD</span>}</span>
        </div>
      </div>
      <div>
        <div>{t('myAccount.balance.spotBalance')}</div>
        <div className={styles.balanceCrypto}>{total.cryptoBtc} BTC</div>
        {total.cryptoUsd && <div className={styles.balanceFiat}>≈ {total.cryptoUsd} USD</div>}
      </div>
      <div>
        <div>{t('myAccount.balance.fiatBalance')}</div>
        <div className={styles.balanceCrypto}>{total.fiatBtc} BTC</div>
        {total.fiatUsd && <div className={styles.balanceFiat}>≈ {total.fiatUsd} USD</div>}
      </div>
    </div>
  ) : null
}
