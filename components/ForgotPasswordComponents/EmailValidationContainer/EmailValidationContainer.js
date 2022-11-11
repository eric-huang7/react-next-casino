import { InstructionsSendContainer } from '../InstructionsSendContainer/InstructionsSendContainer'
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { showEmailValidationSuccessPopup } from '../../../redux/popups/action'
import {Box} from "@chakra-ui/react";
import SelectModal from "../../modal/SelectModal";

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
    <SelectModal
      isOpen={true}
      width={380}
      onClose={closeButtonClickHandler}
      title={t('forgotPasswordForm.headings.success')}
    >
      <Box p={4}>
        <InstructionsSendContainer
          t={t}
          text={'forgotPasswordForm.successEmailValidation'}
        />
      </Box>
    </SelectModal>
  )
}
