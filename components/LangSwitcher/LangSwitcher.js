import Link from 'next/link'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import styles from '../../styles/LangSwitcher.module.scss'

import {setLang} from "../../redux/lang/action";
import {useCookies} from "react-cookie";
import {LangSwitcherPopup} from "./LangSwitcherPopup";

const LangSwitcher = () => {
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(['language']);
  const activeLang = useSelector(({lang}) => lang.activeLang);
  const languages = useSelector(({lang}) => lang.languages);
  const [activeLangBlock, setActiveLangBlock] = useState(false);

  const switchActiveLangBlock = () => {
    if (activeLangBlock) {
      setActiveLangBlock(false)
    } else {
      setActiveLangBlock(true)
    }
  }

  const [activeLangNow, setActiveLang] = useState({})

  useEffect(() => {
    let active = languages.find((el) => {
     return el.lang === activeLang;
    });
    setActiveLang(active);
  }, [languages, activeLang])


  const langChooser = (e) => {
    dispatch(setLang({lang: e.target.dataset.lang, setCookie} ));
  }


  return (
    <div
      className={styles.langSwitcherBlock}
      onClick={() => switchActiveLangBlock()}
    >
      <div className={styles.activeLangBlock}>
        {activeLangNow?.icon && <img className={styles.langSwitcherActiveLangFlag} src={activeLangNow?.icon} alt="flag icon"/>}
        <span>
          {activeLangNow?.language}
        </span>
      </div>
      <LangSwitcherPopup arrLang={languages} langChooser={langChooser} />
    </div>
  )
}


export default LangSwitcher;
