import styles from '../../styles/MobileSideMenu/MobileSideMenu.module.scss'

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

export const MobileSideLangswitcher = () => {

  return (
    <div className={styles.mobileSideLanguagesWrapper}>
      {
        arrLanguages.map((el) => {

          return (
            <div className={styles.mobileSideLanguageItem}>
              <div className={styles.languageFlagWrapper}>
                <img src={el.icon} alt={`${el.lang} icon`}/>
              </div>
              <p>{el.language}</p>
            </div>
          )
        })
      }
    </div>
  )
}