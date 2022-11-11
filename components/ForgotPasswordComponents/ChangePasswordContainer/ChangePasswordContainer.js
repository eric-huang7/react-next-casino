import {Box} from '@chakra-ui/react'
import {useDispatch} from 'react-redux'
import {showChangePasswordPopup, showTwoFaPopup} from '../../../redux/popups/action'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {PasswordInputsContainer} from './PasswordInputsContainer'
import {useState} from 'react'
import {schemaChangePasswordWindow} from '../../../schemasForms/changePasswordWindowForm'
import {token_url} from '../../../redux/url/url'
import {changePasswordLogin} from '../../../redux/user/action'
import {InstructionsSendContainer} from '../InstructionsSendContainer/InstructionsSendContainer'
import Connect from "../../../helpers/connect"
import SelectModal from "../../modal/SelectModal"
import SubmitButton from "../../buttons/SubmitButton";

export const ChangePasswordContainer = ({t, token}) => {
  const dispatch = useDispatch()

  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(schemaChangePasswordWindow),
  })

  const [requestError, setRequestError] = useState('')
  const [requestSuccess, setRequestSuccess] = useState(false)

  const closeForgotPasswordHandler = () => {
    dispatch(showChangePasswordPopup(false))
  }

  const onSubmitHandler = (data) => {
    let userData = {
      type: 2,
      password: data.password,
      token: token
    }

    Connect.patch(token_url, userData, {}, (status, data) => {
      if (data.success) {

        if (data.user.is_2fa_enabled === 1) {

          dispatch(showChangePasswordPopup(false))
          dispatch(showTwoFaPopup(true))

        } else {
          setRequestError('')
          setRequestSuccess(true)
          dispatch(changePasswordLogin(data))
          if (typeof window !== 'undefined') {
            localStorage.setItem('userAuth', 'true')
          }
        }

      } else if (data.extra_error_info === 'Token invalid') {
        reset()
        setRequestSuccess(false)
        setRequestError('forgotPasswordForm.errors.responseErrorToken')
      } else {
        reset()
        setRequestSuccess(false)
        setRequestError('forgotPasswordForm.errors.responseError')
      }
    }).catch((err) => {
      reset()
      setRequestSuccess(false)
      setRequestError('forgotPasswordForm.errors.responseError')
    })
  }

  return requestSuccess ? (
    <SelectModal
      isOpen={true}
      width={380}
      onClose={closeForgotPasswordHandler}
      title={t('forgotPasswordForm.headings.passwordChanged')}
    >
      <Box p={4}>
        <InstructionsSendContainer
          t={t}
          text={'forgotPasswordForm.successPasswordChange'}
        />
      </Box>
    </SelectModal>
  ) : (
    <SelectModal
      isOpen={true}
      width={380}
      onClose={closeForgotPasswordHandler}
      title={t('forgotPasswordForm.headings.changePassword')}
      footer={<SubmitButton title={t('forgotPasswordForm.buttonsText.submit')} form="changePasswordWindowForm"/>}
    >
      <Box p={4}>
        <PasswordInputsContainer
          t={t}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmitHandler={onSubmitHandler}
          register={register}
          requestError={requestError}
        />
      </Box>
    </SelectModal>
  )
}
