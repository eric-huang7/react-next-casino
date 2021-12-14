import styles from '../../styles/LangSwitcher.module.scss';
import Link from "next/link";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {LangItem} from "./LangItem";

export const LangSwitcherPopup = ({arrLang, langChooser, hrefMain}) => {
  const router = useRouter();
  let hrefRoute = router.route;

  // const activeLang = useSelector(({lang}) => lang.activeLang);

  return (
    <ul className={styles.langSwitcherBlockList}>
      {arrLang
      //   .sort((item) => {
      //   let res = item.lang === activeLang ? -1 : 1
      //   return res;
      // })
        .map(language => {
        return (
          <LangItem key={`${language.name} language key`} language={language} router={router} langChooser={langChooser} hrefRoute={hrefRoute}/>
        )
      })}
    </ul>
  )
}