import Link from 'next/link'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import styles from '../../styles/LangSwitcher.module.scss'

import { useRouter } from 'next/router'
import {setLang} from "../../redux/actions/lang";



const LangSwitcher = (props) => {
const dispatch = useDispatch();
  const router = useRouter();
  let arrLanguages = [
    {name: "eng", lang: "en", language: "English"},
    {name: "rus", lang: "ru", language: "Русский"},
    {name: "chn", lang: "cn", language: "中国人"},
    {name: "jpn", lang: "jp", language: "日本"},
    {name: "prt", lang: "pt", language: "Português"},
    {name: "esp", lang: "es", language: "Español"},
    {name: "deu", lang: "de", language: "Deutsch"},
    {name: "fra", lang: "fr", language: "Français"},
    {name: "swe", lang: "se", language: "Svenska"},
    {name: "ita", lang: "it", language: "Italiano"},
  ]
  const activeLang = useSelector(({lang}) => lang.activeLang);
  const [activeLangBlock, setActiveLangBlock] = useState(false);

  const switchActiveLangBlock = () => {
    if (activeLangBlock) {
      setActiveLangBlock(false)
    } else {
      setActiveLangBlock(true)
    }
  }

  let sortedLang = arrLanguages.sort((item) => {
    let res = item.lang === activeLang ? -1 : 1
    return res;
  });

useEffect(() => {
  sortedLang = arrLanguages.sort((item) => {
    let res = item.lang === activeLang ? -1 : 1
    return res;
  })
}, [sortedLang])

  const langChooser = (e) => {
    dispatch(setLang(e.target.dataset.lang));
  }


  return (
    <div
      className={styles.langSwitcherBlock}
      onClick={() => switchActiveLangBlock()}
    >
      <div className={styles.activeLangBlock}>
        <span>
          {sortedLang[0].language}
        </span>
      </div>
      <ul className={styles.langSwitcherBlockList}>
        {sortedLang.map(language => {
          return (
            <li
              className={styles.langSwitcherBlockListItem}
              key={language.name}
              onClick={(e) => langChooser(e)}
            >
              <Link
                href={props.href}
                locale={language.lang}
              >
                <a
                  data-lang={language.lang}
                  onClick={() => console.log(router, "locale")}
                >
                  {language.language}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}



export default LangSwitcher;