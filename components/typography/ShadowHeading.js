import { Text } from "@chakra-ui/layout";
import {useTranslation} from "next-i18next";

const ShadowHeading = ({children, ...props}) => {
  const { t } = useTranslation('common');

  return (
    <Text
      fontSize={{base: "32px", lg: "48px"}}
      letterSpacing={{base: "0px", lg: "1px"}}
      lineHeight={{base: "38px", lg: "52px"}}
      color="white"
      fontWeight={900}
      fontFamily="Lithograph"
      filter="drop-shadow(2.046px 2.194px 0px #15130d)"
      textTransform="uppercase"
      m={0}
      {...props}
    >
      {children}
    </Text>
  )
}

export default ShadowHeading;
