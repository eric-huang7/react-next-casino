import {HStack, Text} from "@chakra-ui/layout";
import {useTranslation} from "next-i18next";

const SectionHeaderCenter = ({children, ...props}) => {
  const { t } = useTranslation('common');

  return (
    <HStack w="100%" px="54px" pb="30px" justifyContent="center" {...props}>
      <Text variant="heading" size="lg">
        {children}
      </Text>
    </HStack>
  )
}

export default SectionHeaderCenter;
