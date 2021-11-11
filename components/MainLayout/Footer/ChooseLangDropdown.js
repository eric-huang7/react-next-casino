import Link from 'next/link'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { useRouter } from 'next/router';

import styles from '../../../styles/Footer/Footer.module.scss'
import {setLang} from "../../../redux/actions/lang";
import {useCookies} from "react-cookie";

export const ChooseLangDropdown = ({t, isVis}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(['language']);
  const languages = useSelector(({lang}) => lang.languages);
  const copyLanguages = [...languages];
  const [chooseLangArr, setChooseLangArr] = useState(copyLanguages);
  const activeLang = useSelector(({lang}) => lang.activeLang);

  useEffect(() => {
    dispatch(setLang(router.locale));
    chooseLangArr.sort((item) => {
      let res = item.lang === activeLang ? -1 : 1
      return res;
    })
  },[activeLang]);

  const langChooser = (e) => {
    let today = new Date();
    let nextYear = new Date();
    nextYear.setFullYear(today.getFullYear() + 1);
    setCookie('language', e.target.dataset.lang, {path: '/', expires: nextYear});

    dispatch(setLang(e.target.dataset.lang));
  }


  return (
    <div className={`${styles.dropdownWrapper} ${isVis ? "" : styles.hidden}`}>
      <ul className={styles.langChooserBlockList}>
        {
          chooseLangArr.map((language) => {
            return (
              <li
                className={styles.langChooserListItem}
                key={language.name}
                onClick={(e) => langChooser(e)}
              >
                <Link
                  href={{
                    pathname: router.route,
                    query: {...router.query}
                  }}
                  locale={language.lang}
                >
                  <a
                    data-lang={language.lang}
                  >
                    {language.language.toUpperCase()}
                  </a>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}