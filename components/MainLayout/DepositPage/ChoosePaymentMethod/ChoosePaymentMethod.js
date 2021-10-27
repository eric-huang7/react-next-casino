import styles from '../../../../styles/DepositPage/DepositPage.module.scss';
import {useDispatch} from "react-redux";
import {setUserPaymentMethod} from "../../../../redux/actions/setUserPaymentMethod";

const paymentsMethods = [
  {id: 1, name: 'VISA', img: '/assets/img/depositPage/payments/Visa.svg'},
  {id: 2, name: 'Amazon', img: '/assets/img/depositPage/payments/Amazon.svg'},
  {id: 3, name: 'AmericanExpress', img: '/assets/img/depositPage/payments/AmericanExpress.svg'},
  {id: 4, name: 'Cirrus', img: '/assets/img/depositPage/payments/Cirrus.svg'},
  {id: 5, name: 'DinersClub', img: '/assets/img/depositPage/payments/DinersClub.svg'},
  {id: 6, name: 'DirectDebit', img: '/assets/img/depositPage/payments/DirectDebit.svg'},
  {id: 7, name: 'Discover', img: '/assets/img/depositPage/payments/Discover.svg'},
  {id: 8, name: 'Ebay', img: '/assets/img/depositPage/payments/Ebay.svg'},
  {id: 9, name: 'Eway', img: '/assets/img/depositPage/payments/Eway.svg'},
  {id: 10, name: 'GoogleWallet', img: '/assets/img/depositPage/payments/GoogleWallet.svg'},
  {id: 11, name: 'JCB', img: '/assets/img/depositPage/payments/JCB.svg'},
  {id: 12, name: 'Maestro', img: '/assets/img/depositPage/payments/Maestro.svg'},
  {id: 13, name: 'MasterCard', img: '/assets/img/depositPage/payments/MasterCard.svg'},
  {id: 14, name: 'Paypal', img: '/assets/img/depositPage/payments/Paypal.svg'},
  {id: 15, name: 'Sage', img: '/assets/img/depositPage/payments/Sage.svg'},
  {id: 16, name: 'Shopify', img: '/assets/img/depositPage/payments/Shopify.svg'},
  {id: 17, name: 'Skrill', img: '/assets/img/depositPage/payments/Skrill.svg'},
  {id: 18, name: 'Solo', img: '/assets/img/depositPage/payments/Solo.svg'},
  {id: 19, name: 'WesternUnion', img: '/assets/img/depositPage/payments/WesternUnion.svg'}
]

export const ChoosePaymentMethod = () => {
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
    </div>
  )
}