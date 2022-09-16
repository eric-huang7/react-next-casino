import {useTranslation} from "next-i18next";
import {Checkbox} from "@chakra-ui/checkbox";
import {Text, chakra} from "@chakra-ui/react";
import {HStack} from "@chakra-ui/layout";

export const BonusTermsCheck = ({onAccept, onShowTerms, isTermsChecked, id, hideCheckbox}) => {
  const {t} = useTranslation('common');

  return (
    <HStack alignItems="center" minH="34px">
      {!hideCheckbox && <Checkbox
        size="lg"
        colorScheme='primary'
        id={`agreeTerms_${id}`}
        checked={isTermsChecked}
        onChange={() => onAccept(id)}
      >
        <Text fontSize="12px">
          {t('registrationForm.iReadAndAgree')} <chakra.a
            href="javascript:void(0);"
            textDecoration="underline"
            onClick={onShowTerms}
          >
            {t('registrationForm.termsOfUseLink')}
          </chakra.a>
        </Text>
      </Checkbox>}
      {hideCheckbox && <chakra.a href="javascript:void(0);" onClick={onShowTerms} textDecoration="underline">
        {t('registrationForm.termsOfUseLink')}
      </chakra.a>}
    </HStack>
  )
}
