import BodyText from "../../../typography/BodyText";
import { chakra } from "@chakra-ui/react";
import RoundButton from "../../../buttons/RoundButton";
import {useRouter} from "next/router";
import {Box} from "@chakra-ui/layout";

export const ChangePasswordBlock = ({t, userInfo}) => {
  const router = useRouter();

  return (
    <Box borderBottom="1px solid #eeeeee" py="35px">
      <BodyText as="h3" bold fontSize={17}>
        {t("myAccount.profilePage.changePasswordBlock.heading")}
      </BodyText>
      <BodyText pt="35px" pb="25px">
        <chakra.span pr="30px">{t("myAccount.profilePage.changePasswordBlock.email")}</chakra.span><chakra.span>{userInfo.user.user.email}</chakra.span>
      </BodyText>
      <RoundButton solid onClick={() => router.push('/accounts/edit-password')}
        leftIcon={<img src="/assets/img/myAccount/profileInfo/editProfileIcon.webp" width="20px" height="20px" />}
        title={t("myAccount.profilePage.changePasswordBlock.heading")}
      />
    </Box>
  )
}
