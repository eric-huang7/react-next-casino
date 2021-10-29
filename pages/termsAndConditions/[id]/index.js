import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from "../../../components/MainLayout/MainLayout";
import styles from '../../../styles/TermsAndConditions/TermsAndConditions.module.scss';
import {useRouter} from "next/router";
import {MainBlock} from "../../../components/TermsAndConditionsComponents/MainBlock";
import {PlayerBlock} from "../../../components/TermsAndConditionsComponents/PlayerBlock";
import {TextBlock} from "../../../components/TermsAndConditionsComponents/TextBlock";
import {
  termsAndConditions
} from "../../../components/TermsAndConditionsComponents/textData";
import {WhySlotsIdol} from "../../../components/HomePageComponents/WhySlotsIdol/WhySlotsIdol";
import {NewsBlock} from "../../../components/HomePageComponents/NewsBlock/NewsBlock";


const TermsConditions = (props) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const {id} = router.query;

  // console.log(router, "ROUTER PID! !!!!!!!!!!")
  // console.log(props, "ROUTER props PID! !!!!!!!!!!")
  // console.log(id, "ROUTER id PID! !!!!!!!!!!")

  let text = termsAndConditions.data;
  let heading = 'Terms and Conditions'

  if (id === 'amlpolicy') {
    text = termsAndConditions.amlPolicy;
    heading = 'AML Policy';
  } else if (id === 'kycpolicy') {
    text = termsAndConditions.kycPolicy;
    heading = 'KYC Policy';
  } else {
    text = termsAndConditions.responsibleGambling;
    heading = 'Responsible Gambling';
  }
  return (
    <>
      <MainLayout t={t}>
        <MainBlock />
        <PlayerBlock />
        <div className={styles.textWhyslotsBack}>
          <TextBlock t={t} textData={text} textHeading={heading}/>
          <WhySlotsIdol t={t} isBackShow={false}/>
        </div>
        <NewsBlock t={t} isBackShow={false}/>
      </MainLayout>
    </>
  )
}

export async function getStaticPaths() {

  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [
      { params: { id: 'responsibleGaming' } },
      { params: { id: 'termsAndConditions' } },
      { params: { id: 'kycpolicy' } },
      { params: { id: 'amlpolicy' } },
    ],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: "blocking",
  }
}

export const getStaticProps = async ({ locale }) => {
  return ({
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  })
}

export default  TermsConditions;