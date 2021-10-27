import styles from '../../styles/PaymentsMethodsPage/PaymentsWithdrawBlock.module.scss'
import {PaymentDataItem} from "./PaymentDataItem";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const withdrawInfo = {
  depositId: 1,
  paymentId: 1,
  paymentImage: '/assets/img/withdrawIcons/bitcoin.png',
  paymentName: "Bitcoin",
  depositType: "Munch Better",
  depositFee: "0%",
  depositProcessingTime: "Instantly",
  depositLimitPerTransaction: {
    minLimit: "$ 10",
    maxLimit: "$ 5000"
  }
}

export const PaymentsWithdrawBlock = ({t}) => {
  const {height, width} = useWindowDimensions();

  let arrItemsFullScreen = [
    <PaymentDataItem t={t} dataInfo={withdrawInfo} type={'withdraw'}/>,
    <PaymentDataItem t={t} dataInfo={withdrawInfo} type={'withdraw'}/>,
    <PaymentDataItem t={t} dataInfo={withdrawInfo} type={'withdraw'}/>,
    <PaymentDataItem t={t} dataInfo={withdrawInfo} type={'withdraw'}/>,
  ];
  let arrItemMobile = [
    <PaymentDataItem t={t} dataInfo={withdrawInfo} type={'withdraw'}/>,
    <PaymentDataItem t={t} dataInfo={withdrawInfo} type={'withdraw'}/>,
    <PaymentDataItem t={t} dataInfo={withdrawInfo} type={'withdraw'}/>,
  ];


  let usedArrItems = arrItemsFullScreen;

  if (width < 665) {
    usedArrItems = arrItemMobile;
  } else {
    usedArrItems = arrItemsFullScreen;
  }
  return (
    <section className={styles.withdrawBlockWrapper}>
      <h2 className={styles.withdrawHeading}>Withdraw</h2>
      <div className={styles.withdrawItemsWrapper}>
        <div className={styles.withdrawItemsFrame}>
          {
            usedArrItems.map((el) => el)
          }
        </div>
      </div>
    </section>
  )
}