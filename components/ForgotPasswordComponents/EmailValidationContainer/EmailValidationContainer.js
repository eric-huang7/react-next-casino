import styles from '../../../styles/ForgotPassword/ForgotPassword.module.scss'
import { HeadingBlock } from '../HeadingBlock'
import { InstructionsSendContainer } from '../InstructionsSendContainer/InstructionsSendContainer'
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { showEmailValidationSuccessPopup } from '../../../redux/popups/action'

export const EmailValidationContainer = ({ t }) => {
  const dispatch = useDispatch()

  const emailValidation = useRef()

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath())
    if (!path.includes(emailValidation.current)) {
      dispatch(showEmailValidationSuccessPopup(false))
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
    return () => {

      document.body.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  const closeButtonClickHandler = () => {
    dispatch(showEmailValidationSuccessPopup(false))
  }

  return (
    <div className={`${styles.forgotPasswordWrapper} `}>
      <div ref={emailValidation} className={styles.mainContainer}>
        <div className={styles.instructionsBlock}>
          <HeadingBlock
            t={t}
            closeForgotPasswordHandler={closeButtonClickHandler}
            text={'forgotPasswordForm.headings.success'}
            isShowBackButton={false}
          />
          <InstructionsSendContainer
            t={t}
            text={'forgotPasswordForm.successEmailValidation'}
          />
        </div>
      </div>
    </div>
  )
}
