import styles from '../../styles/PaymentsMethodsPage/PaymentsDepositBlock.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {showDepositModal} from "../../redux/actions/showPopups";


export const PaymentDataItem = ({t, dataInfo, type}) => {
  const dispatch = useDispatch();
  let isOpenDepositWindow = useSelector((state) => state.showPopupsReducer.isShowDepositModal)

  const depositPaymentsClickHandler = () => {
    dispatch(showDepositModal(true));
    console.log(isOpenDepositWindow);
  }


  return (
    <div className={styles.depositItemMainWrapper}>
      <div className={styles.depositItemBlock}>
        <div  className={styles.depositItemHeading}>
          <div className={styles.depositPaymentImageBlock}>
            <img
              data-payment_id={dataInfo.paymentId}
              src={dataInfo.paymentImage}
              alt={dataInfo.paymentName}/>
          </div>
        </div>
        <div className={styles.depositItemInfoMainBlock}>
          <div className={styles.depositItemTypeBlock}>
            <p>Type</p>
            <p>{dataInfo.depositType}</p>
          </div>
          <div className={styles.depositItemFeeBlock}>
            <p>Fee</p>
            <p>{dataInfo.depositFee}</p>
          </div>
          <div className={styles.depositItemProcessingTimeBlock}>
            <p>Processing time</p>
            <p>{dataInfo.depositProcessingTime}</p>
          </div>
          <div className={styles.depositItemLimitBlock}>
            <p>Limit per translation</p>
            <div>
              <p>Min {dataInfo.depositLimitPerTransaction.minLimit}</p>
              <p>Max {dataInfo.depositLimitPerTransaction.maxLimit}</p>
            </div>
          </div>
        </div>
      </div>
      {type === 'deposit' ?
        <div onClick={() => depositPaymentsClickHandler()} className={styles.depositItemButton}>
          <span>deposit</span>
        </div> :
        <div onClick={() => depositPaymentsClickHandler()} className={styles.withdrawItemButton}>
          <span>deposit</span>
        </div>
      }

    </div>
  )
}