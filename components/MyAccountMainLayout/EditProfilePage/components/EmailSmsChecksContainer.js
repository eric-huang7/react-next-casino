import {Text, VStack} from "@chakra-ui/react";
import {Checkbox} from "@chakra-ui/checkbox";

const CheckboxElement = ({label, onChange, isChecked, id, ...props}) => <Checkbox
  size="lg"
  colorScheme='primary'
  id={id}
  isChecked={isChecked}
  onChange={(e) => onChange(e.target.checked)}
  {...props}
>
  <Text fontSize="16px" color="text.450" fontFamily="Verdana">{label}</Text>
</Checkbox>

export const EmailSmsChecksContainer = ({t, emailPromo, emailPromoInputHandler, smsPromoPromoInputHandler, smsPromo}) => (
  <VStack spacing={0} alignItems="flex-start" pl={{base: 0, lg: "180px"}} pb="45px">
    <CheckboxElement
      id={'editEmailCheck'}
      isChecked={emailPromo}
      onChange={emailPromoInputHandler}
      label={t("myAccount.editProfilePage.emailPromos")}
      mb="45px"
    />
    <CheckboxElement
      id={'editSmsCheck'}
      isChecked={smsPromo}
      onChange={smsPromoPromoInputHandler}
      label={t("myAccount.editProfilePage.SMSPromos")}
    />
  </VStack>
)
