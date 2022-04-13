import Link from 'next/link'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { useRouter } from 'next/router';

import styles from '../../../styles/Footer/Footer.module.scss'
import {setLang} from "../../../redux/lang/action";
import {useCookies} from "react-cookie";

export const ChooseLangDropdown = ({t, isVis}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(['language']);
  const languages = useSelector(({lang}) => lang.languages);

  const langChooser = (lang) => {
    dispatch(setLang({lang, setCookie}));
  }

  return (
    <div className={`${styles.dropdownWrapper} ${isVis ? "" : styles.hidden}`}>
      <ul className={styles.langChooserBlockList}>
        {
          languages?.map((language) => {
            return (
              <li
                className={styles.langChooserListItem}
                key={language.name}
                onClick={(e) => langChooser(e?.target?.dataset?.lang)}
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
