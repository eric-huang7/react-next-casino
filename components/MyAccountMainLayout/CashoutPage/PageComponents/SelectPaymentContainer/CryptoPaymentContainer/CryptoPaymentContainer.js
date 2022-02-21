import styles from '../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss'
import { ImageContainer } from './ImageContainer'
import { PaymentInfoContainer } from '../PaymentInfoContainer'
import { IndicatorContainer } from '../IndicatorContainer'
import { FormContainer } from './FormContainer'
import ErrorText from '../../../../../ErrorBoundaryComponents/ErrorText'

export const CryptoPaymentItem = ({
  t,
  isActive,
  chosenPayment,
  typeOfCurrency,
  activateItemClickHandler,
  userInfo
}) => {

  return (
    <li onClick={() => activateItemClickHandler(isActive)}
        className={`${styles.methodItem} ${isActive.isActive ? styles.activeMethodItem : ''}`}>
      <div className={styles.paymentItemMainContainer}>
        <ImageContainer
          typeOfCurrency={typeOfCurrency}
          t={t}
        />
        <ErrorText>
          <PaymentInfoContainer
            t={t}
            typeOfCurrency={typeOfCurrency}
            chosenPayment={chosenPayment}
          />
        </ErrorText>
        <IndicatorContainer/>
      </div>
      {
        isActive.isActive
          ?
          <ErrorText>
            <FormContainer
              t={t}
              typeOfCurrency={typeOfCurrency}
              chosenPayment={chosenPayment}
              userInfo={userInfo}
            />
          </ErrorText>
          :
          <></>
      }
    </li>
  )
}