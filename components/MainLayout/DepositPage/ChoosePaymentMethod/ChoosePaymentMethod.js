import styles from '../../../../styles/DepositPage/DepositPage.module.scss';
import {useDispatch} from "react-redux";
import {setUserPaymentMethod} from "../../../../redux/actions/setUserPaymentMethod";

const paymentsMethods = [
  {id: 1, name: 'VISA', img: '/assets/img/depositPage/payments/Visa.png'},
  {id: 2, name: 'Amazon', img: '/assets/img/depositPage/payments/Amazon.png'},
  {id: 3, name: 'AmericanExpress', img: '/assets/img/depositPage/payments/AmericanExpress.png'},
  {id: 4, name: 'Cirrus', img: '/assets/img/depositPage/payments/Cirrus.png'},
  {id: 5, name: 'DinersClub', img: '/assets/img/depositPage/payments/DinersClub.png'},
  {id: 6, name: 'DirectDebit', img: '/assets/img/depositPage/payments/DirectDebit.png'},
  {id: 7, name: 'Discover', img: '/assets/img/depositPage/payments/Discover.png'},
  {id: 8, name: 'Ebay', img: '/assets/img/depositPage/payments/Ebay.png'},
  {id: 9, name: 'Eway', img: '/assets/img/depositPage/payments/Eway.png'},
  {id: 10, name: 'GoogleWallet', img: '/assets/img/depositPage/payments/GoogleWallet.png'},
  {id: 11, name: 'JCB', img: '/assets/img/depositPage/payments/JCB.png'},
  {id: 12, name: 'Maestro', img: '/assets/img/depositPage/payments/Maestro.png'},
  {id: 13, name: 'MasterCard', img: '/assets/img/depositPage/payments/MasterCard.png'},
  {id: 14, name: 'Paypal', img: '/assets/img/depositPage/payments/Paypal.png'},
  {id: 15, name: 'Sage', img: '/assets/img/depositPage/payments/Sage.png'},
  {id: 16, name: 'Shopify', img: '/assets/img/depositPage/payments/Shopify.png'},
  {id: 17, name: 'Skrill', img: '/assets/img/depositPage/payments/Skrill.png'},
  {id: 18, name: 'Solo', img: '/assets/img/depositPage/payments/Solo.png'},
  {id: 19, name: 'WesternUnion', img: '/assets/img/depositPage/payments/WesternUnion.png'},
  {id: 20, name: 'Neteller', img: '/assets/img/depositPage/payments/Neteller.png'},
  {id: 21, name: 'Switch', img: '/assets/img/depositPage/payments/Switch.png'},
  {id: 22, name: 'VisaElectron', img: '/assets/img/depositPage/payments/VisaElectron.png'},
  {id: 23, name: 'WorldPay', img: '/assets/img/depositPage/payments/WorldPay.png'},
]

export const ChoosePaymentMethod = ({t, userPayment}) => {
  const dispatch = useDispatch();

  const paymentSelector = (e) => {
    let chosenPayment = paymentsMethods.filter((el) => {
      return el.id === Number(e.target.dataset.payment_id);
    })

    dispatch(setUserPaymentMethod({
      paymentId: chosenPayment[0].id,
      paymentName: chosenPayment[0].name,
      paymentImg: chosenPayment[0].img
    }))
  }

  return (
    <div className={styles.depositsChoosePaymentWrapper}>
      <h3 className={styles.choosePaymentHeading}>
        Choose a payment method
      </h3>
      <div className={styles.paymentMethodsBlock}>
        {
          paymentsMethods.map((el) => {
            return (
              <div
                data-payment_id={el.id}
                key={el.id}
                onClick={(e) => paymentSelector(e)}
              >
                <img
                  data-payment_id={el.id}
                  src={el.img}
                  alt={el.name}/>
              </div>
            )
          })
        }
      </div>
      <span className={styles.errorMessage}>{userPayment.paymentError}</span>
    </div>
  )
}