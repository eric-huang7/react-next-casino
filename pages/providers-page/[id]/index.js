import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";




const ProviderGamesPage = (props) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  // const {id} = router.query;

  return (
    <div>
      <h2 style={{color: "white"}}>
        {/*{`${id}     provider`}*/}
      </h2>


      <p style={{color: "white"}}>provider inner Linck</p>
    </div>
  )
}



export default ProviderGamesPage;

