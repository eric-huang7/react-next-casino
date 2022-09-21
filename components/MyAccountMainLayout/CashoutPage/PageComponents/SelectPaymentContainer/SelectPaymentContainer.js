import styles from '../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss'
import {CreditCardPayment} from './CreditCardPaymentItem/CreditcardPayment'
import {CryptoPaymentItem} from './CryptoPaymentContainer/CryptoPaymentContainer'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import ErrorText from '../../../../ErrorBoundaryComponents/ErrorText'

export const SelectPaymentContainer = ({t, balanceData, typeOfCurrency, currencyData, userInfo}) => {
  const router = useRouter()

  let BTC = currencyData.filter((el) => el.abbreviation === 'BTC')[0]
  let LTC = currencyData.filter((el) => el.abbreviation === 'LTC')[0]
  let BCH = currencyData.filter((el) => el.abbreviation === 'BCH')[0]
  let ETH = currencyData.filter((el) => el.abbreviation === 'ETH')[0]

  const [activeItems, setActiveItems] = useState([
    {
      isActive: true,
      name: 'creditCard'
    },
    {
      isActive: false,
      name: 'BTC'
    },
    {
      isActive: false,
      name: 'LTC'
    },
    {
      isActive: false,
      name: 'BCH'
    },
    {
      isActive: false,
      name: 'ETH'
    }
  ])

  useEffect(() => {
    setActiveItems([
      {
        isActive: true,
        name: 'creditCard'
      },
      {
        isActive: false,
        name: 'BTC'
      },
      {
        isActive: false,
        name: 'LTC'
      },
      {
        isActive: false,
        name: 'BCH'
      },
      {
        isActive: false,
        name: 'ETH'
      }
    ])
  }, [router])

  const activateItemClickHandler = (checkItem) => {
    let newActiveItems = activeItems.map((el) => {
      if (el.name === checkItem.name) {
        return {
          ...el,
          name: el.name,
          isActive: true,
        }
      } else {
        return {
          ...el,
          name: el.name,
          isActive: false,
        }
      }
    })
    setActiveItems(newActiveItems)
  }

  const cryptoItem = {
    name: typeOfCurrency.abbreviation,
    isActive: true,
  }

  const paymentItems = [
    {name: 'BTC', data: BTC},
    {name: 'LTC', data: LTC},
    {name: 'BCH', data: BCH},
    {name: 'ETH', data: ETH}
  ];

  return (
    <div className={styles.selectMethodContainer}>
      <p className={styles.containerHeading}>{t('myAccount.cashoutPage.selectPaymentContainer.heading')}</p>
      <div className={styles.paymentMethodWrapper}>
        <ul className={styles.methodsList}>
          {typeOfCurrency.type === 3
            ? <>
              <ErrorText>
                <CreditCardPayment
                  t={t}
                  isActive={activeItems.find((el) => el.name === 'creditCard')}
                  typeOfCurrency={typeOfCurrency}
                  activateItemClickHandler={activateItemClickHandler}
                  userInfo={userInfo}
                />
              </ErrorText>
              {paymentItems.map(item => (
                <ErrorText key={item.name}>
                  <CryptoPaymentItem
                    t={t}
                    isActive={activeItems.find((el) => el.name === item.name)}
                    balanceData={balanceData}
                    typeOfCurrency={item.data}
                    chosenPayment={typeOfCurrency}
                    activateItemClickHandler={activateItemClickHandler}
                    userInfo={userInfo}
                  />
                </ErrorText>
              ))}
            </>
            : <ErrorText>
              <CryptoPaymentItem
                t={t}
                isActive={cryptoItem}
                balanceData={balanceData}
                typeOfCurrency={typeOfCurrency}
                // chosenPayment={typeOfCurrency}
                activateItemClickHandler={activateItemClickHandler}
                userInfo={userInfo}
              />
            </ErrorText>
          }
        </ul>
      </div>
    </div>
  )
}
