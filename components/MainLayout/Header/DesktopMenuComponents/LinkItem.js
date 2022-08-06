import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { VStack, HStack, Box, Image, Text } from "@chakra-ui/react";

export const LinkItem = ({ path, name, icon, onClick }) => {
  const { t } = useTranslation('common')

  const item = (<>
    <HStack justifyContent="center">
      <Image src={icon} width="45px" height="auto" alt=''/>
    </HStack>
    <Text fontSize="12px" color="#361712" fontWeight={600} fontFamily="Lithograph" textAlign="center">
      {t(name)}
    </Text>
  </>)

  return (
    <VStack alignItems="center" justifyContent="flex-start" p="0 10px" w="90px" cursor="pointer">
      {path ? <Link href={path}><a>{item}</a></Link> : <button onClick={onClick}>{item}</button>}
    </VStack>
  )
}
