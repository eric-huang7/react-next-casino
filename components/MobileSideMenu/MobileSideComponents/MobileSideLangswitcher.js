import styles from '../../../styles/MobileSideMenu/MobileSideMenu.module.scss'
import Link from 'next/link'
import {useRouter} from "next/router";
import {setLang} from "../../../redux/lang/action";
import {useCookies} from "react-cookie";
import {useDispatch} from "react-redux";

let arrLanguages = [
  {name: "eng", lang: "en", language: "English", icon: "/assets/icons/flags/svg/uk.svg"},
  {name: "chn", lang: "cn", language: "中国人", icon: "/assets/icons/flags/svg/china.svg"},
  {name: "cht", lang: "ct", language: "繁體中文", icon: "/assets/icons/flags/svg/china.svg"},
  {name: "kor", lang: "kr", language: "Korean", icon: "/assets/icons/flags/svg/south_korea.svg"},
  {name: "rus", lang: "ru", language: "Русский", icon: "/assets/icons/flags/svg/russia.svg"},
  {name: "esp", lang: "es", language: "Español", icon: "/assets/icons/flags/svg/spain.svg"},
  {name: "jpn", lang: "ja", language: "日本", icon: "/assets/icons/flags/svg/japan.svg"},
  {name: "prt", lang: "pt", language: "Português", icon: "/assets/icons/flags/svg/portugal.svg"},
  {name: "fra", lang: "fr", language: "Français", icon: "/assets/icons/flags/svg/france.svg"},
  {name: "vie", lang: "vi", language: "Tiếng Việt", icon: "/assets/icons/flags/svg/vietnam.svg"},
  {name: "nld", lang: "nl", language: "Dutch", icon: "/assets/icons/flags/svg/netherlands.svg"},
  {name: "ita", lang: "it", language: "Italiano", icon: "/assets/icons/flags/svg/italy.svg"},
  {name: "idn", lang: "id", language: "Indonesian", icon: "/assets/icons/flags/svg/indonesia.svg"},
  {name: "deu", lang: "de", language: "Deutsch", icon: "/assets/icons/flags/svg/germany.svg"},
  {name: "tur", lang: "tr", language: "Turkish", icon: "/assets/icons/flags/svg/turkey.svg"},
  {name: "pol", lang: "pl", language: "Polish", icon: "/assets/icons/flags/svg/poland.svg"},
  {name: "ukr", lang: "ua", language: "Ukrainian", icon: "/assets/icons/flags/svg/ukraine.svg"},
];

export const MobileSideLangSwitcher = ({isOpenLanguages}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(['language']);

  const langChooser = (e) => {
    dispatch(setLang({lang: e.target.dataset.lang, setCookie}));
  }

  return (
    <div className={`${styles.mobileSideLanguagesWrapper} ${isOpenLanguages ? styles.openLanguages : ''}`}>
      {
        arrLanguages.map((el) => {
          return (
            <div
              key={el.name}
              className={styles.mobileSideLanguageItem}
            >
                <img src={el.icon} alt={`${el.lang} icon`}/>
              <Link
                href={{
                  pathname: router.route,
                  query: {...router.query}
                }}
                locale={el.lang}
              >
                <a
                  data-lang={el.lang}
                  onClick={(e) => langChooser(e)}
                >{el.language}</a>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}
