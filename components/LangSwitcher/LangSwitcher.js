import Link from 'next/link'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import styles from '../../styles/LangSwitcher.module.scss'

import {useRouter} from 'next/router'
import {setLang} from "../../redux/actions/lang";
import {useCookies} from "react-cookie";
import {LangSwitcherPopup} from "./LangSwitcherPopup";

let arrLanguages = [
  {name: "eng", lang: "en", language: "English", icon: "/assets/icons/flags/United-Kingdom.png"},
  {name: "rus", lang: "ru", language: "Russian", icon: "/assets/icons/flags/Russia.png"},
  {name: "ita", lang: "it", language: "Italian", icon: "/assets/icons/flags/Italy.png"},
  {name: "chn", lang: "cn", language: "Chinese", icon: "/assets/icons/flags/China.png"},
  {name: "jpn", lang: "ja", language: "Japanese", icon: "/assets/icons/flags/Japan.png"},
  {name: "prt", lang: "pt", language: "Portuguese", icon: "/assets/icons/flags/Portugal.png"},
  {name: "esp", lang: "es", language: "Spanish", icon: "/assets/icons/flags/Spain.png"},
  {name: "deu", lang: "de", language: "German", icon: "/assets/icons/flags/Germany.png"},
  {name: "fra", lang: "fr", language: "French", icon: "/assets/icons/flags/France.png"},
  {name: "swe", lang: "sv", language: "Swedish", icon: "/assets/icons/flags/Sweden.png"},
];


const LangSwitcher = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(['language']);



  const activeLang = useSelector(({lang}) => lang.activeLang);
  const [activeLangBlock, setActiveLangBlock] = useState(false);
  // const [arrLang, setArrLang] = useState(arrLanguages);


  const switchActiveLangBlock = () => {
    if (activeLangBlock) {
      setActiveLangBlock(false)
    } else {
      setActiveLangBlock(true)
    }
  }

  const [activeLangNow, setActiveLang] = useState({})

  useEffect(() => {
    let active = arrLanguages.find((el) => {
     return el.lang === router.locale;
    });
    setActiveLang(active);
  }, [])


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
        <img className={styles.langSwitcherActiveLangFlag} src={activeLangNow.icon} alt="flag icon"/>
        <span>
          {activeLangNow.language}
        </span>
      </div>
      <LangSwitcherPopup arrLang={arrLanguages} langChooser={langChooser} />
    </div>
  )
}


export default LangSwitcher;