import styles from '../../styles/LangSwitcher.module.scss';
import Link from "next/link";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {LangItem} from "./LangItem";

export const LangSwitcherPopup = ({arrLang, langChooser}) => {
  const router = useRouter();
  let hrefRoute = router.route;

  return (
    <ul className={styles.langSwitcherBlockList}>
      {arrLang
        .map(language => {
        return (
          <LangItem key={`${language.name} language key`} language={language} router={router} langChooser={langChooser} hrefRoute={hrefRoute}/>
        )
      })}
    </ul>
  )
}