import styles from '../../styles/MobileSideMenu/MobileSideMenu.module.scss'
import Link from 'next/link'
import {useRouter} from "next/router";
import {setLang} from "../../redux/actions/lang";
import {useCookies} from "react-cookie";
import {useDispatch} from "react-redux";

let arrLanguages = [
  {name: "eng", lang: "en", language: "English", icon: "/assets/icons/roundFlags/United-Kingdom.png"},
  {name: "rus", lang: "ru", language: "Russian", icon: "/assets/icons/roundFlags/Russia.png"},
  {name: "ita", lang: "it", language: "Italian", icon: "/assets/icons/roundFlags/Italy.png"},
  {name: "chn", lang: "cn", language: "Chinese", icon: "/assets/icons/roundFlags/China.png"},
  {name: "jpn", lang: "ja", language: "Japanese", icon: "/assets/icons/roundFlags/Japan.png"},
  {name: "prt", lang: "pt", language: "Portuguese", icon: "/assets/icons/roundFlags/Portugal.png"},
  {name: "esp", lang: "es", language: "Spanish", icon: "/assets/icons/roundFlags/Spain.png"},
  {name: "deu", lang: "de", language: "German", icon: "/assets/icons/roundFlags/Germany.png"},
  {name: "fra", lang: "fr", language: "French", icon: "/assets/icons/roundFlags/France.png"},
  {name: "swe", lang: "sv", language: "Swedish", icon: "/assets/icons/roundFlags/Sweden.png"},
];

export const MobileSideLangSwitcher = ({isOpenLanguages}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(['language']);

  const langChooser = (e) => {
    console.log(e.target.dataset.lang)
    let today = new Date();
    let nextYear = new Date();
    nextYear.setFullYear(today.getFullYear() + 1);
    setCookie('language', e.target.dataset.lang, {path: '/', expires: nextYear});

    dispatch(setLang(e.target.dataset.lang));
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
              <Link href={router.route} locale={el.lang}>
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