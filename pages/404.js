import Link from 'next/link'
import {useTranslation} from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Text, VStack } from '@chakra-ui/react'

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
}

export default function NotFoundPage() {
  const { t } = useTranslation('common')

  return <Link href="/">
    <a>
      <VStack
        w="100vw"
        h="100vh"
        justifyContent="center"
        alignItems="center"
        bg="url(/assets/img/homeImg/home_header_bckgr.jpg)"
        fontFamily="Lithograph"
        color="white"
        p="24px"
        // className={styles.wrapper}
      >
        <img
          src={`/assets/img/homeImg/slot_machine-mobile.webp`}
          alt="slot machine"
          height="50%"
        />
        <Text as="h1" fontSize={{base: "40px", lg: "56px"}} textAlign="center">{t('errorPage.title1')}</Text>
        <Text fontSize={{base: "24px", lg: "30px"}} mb="20px" fontWeight={700} textAlign="center" >
          {t('errorPage.title2')}
        </Text>
        <Text fontSize={{base: "18px", lg: "20px"}} fontWeight={500} textAlign="center">
          {t('errorPage.title3')}
        </Text>
      </VStack>
    </a>
  </Link>
}
