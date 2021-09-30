import Link from 'next/link'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { useRouter } from 'next/router';

import styles from '../../../styles/Footer/Footer.module.scss'

export const ChooseLangDropdown = ({isVis}) => {
  const router = useRouter();
  const languages = useSelector(({lang}) => lang.languages);
  const copyLanguages = [...languages];
  const [chooseLangArr, setChooseLangArr] = useState(copyLanguages);
  const activeLang = useSelector(({lang}) => lang.activeLang);

  chooseLangArr.sort((item) => {
    let res = item.lang === activeLang ? -1 : 1
    return res;
  })

  return (
    <div className={`${styles.dropdownWrapper} ${isVis ? "" : styles.hidden}`}>
      <ul className={styles.langChooserBlockList}>
        {
          chooseLangArr.map((language) => {
            return (
              <li
                className={styles.langChooserListItem}
                key={language.name}
                data-lang={language.lang}
                onClick={(e) => console.log(language.lang, ' LANG')}
              >
                <Link
                  href={'/'}
                  locale={language.lang}
                >
                  <span>
                    {language.language.toUpperCase()}
                  </span>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}