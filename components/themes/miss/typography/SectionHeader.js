import {HStack, Text} from "@chakra-ui/layout";
import {chakra} from "@chakra-ui/react";
import {IoChevronForwardOutline} from "react-icons/io5";
import Link from "next/link";
import {useTranslation} from "next-i18next";

const SectionHeader = ({children, path, label, fontSize = {base: "20px", lg: "36px"}, ...props}) => {
  const { t } = useTranslation('common');

  return (
    <HStack pt={{base: "35px", lg: "0.25rem"}} pb={{base: "25px", lg: "0.25rem"}} mb={{base: 0, lg: "0.5rem"}}
        justifyContent="space-between" px={{base: "16px", lg: "54px"}} color="primary.700" mt="2rem" w="100%" {...props}>
      <Text
        as="div"
        lineHeight="1.38"
        fontSize={fontSize}
        fontWeight="bold"
        fontFamily="Trebuchet"
      >
        {children}
      </Text>
      {path && <Link href={path}><chakra.a display="inline-flex" alignItems="center">
        {label ?? t(`homePage.viewAll`)} <IoChevronForwardOutline />
      </chakra.a></Link>}
    </HStack>
  )
}

export default SectionHeader;
