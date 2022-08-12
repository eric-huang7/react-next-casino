import {HStack, Text} from "@chakra-ui/layout";
import {chakra} from "@chakra-ui/react";
import {IoChevronForwardOutline} from "react-icons/io5";
import Link from "next/link";
import {useTranslation} from "next-i18next";

const SectionHeader = ({children, path, label, ...props}) => {
  const { t } = useTranslation('common');

  return (
    <HStack py="0.25rem" mb="0.5rem" justifyContent="space-between" px="54px" color="white" mt="2rem" {...props}>
      <Text
        as="div"
        lineHeight="1.38"
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Lithograph"
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
