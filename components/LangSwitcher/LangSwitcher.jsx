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
    {name: "eng", lang: "en", language: "English", icon: "/assets/icons/flags/United-Kingdom.png"},
    {name: "rus", lang: "ru", language: "Russian", icon: "/assets/icons/flags/Russia.png"},
    {name: "chn", lang: "cn", language: "Chinese", icon: "/assets/icons/flags/China.png"},
    {name: "jpn", lang: "jp", language: "Japanese", icon: "/assets/icons/flags/Japan.png"},
    {name: "prt", lang: "pt", language: "Portuguese", icon: "/assets/icons/flags/Portugal.png"},
    {name: "esp", lang: "es", language: "Spanish", icon: "/assets/icons/flags/Spain.png"},
    {name: "deu", lang: "de", language: "German", icon: "/assets/icons/flags/Germany.png"},
    {name: "fra", lang: "fr", language: "French", icon: "/assets/icons/flags/France.png"},
    {name: "swe", lang: "se", language: "Swedish", icon: "/assets/icons/flags/Sweden.png"},
    {name: "ita", lang: "it", language: "Italian", icon: "/assets/icons/flags/Italy.png"},
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
        <img className={styles.langSwitcherActiveLangFlag} src={sortedLang[0].icon} alt="flag icon"/>
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
              <img className={styles.langSwitcherLangFlag} src={language.icon} alt="flag icon"/>
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