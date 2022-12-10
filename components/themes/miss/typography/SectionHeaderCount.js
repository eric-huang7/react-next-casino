import {HStack, Text} from "@chakra-ui/layout";
import {chakra} from "@chakra-ui/react";
import {IoChevronForwardOutline} from "react-icons/io5";
import Link from "next/link";
import {useTranslation} from "next-i18next";

const SectionHeaderCount = ({children, count, path, label, fontSize = {base: "17px", lg: "36px"}, ...props}) => {
  const { t } = useTranslation('common');

  return (
    <HStack py="0.25rem" mb="0.5rem" justifyContent="space-between" px={{base: "16px", lg: "54px"}} color="primary.700"
            mt="2rem" w="100%" {...props}>
      <HStack alignItems="flex-start">
        <Text
          as="div"
          lineHeight={`${fontSize}`}
          fontSize={fontSize}
          fontWeight="bold"
          fontFamily="Trebuchet"
          textTransform="uppercase"
        >
          {children}
        </Text>
        {count && <Text
          as="div"
          color="grey.300"
          lineHeight="16px"
          fontSize="16"
          fontWeight="bold"
          fontFamily="Roboto"
          textTransform="uppercase"
          pt="4px"
        >
          ({count})
        </Text>}
      </HStack>
      {path && <Link href={path}><chakra.a display="inline-flex" alignItems="center" color="grey.700"
        fontFamily="Roboto" fontSize={14}>
        {label ?? t(`homePage.viewAll`)} <IoChevronForwardOutline />
      </chakra.a></Link>}
    </HStack>
  )
}

export default SectionHeaderCount;
