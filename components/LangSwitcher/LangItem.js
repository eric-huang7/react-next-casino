import styles from "../../styles/LangSwitcher.module.scss";
import Link from "next/link";


export const LangItem = ({langChooser, hrefRoute, router, language}) => {


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
}