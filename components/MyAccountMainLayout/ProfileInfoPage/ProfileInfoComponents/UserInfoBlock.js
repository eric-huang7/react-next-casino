import {Box, HStack, Text} from "@chakra-ui/react"
import RoundButton from "../../../buttons/RoundButton";
import {useRouter} from "next/router";

const Row = ({label, value, ...props}) => <HStack pb="25px" {...props}>
  <Box w="230px" pr="20px">
    <Text fontSize="16px" color="text.450" fontFamily="Verdana">{label}</Text>
  </Box>
  <Box>
    <Text fontSize="16px" color="text.450" fontFamily="Verdana">{value}</Text>
  </Box>
</HStack>

export const UserInfoBlock = ({ t, userInfo, currencyJurisdiction }) => {
  const router = useRouter();
  const {full_name, username, gender, country_code, city, address_1, address_2, postal_code, transactional_email_opt_in,
    transactional_sms_opt_in} = userInfo?.user?.user || {}
  const isShow = currencyJurisdiction.success && currencyJurisdiction.results.length;

  return (
    <>
      <Text fontSize="16px" color="text.450" fontFamily="Verdana" fontWeight={600} pb="25px">
        {t('myAccount.profilePage.userInfoBlock.heading')}
      </Text>

      {isShow && <Row
        label={t('myAccount.profilePage.userInfoBlock.fullName')}
        value={full_name}
      />}
      <Row
        label={t('myAccount.profilePage.userInfoBlock.nickname')}
        value={username}
      />
      {isShow && <>
        <Row
          label={t('myAccount.profilePage.userInfoBlock.gender')}
          value={gender}
        />
        <Row
          label={t('myAccount.profilePage.userInfoBlock.country')}
          value={country_code}
        />
        <Row
          label={t('myAccount.profilePage.userInfoBlock.city')}
          value={city}
        />
        <Row
          label={t('myAccount.profilePage.userInfoBlock.address')}
          value={(address_1 ?? '') + ' ' + (address_2 ?? '')}
        />
        <Row
          label={t('myAccount.profilePage.userInfoBlock.postalCode')}
          value={postal_code}
        />
      </>}
      <Row
        label={t('myAccount.profilePage.userInfoBlock.emailPromos')}
        value={transactional_email_opt_in === 1 ? 'Yes' : 'No'}
      />
      <Row
        label={t('myAccount.profilePage.userInfoBlock.SMSPromos')}
        value={transactional_sms_opt_in === 1 ? 'Yes' : 'No'}
      />

      <RoundButton
        mt="50px"
        solid
        onClick={() => router.push('/accounts/profile-info/edit')}
        title={t('myAccount.profilePage.userInfoBlock.editProfile')}
        leftIcon={<img src="/assets/img/myAccount/profileInfo/editProfileIcon.webp" width="20px" height="20px" />}
      />
    </>
  )
}
