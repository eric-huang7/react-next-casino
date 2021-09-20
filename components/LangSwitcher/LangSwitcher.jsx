
import styles from '../../styles/LangSwitcher.module.scss'

const LangSwitcher = () => {

  return (
    <div
      className={`${styles.langSwitcherBlock} ${activeLangBlock ? styles.active : styles.disabled}`}
      onClick={() => switchActiveLangBlock()}>
      <ul className={styles.langSwitcherBlockList}>
        {chooseLangArr.map(language => {
          return (
            <li
              className={styles.langSwitcherBlockListItem}
              key={language.name}
              data-lang={language.lang}
              onClick={(e) => changeLanguage(language.lang)}
            >
              {language.lang.toUpperCase()}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LangSwitcher;