import styles from '../../styles/LangSwitcher.module.scss';
import Link from "next/link";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";

export const LangSwitcherPopup = ({arrLang, langChooser, hrefMain}) => {
  const router = useRouter();
  let hrefRoute = router.route;

  const activeLang = useSelector(({lang}) => lang.activeLang);

  return (
    <ul className={styles.langSwitcherBlockList}>
      {arrLang.sort((item) => {
        let res = item.lang === activeLang ? -1 : 1
        return res;
      }).map(language => {
        return (
          <li
            className={styles.langSwitcherBlockListItem}
            key={language.name}
            onClick={(e) => langChooser(e)}
          >
            <img className={styles.langSwitcherLangFlag} src={language.icon} alt="flag icon"/>
            <Link
              href={{
                pathname: hrefRoute,
                query: {...router.query}
              }}
              locale={language.lang}
            >
              <a
                data-lang={language.lang}
              >
                {language.language}
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}