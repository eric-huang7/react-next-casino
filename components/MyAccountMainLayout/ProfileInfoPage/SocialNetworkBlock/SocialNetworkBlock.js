import BodyText from "../../../typography/BodyText";
import { Box } from "@chakra-ui/react";

export const SocialNetworkBlock = ({ t, userInfo }) => (
  <Box py="35px">
    <BodyText as="h3" bold fontSize={17} mb="45px">{t('myAccount.profilePage.socialNetworkBlock.heading')}</BodyText>
    <BodyText>{t('myAccount.profilePage.socialNetworkBlock.textOne')}</BodyText>
    <BodyText>{t('myAccount.profilePage.socialNetworkBlock.textTwo')}</BodyText>
  </Box>
)
