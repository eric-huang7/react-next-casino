import Link from 'next/link'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import styles from '../../styles/LangSwitcher.module.scss'

import {useRouter} from 'next/router'
import {setLang} from "../../redux/actions/lang";
import {useCookies} from "react-cookie";

let arrLanguages = [
  {name: "eng", lang: "en", language: "English", icon: "/assets/icons/flags/United-Kingdom.png"},
  {name: "rus", lang: "ru", language: "Russian", icon: "/assets/icons/flags/Russia.png"},
  {name: "ita", lang: "it", language: "Italian", icon: "/assets/icons/flags/Italy.png"},
  {name: "chn", lang: "cn", language: "Chinese", icon: "/assets/icons/flags/China.png"},
  {name: "jpn", lang: "jp", language: "Japanese", icon: "/assets/icons/flags/Japan.png"},
  {name: "prt", lang: "pt", language: "Portuguese", icon: "/assets/icons/flags/Portugal.png"},
  {name: "esp", lang: "es", language: "Spanish", icon: "/assets/icons/flags/Spain.png"},
  {name: "deu", lang: "de", language: "German", icon: "/assets/icons/flags/Germany.png"},
  {name: "fra", lang: "fr", language: "French", icon: "/assets/icons/flags/France.png"},
  {name: "swe", lang: "se", language: "Swedish", icon: "/assets/icons/flags/Sweden.png"},
];


const LangSwitcher = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(['language']);



  const activeLang = useSelector(({lang}) => lang.activeLang);
  const [activeLangBlock, setActiveLangBlock] = useState(false);
  const [arrLang, setArrLang] = useState(arrLanguages);


  const switchActiveLangBlock = () => {
    if (activeLangBlock) {
      setActiveLangBlock(false)
    } else {
      setActiveLangBlock(true)
    }
  }

  // let sortedLang = arrLanguages;


  useEffect(() => {
    dispatch(setLang(router.locale));
    let sortedLang = arrLanguages.sort((item) => {
      let res = item.lang === activeLang ? -1 : 1
      return res;
    });

    setArrLang(sortedLang);

  }, [activeLang])


  // useEffect(() => {
  //   dispatch(setLang(router.locale));
  //   let sortedLang = arrLanguages.sort((item) => {
  //     let res = item.lang === activeLang ? -1 : 1;
  //     return res;
  //   })
  //   setArrLang(sortedLang);
  // }, [activeLang]);

  const langChooser = (e) => {
    let today = new Date();
    let nextYear = new Date();
    nextYear.setFullYear(today.getFullYear() + 1);
    setCookie('language', e.target.dataset.lang, {path: '/', expires: nextYear});

    dispatch(setLang(e.target.dataset.lang));
  }


  return (
    <div
      className={styles.langSwitcherBlock}
      onClick={() => switchActiveLangBlock()}
    >
      <div className={styles.activeLangBlock}>
        <img className={styles.langSwitcherActiveLangFlag} src={arrLang[0].icon} alt="flag icon"/>
        <span>
          {arrLang[0].language}
        </span>
      </div>
      <ul className={styles.langSwitcherBlockList}>
        {arrLang.map(language => {
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