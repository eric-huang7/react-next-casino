import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {setLang} from "../../redux/actions/lang";

import styles from './LangSwitcher.module.css'

export const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const languages = useSelector(({lang}) => lang.languages);
  const copyLanguages = [...languages];
  const activeLang = useSelector(({lang}) => lang.activeLang);
  const [chooseLangArr, setChooseLangArr] = useState(copyLanguages);

  const [activeLangBlock, setActiveLangBlock] = useState(false);
  const switchActiveLangBlock = () => {
    if (activeLangBlock) {
      setActiveLangBlock(false)
    } else {
      setActiveLangBlock(true)
    }
  }

  const changeLanguage = (choosenLang) => {
    if (activeLangBlock) {

      console.log(activeLang, 'activeLang')
      dispatch(setLang(choosenLang))
    }
  }

  React.useEffect(() => {
    i18n.changeLanguage(activeLang);
    window.history.pushState(null, null, activeLang);
    let sortedLangArr = chooseLangArr.sort((item) => {
      let res = item.lang === activeLang ? -1 : 1
      return res;
    })
    setChooseLangArr(sortedLangArr);
  }, [activeLang, i18n, chooseLangArr]);

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