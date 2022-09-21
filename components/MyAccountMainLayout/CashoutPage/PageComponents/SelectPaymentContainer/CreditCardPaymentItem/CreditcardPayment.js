import styles from '../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss'
import { ImageContainer } from './ImageContainer'
import { PaymentInfoContainer } from './PaymentInfoContainer'
import { IndicatorContainer } from '../IndicatorContainer'
import { FormContainer } from './FormContainer'
import ErrorText from '../../../../../ErrorBoundaryComponents/ErrorText'

export const CreditCardPayment = ({ t, isActive, typeOfCurrency, activateItemClickHandler, userInfo }) => (
  <li onClick={() => activateItemClickHandler(isActive)}
      className={`${styles.methodItem} ${isActive.isActive ? styles.activeMethodItem : ''}`}>
    <div className={styles.paymentItemMainContainer}>
      <ImageContainer t={t}/>
      <ErrorText>
        <PaymentInfoContainer t={t} typeOfCurrency={typeOfCurrency}/>
      </ErrorText>
      <IndicatorContainer/>
    </div>
    {isActive.isActive && <ErrorText>
      <FormContainer
        t={t}
        userInfo={userInfo}
        typeOfCurrency={typeOfCurrency}
      />
    </ErrorText>}
  </li>
)
