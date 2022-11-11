import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { Text, Box, HStack } from '@chakra-ui/react'

export const Navigation = () => {
  const { t } = useTranslation('common')
  const linksKey = [
    { key: 'home', route: '/' },
    { key: 'promotions', route: '/promotions' },
    { key: 'aboutUs', route: '/aboutUs' },
  ]

  return (
    <HStack display={{base: 'none', lg: 'flex'}}>
      {linksKey.map((link) => (
        <Box key={link.key}>
          <Link href={link.route}>
            <Text
              whiteSpace="nowrap"
              fontSize="21px"
              lineHeight="60px"
              color="text.50"
              fontWeight="bold"
              fontFamily="Lithograph"
              textTransform="uppercase"
              mr="20px"
              cursor="pointer"
            >
              {t(`header.navbarLinks.${link.key}`)}
            </Text>
          </Link>
        </Box>
      ))}
    </HStack>
  )
}
