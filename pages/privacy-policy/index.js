import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainLayout from '../../components/MainLayout/MainLayout'
import styles from '../../styles/TermsAndConditions/TermsAndConditions.module.scss'
import { WhySlotsIdol } from '../../components/HomePageComponents/WhySlotsIdol/WhySlotsIdol'
import { NewsBlock } from '../../components/HomePageComponents/NewsBlock/NewsBlock'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCurrency } from '../../redux/actions/currency'
import { MainBlock } from '../../components/PrivacyPolicyPageComponents/MainBlock'
import { TextBlock } from '../../components/PrivacyPolicyPageComponents/TextBlock'
import ErrorText from '../../components/ErrorBoundaryComponents/ErrorText'

const PrivacyPolicy = (props) => {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrency())
  }, [])

  return (
    <>
      <MainLayout t={t}>
        <MainBlock/>
        <div className={styles.textWhyslotsBack}>
          <ErrorText>
            <TextBlock
              textHeading={'heading'}
            />
          </ErrorText>
          <ErrorText>
            <WhySlotsIdol isBackShow={false}/>
          </ErrorText>
        </div>
        <ErrorText>
          <NewsBlock isBackShow={false}/>
        </ErrorText>
      </MainLayout>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['promotionsPage', 'common', 'privacyPolicy', 'newsData']),
    },
  })
}

export default PrivacyPolicy