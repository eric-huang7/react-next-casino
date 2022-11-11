import { useDispatch } from 'react-redux'
import { auth } from '../../../../redux/user/action'
import { useRouter } from 'next/router'
import BodyText from "../../../typography/BodyText";
import { Box } from "@chakra-ui/react";
import RoundButton from "../../../buttons/RoundButton";

export const GoogleAuthBlock = ({ t }) => {
  const router = useRouter()
  const dispatch = useDispatch()

  const googleAuthClickHandler = (e) => {
    e.preventDefault()
    dispatch(auth()).then((data) => {
      router.push('/accounts/two_factor')
    }).catch((e) => {
      console.log('googleAuthClickHandler error', e.message)
    })

  }

  return (
    <Box pt="25px" pb="35px">
      <BodyText as="h3" bold fontSize={17} mb="35px">
        {t('myAccount.profilePage.googleAuth.heading')}
      </BodyText>

      <RoundButton
        solid
        onClick={googleAuthClickHandler}
        leftIcon={<img src="/assets/img/myAccount/profileInfo/editProfileIcon.webp" width="20px" height="20px" />}
        title={t('myAccount.profilePage.googleAuth.link')}
      />
    </Box>
  )
}
