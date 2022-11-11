import BodyText from "../../../typography/BodyText";
import { Box } from "@chakra-ui/react";

export const SavedKeysBlock = ({t, savedKeys}) => (
  <Box>
    <BodyText bold>{t("myAccount.twoFactorAuthPage.savedKeysContainer.heading")}</BodyText>
    <BodyText pb="30px">{t("myAccount.twoFactorAuthPage.savedKeysContainer.textBlock")}</BodyText>
    {
      savedKeys.map((el) => {
        return (
          <BodyText key={`${el} save key`}>{el}</BodyText>
        )
      })
    }
  </Box>
)
