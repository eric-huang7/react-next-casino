import Link from 'next/link'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import styles from '../../styles/LangSwitcher.module.scss'

import { useRouter } from 'next/router'



const LangSwitcher = (props) => {
  console.log(props, "PROPS SWITCHER")
  const router = useRouter();
  const languages = useSelector(({lang}) => lang.languages);
  const copyLanguages = [...languages];
  const [chooseLangArr, setChooseLangArr] = useState(copyLanguages);
  const activeLang = useSelector(({lang}) => lang.activeLang);
  const [activeLangBlock, setActiveLangBlock] = useState(false);

  const switchActiveLangBlock = () => {
    if (activeLangBlock) {
      setActiveLangBlock(false)
    } else {
      setActiveLangBlock(true)
    }
  }

  chooseLangArr.sort((item) => {
    let res = item.lang === activeLang ? -1 : 1
    return res;
  })


  return (
    <div
      className={`${styles.langSwitcherBlock} ${activeLangBlock ? styles.active : styles.disabled}`}
      onClick={() => switchActiveLangBlock()}>
      <div className={`${styles.clickBlocker} ${activeLangBlock ? styles.hidden : styles.notHidden}`}></div>
      <ul className={styles.langSwitcherBlockList}>
        {chooseLangArr.map(language => {
          return (
            <li
              className={styles.langSwitcherBlockListItem}
              key={language.name}
              data-lang={language.lang}
              onClick={(e) => console.log(language.lang, ' LANG')}
            >
              <Link
                href={'/'}
                locale={language.lang}
              >
                <span
                  onClick={() => console.log(router.locale, "locale")}
                >
                  {language.lang.toUpperCase()}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}



export default LangSwitcher;