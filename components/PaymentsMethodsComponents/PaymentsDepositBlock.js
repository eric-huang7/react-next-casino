import styles from '../../styles/PaymentsMethodsPage/PaymentsDepositBlock.module.scss';
import {PaymentDataItem} from "./PaymentDataItem";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {useState} from "react";

const depositInfo = {
  depositId: 1,
  paymentId: 1,
  paymentImage: '/assets/img/paymentsIcons/skrill.png',
  paymentName: "Skrill",
  depositType: "Munch Better",
  depositFee: "0%",
  depositProcessingTime: "Instantly",
  depositLimitPerTransaction: {
    minLimit: "$ 10",
    maxLimit: "$ 5000"
  }
}



export const PaymentsDepositBlock = ({t, }) => {
  const {height, width} = useWindowDimensions();


  let arrItemsFullScreen =  [
    <PaymentDataItem t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem t={t} dataInfo={depositInfo} type={"deposit"}/>,
  ];
  let arrItemMobile = [
    <PaymentDataItem t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem t={t} dataInfo={depositInfo} type={"deposit"}/>,
  ]

 let usedArrItems = arrItemsFullScreen;

  if (width < 665) {
    usedArrItems = arrItemMobile;
  } else {
    usedArrItems = arrItemsFullScreen;
  }

  return (
    <section className={styles.depositBlockWrapper}>
      <h2 className={styles.depositHeading}>Deposit</h2>
      <div className={styles.depositItemsWrapper}>
        <div className={styles.depositsItemsFrame}>
          {
            usedArrItems.map((el) => el)
          }
        </div>
      </div>
    </section>
  )
}