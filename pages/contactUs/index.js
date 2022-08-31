import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainLayout from '../../components/MainLayout/MainLayout'
import { WhySlotsIdol } from '../../components/HomePageComponents/WhySlotsIdol/WhySlotsIdol'
import { NewsBlock } from '../../components/HomePageComponents/NewsBlock/NewsBlock'
import MainBlock from "../../components/ContactUsPageComponents/MainBlock";
import HeadersBlock from '../../components/ContactUsPageComponents/HeadersBlock'
import { ContactsBlocks } from '../../components/ContactUsPageComponents/ContactsBlocks'
import { Faq } from '../../components/ContactUsPageComponents/FAQ/Faq'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Box } from "@chakra-ui/react"
import { getCurrency } from '../../redux/currency/action'
import ErrorText from '../../components/ErrorBoundaryComponents/ErrorText'

const ContactUs = () => {
  const { t } = useTranslation('common')

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrency())
  }, [])

  return (
    <>
      <MainLayout>
        <MainBlock />
        <HeadersBlock t={t}/>
        <ContactsBlocks t={t}/>
        <Box>
          <Faq t={t}/>
          <ErrorText>
            <WhySlotsIdol t={t} isBackShow={false}/>
          </ErrorText>
        </Box>
        <ErrorText>
          <NewsBlock t={t} isBackShow={false}/>
        </ErrorText>
      </MainLayout>

    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['promotionsPage', 'common', 'newsData']),
    },
  })
}

export default ContactUs
