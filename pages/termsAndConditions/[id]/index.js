import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import MainLayout from "../../../components/MainLayout/MainLayout";
import styles from "../../../styles/Home.module.scss";
import {useRouter} from "next/router";


const TermsConditions = (props) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const {id} = router.query
  console.log(router, "ROUTER PID! !!!!!!!!!!")
  console.log(props, "ROUTER props PID! !!!!!!!!!!")
  // console.log(id, "ROUTER id PID! !!!!!!!!!!")

  let text = "Some TEXT terms";

  if (id === 'responsibleGaming') {
    text = "Responsible gaming";
  } else if (id === 'termsAndConditions') {
    text = "terms And Conditions"
  }
  return (
    <>
      <MainLayout t={t}>
        {/*<h1 className={styles.headerHomePage}>{t(`pageNames.terms&conditions`)}</h1>*/}
        <p>Some pid {text}</p>
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