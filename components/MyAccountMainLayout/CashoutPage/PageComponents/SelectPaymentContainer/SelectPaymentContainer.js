import styles from '../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss';
import {CreditCardPayment} from "./CreditCardPaymentItem/CreditcardPayment";
import {CryptoPaymentItem} from "./CryptoPaymentContainer/CryptoPaymentContainer";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";



export const SelectPaymentContainer = ({t, balanceData, typeOfCurrency, currencyData, userInfo}) => {
  const router = useRouter();

  let BTC = currencyData.filter((el) => el.abbreviation === "BTC")[0];
  let LTC = currencyData.filter((el) => el.abbreviation === "LTC")[0];
  let BCH = currencyData.filter((el) => el.abbreviation === "BCH")[0];
  let ETH = currencyData.filter((el) => el.abbreviation === "ETH")[0];


  const [activeItems, setActiveItems] = useState([
    {
      isActive: true,
      name: "creditCard"
    },
    {
      isActive: false,
      name: "BTC"
    },
    {
      isActive: false,
      name: "LTC"
    },
    {
      isActive: false,
      name: "BCH"
    },
    {
      isActive: false,
      name: "ETH"
    }
  ])

  useEffect(() => {
    setActiveItems([
      {
        isActive: true,
        name: "creditCard"
      },
      {
        isActive: false,
        name: "BTC"
      },
      {
        isActive: false,
        name: "LTC"
      },
      {
        isActive: false,
        name: "BCH"
      },
      {
        isActive: false,
        name: "ETH"
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
    } )
    setActiveItems(newActiveItems);
  }

  if (typeOfCurrency.type === 3) {

    return (
      <div className={styles.selectMethodContainer}>
        <p className={styles.containerHeading}>{"Select Payment Method"}</p>
        <div className={styles.paymentMethodWrapper}>
          <ul className={styles.methodsList}>
            <CreditCardPayment
              t={t}
              isActive={activeItems.find((el) => el.name === 'creditCard')}
              typeOfCurrency={typeOfCurrency}
              activateItemClickHandler={activateItemClickHandler}
              userInfo={userInfo}
            />
            <CryptoPaymentItem
              t={t}
              isActive={activeItems.find((el) => el.name === 'BTC')}
              balanceData={balanceData}
              typeOfCurrency={BTC}
              chosenPayment={typeOfCurrency}
              activateItemClickHandler={activateItemClickHandler}
              userInfo={userInfo}
            />
            <CryptoPaymentItem
              t={t}
              isActive={activeItems.find((el) => el.name === 'LTC')}
              balanceData={balanceData}
              typeOfCurrency={LTC}
              chosenPayment={typeOfCurrency}
              activateItemClickHandler={activateItemClickHandler}
              userInfo={userInfo}
            />
            <CryptoPaymentItem
              t={t}
              isActive={activeItems.find((el) => el.name === 'BCH')}
              balanceData={balanceData}
              typeOfCurrency={BCH}
              chosenPayment={typeOfCurrency}
              activateItemClickHandler={activateItemClickHandler}
              userInfo={userInfo}
            />
            <CryptoPaymentItem
              t={t}
              isActive={activeItems.find((el) => el.name === 'ETH')}
              balanceData={balanceData}
              typeOfCurrency={ETH}
              chosenPayment={typeOfCurrency}
              activateItemClickHandler={activateItemClickHandler}
              userInfo={userInfo}
            />
          </ul>
        </div>
      </div>
    )
  } else {
    const cryptoItem = {
      name: typeOfCurrency.abbreviation,
      isActive: true,
    }

    return (
      <div className={styles.selectMethodContainer}>
        <p className={styles.containerHeading}>{"Select Payment Method"}</p>
        <div className={styles.paymentMethodWrapper}>
          <ul className={styles.methodsList}>
            <CryptoPaymentItem
              t={t}
              isActive={cryptoItem}
              balanceData={balanceData}
              typeOfCurrency={typeOfCurrency}
              activateItemClickHandler={activateItemClickHandler}
              userInfo={userInfo}
            />
          </ul>
        </div>
      </div>
    )
  }

}