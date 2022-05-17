import styles from '../../../styles/MobileSideMenu/MobileSideMenu.module.scss'
import Link from 'next/link'
import {useRouter} from "next/router";
import {setLang} from "../../../redux/lang/action";
import {useCookies} from "react-cookie";
import {useDispatch} from "react-redux";

let arrLanguages = [
  {name: "eng", lang: "en", language: "English", icon: "/assets/icons/roundFlags/United-Kingdom.webp"},
  {name: "chn", lang: "cn", language: "中国人", icon: "/assets/icons/roundFlags/China.webp"},
  {name: "kor", lang: "kr", language: "Korean", icon: "/assets/icons/roundFlags/United-Kingdom.webp"},
  {name: "cht", lang: "ct", language: "繁體中文", icon: "/assets/icons/roundFlags/China.webp"},
  {name: "rus", lang: "ru", language: "Русский", icon: "/assets/icons/roundFlags/Russia.webp"},
  {name: "esp", lang: "es", language: "Español", icon: "/assets/icons/roundFlags/Spain.webp"},
  {name: "jpn", lang: "ja", language: "日本", icon: "/assets/icons/roundFlags/Japan.webp"},
  {name: "prt", lang: "pt", language: "Português", icon: "/assets/icons/roundFlags/Portugal.webp"},
  {name: "fra", lang: "fr", language: "Français", icon: "/assets/icons/roundFlags/France.webp"},
  {name: "vie", lang: "vi", language: "Viatnamese", icon: "/assets/icons/roundFlags/Vietnam.webp"},
  {name: "nld", lang: "nl", language: "Dutch", icon: "/assets/icons/roundFlags/Netherlands.webp"},
  {name: "ita", lang: "it", language: "Italiano", icon: "/assets/icons/roundFlags/Italy.webp"},
  {name: "idn", lang: "id", language: "Indonesian", icon: "/assets/icons/roundFlags/Indonesia.webp"},
  {name: "deu", lang: "de", language: "Deutsch", icon: "/assets/icons/roundFlags/Germany.webp"},
  {name: "tur", lang: "tr", language: "Turkish", icon: "/assets/icons/roundFlags/Turkey.webp"},
  {name: "pol", lang: "pl", language: "Polish", icon: "/assets/icons/roundFlags/Poland.webp"},
  {name: "ukr", lang: "ua", language: "Ukrainian", icon: "/assets/icons/roundFlags/Ukraine.webp"},
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
