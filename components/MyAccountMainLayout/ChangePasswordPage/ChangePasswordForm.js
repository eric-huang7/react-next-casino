import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaChangePassword } from '../../../schemasForms/changePasswordForm'
import { auth } from '../../../redux/user/action'
import {user_url} from '../../../redux/url/url'
import Connect from "../../../helpers/connect";
import {Text, Box, HStack, Stack} from "@chakra-ui/layout";
import RoundButton from "../../buttons/RoundButton";
import LinkButton from "../../buttons/LinkButton";
import {useRouter} from "next/router";
import InputFieldRound from "../../form/InputFieldRound";

export const ChangePasswordForm = ({ t }) => {
  const router = useRouter();
  const userInfo = useSelector((store) => store.authInfo)
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schemaChangePassword),
  })
  const dispatch = useDispatch()

  useEffect(() => {
    setPasswordValue('')
    setPasswordConfirmValue('')
    setCurrenPasswordValue('')
    setPasswordConfirmError('')
    setPasswordError('')
    setCurrenPasswordError('')
    setSuccessMessage('')
  }, [errors])

  const [passwordValue, setPasswordValue] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordConfirmValue, setPasswordConfirmValue] = useState('')
  const [passwordConfirmError, setPasswordConfirmError] = useState('')
  const [currenPasswordValue, setCurrenPasswordValue] = useState('')
  const [currenPasswordError, setCurrenPasswordError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const passwordInputHandler = (value) => {
    setPasswordValue(value)
  }
  const confirmPasswordInputHandler = (value) => {
    setPasswordConfirmValue(value)
  }
  const currentPasswordInputHandler = (value) => {
    setCurrenPasswordValue(value)
  }

  const onSubmitHandler = (data) => {
    setSuccessMessage('')
    setPasswordValue('')
    setPasswordError('')
    setPasswordConfirmValue('')
    setCurrenPasswordValue('')
    setPasswordConfirmError('')
    setCurrenPasswordError('')

    submitHelper(data)
  }
  const submitHelper = (data) => {

    if (data.password === passwordConfirmValue) {

      let userData = {
        id: userInfo.user.user.id,
        password: data.password,
        current_password: currenPasswordValue,
      }
      // dispatch(patchUserData(userData));
      Connect.patch(user_url, JSON.stringify(userData), {}, (status, data) => {
        setPasswordConfirmError('')
        setPasswordError('')
        setPasswordConfirmValue('')
        setPasswordValue('')
        setCurrenPasswordValue('')
        setCurrenPasswordError('')
        setSuccessMessage(t('myAccount.changePasswordPage.successMessage'))
        dispatch(auth())
      }).catch((error) => {
        setSuccessMessage('')
        setPasswordValue('')
        setPasswordConfirmValue('')
        setCurrenPasswordValue('')

        if (error.response.data.error_code === 'PASSWORD_COMPLEXITY_ERROR') {
          setPasswordError(t('myAccount.changePasswordPage.complexityError'))
        } else {
          //
          setCurrenPasswordError(t('myAccount.changePasswordPage.wrongCurrentPassword'))
        }
      })
    } else {
      setPasswordConfirmError(t('myAccount.changePasswordPage.passwordNotMatch'))
    }

  }
  return (
    <Box>
      <form id={'changePasswordForm'} onSubmit={handleSubmit(onSubmitHandler)}>
        <Stack w="100%" direction={{base: "column", lg: "row"}} mb="24px" spacing={2} alignItems="flex-start">
          <Box w={{base: "100%", lg: "200px"}} pt={{base: 0, lg: 3}}>
            <label htmlFor="changePasswordEmail">Email<abbr title="required">*</abbr></label>
          </Box>
          <InputFieldRound
            maxW={{base: '100%', lg: '200px'}}
            value={userInfo?.user?.user?.email}
            id={'changePasswordEmail'}
            type="email"
            inputProps={{readonly: true}}
          />
        </Stack>

        <Stack w="100%" direction={{base: "column", lg: "row"}} mb="24px" spacing={2} alignItems="flex-start">
          <Box w={{base: "100%", lg: "200px"}} pt={{base: 0, lg: 3}}>
            <label htmlFor="changePassword">{t('myAccount.changePasswordPage.newPassword')}<abbr
              title="required">*</abbr></label>
          </Box>
          <Box w="100%" flex={1}>
            <InputFieldRound
              validation={register('password')}
              maxW={{base: '100%', lg: '200px'}}
              onChange={(e) => passwordInputHandler(e.target.value)}
              type="password"
              id="changePassword"
              value={passwordValue}
              error={t(errors.password?.message)}
              mb={0}
            />
            <Text fontSize={15} color="red">{passwordError}</Text>
            <Text fontSize={15}>{t('myAccount.changePasswordPage.leaveBlank')}</Text>
          </Box>
        </Stack>

        <Stack w="100%" direction={{base: "column", lg: "row"}} mb="24px" spacing={2} alignItems="flex-start">
          <Box w={{base: "100%", lg: "200px"}} pt={{base: 0, lg: 3}}>
            <label htmlFor="passwordConfirm">{t('myAccount.changePasswordPage.passwordConfirmation')}<abbr
              title="required">*</abbr></label>
          </Box>
          <Box w="100%" flex={1}>
            <InputFieldRound
              maxW={{base: '100%', lg: '200px'}}
              onChange={(e) => confirmPasswordInputHandler(e.target.value)}
              type="password"
              id="passwordConfirm"
              value={passwordConfirmValue}
              error={passwordConfirmError}
              mb={0}
            />
          </Box>
        </Stack>

        <Stack w="100%" direction={{base: "column", lg: "row"}} mb="24px" spacing={2} alignItems="flex-start">
          <Box w={{base: "100%", lg: "200px"}} pt={{base: 0, lg: 3}}>
            <label htmlFor="passwordConfirm">{t('myAccount.changePasswordPage.currentPassword')}<abbr
              title="required">*</abbr></label>
          </Box>
          <Box w="100%" flex={1}>
            <InputFieldRound
              maxW={{base: '100%', lg: '200px'}}
              onChange={(e) => currentPasswordInputHandler(e.target.value)}
              type="password"
              id="passwordCurrent"
              value={currenPasswordValue}
              error={currenPasswordError}
              mb={0}
            />
            <Text fontSize={15}>{t('myAccount.changePasswordPage.needCurrentPassword')}</Text>
          </Box>
        </Stack>
      </form>

      <Text fontSize={15} color="primary.500">{successMessage}</Text>

      <HStack spacing={5} alignItems="center" pt={4}>
        <RoundButton
          title={t("myAccount.changePasswordPage.updateButton")}
          w="auto"
          solid
          fontFamily="Verdana"
          fontSize={15}
          px="30px"
          form="changePasswordForm"
          type="submit"
        />
        <LinkButton onClick={() => router.push('/accounts/profile-info')} fontSize="15px">
          {t('myAccount.changePasswordPage.cancelButton')}
        </LinkButton>
      </HStack>
    </Box>
  )
}
