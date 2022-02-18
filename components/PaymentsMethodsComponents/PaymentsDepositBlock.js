import styles from '../../styles/PaymentsMethodsPage/PaymentsDepositBlock.module.scss';
import {PaymentDataItem} from "./PaymentDataItem";
import useWindowDimensions from "../../hooks/useWindowDimensions";


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
  const {width} = useWindowDimensions();

  let arrItemsFullScreen =  [
    <PaymentDataItem key={`${depositInfo.depositId} deposit 1`} t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem key={`${depositInfo.depositId} deposit 2`} t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem key={`${depositInfo.depositId} deposit 3`} t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem key={`${depositInfo.depositId} deposit 4`} t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem key={`${depositInfo.depositId} deposit 5`} t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem key={`${depositInfo.depositId} deposit 6`} t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem key={`${depositInfo.depositId} deposit 7`} t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem key={`${depositInfo.depositId} deposit 8`} t={t} dataInfo={depositInfo} type={"deposit"}/>,
  ];
  let arrItemMobile = [
    <PaymentDataItem key={`${depositInfo.depositId} deposit 1`} t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem key={`${depositInfo.depositId} deposit 2`} t={t} dataInfo={depositInfo} type={"deposit"}/>,
    <PaymentDataItem key={`${depositInfo.depositId} deposit 3`} t={t} dataInfo={depositInfo} type={"deposit"}/>,
  ]

 let usedArrItems = arrItemsFullScreen;

  if (width < 665) {
    usedArrItems = arrItemMobile;
  } else {
    usedArrItems = arrItemsFullScreen;
  }

  return (
    <section className={styles.depositBlockWrapper}>
      <h2 className={styles.depositHeading}>{t("paymentsMethodsPage.depositBlock.heading")}</h2>
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