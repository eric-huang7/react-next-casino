import styles from '../../../styles/Footer/Footer.module.scss'

import Link from "next/link";
import Image from "next/image";
import {ChooseLangDropdown} from "./ChooseLangDropdown";
import {useSelector} from "react-redux";
import {useState} from "react";


export const Footer = ({t}) => {
  const linkKeyFirs = [
    {key: 'liveChat', route: '/#livechat', name: `LiveChat`},
    {key: 'tel', route: '/#tel', name: `Tel:7-55-7-99-8-487`},
    {key: 'faqs', route: '/contactUs#faq', name: `FAQs`},
    {key: 'contactUs', route: '/contactUs', name: `ContactUs`},
  ]
  const linkKeySecond = [
    {key: 'news', route: '/#news', name: `News`},
    {key: 'security', route: '/#security', name: `Security`},
    {key: 'privacy', route: '/#privacy', name: `Privacy`},
    {key: 'termsAndConditions', route: '/termsAndConditions', name: `TermsAndConditions`},
  ]
  const coinsImg = [
    {key: 'bitcoincash', src: '/assets/img/footer/bitcoincash.png'},
    {key: 'binance', src: '/assets/img/footer/binance.png'},
    {key: 'cardano', src: '/assets/img/footer/cardano.png'},
    {key: 'chainlink', src: '/assets/img/footer/chainlink.png'},
    {key: 'ethereum', src: '/assets/img/footer/ethereum.png'},
    {key: 'litecoin', src: '/assets/img/footer/litecoin.png'},
    {key: 'monero', src: '/assets/img/footer/monero.png'},
    {key: 'polkadot', src: '/assets/img/footer/polkadot.png'},
    {key: 'stellar', src: '/assets/img/footer/stellar.png'},
  ]

  const socilaLinks = [
    {key: 'facebook', href: '/#facebook', img: '/assets/img/footer/facebook.png'},
    {key: 'twitter', href: '/#twitter', img: '/assets/img/footer/twitter.png'},
    {key: 'youtube', href: '/#youtube', img: '/assets/img/footer/youtube.png'},
    {key: 'instagram', href: '/#instagram', img: '/assets/img/footer/instagram.png'},
    {key: 'linkedin', href: '/#linkedin', img: '/assets/img/footer/linkedin.png'},
  ]

  const languages = useSelector(({lang}) => lang.languages);
  const copyLanguages = [...languages];
  const [chooseLangArr, setChooseLangArr] = useState(copyLanguages);
  const activeLang = useSelector(({lang}) => lang.activeLang);
  const [activeChooseLangBlock, setActiveChooseLangBlock] = useState(false);

  const switchActiveLangBlock = () => {
    if (activeChooseLangBlock) {
      setActiveChooseLangBlock(false)
    } else {
      setActiveChooseLangBlock(true)
    }
  }

  chooseLangArr.sort((item) => {
    let res = item.lang === activeLang ? -1 : 1
    return res;
  })
  let language = chooseLangArr[0].language.toUpperCase();


  return (
    <footer className={styles.mainFooter}>
      <section className={styles.footerUpperBlock}>
        <ul className={styles.linksFirst}>
          {linkKeyFirs.map((el) => {
            return (
              <li key={el.key}>
                <Link href={el.route}><a>{t(`footer.${el.name}`)}</a></Link>
              </li>
            )
          } )}
        </ul>
        <ul className={styles.linksSecond}>
          {linkKeySecond.map((el) => {
            return (
              <li key={el.key}>
                <Link href={el.route}><a>{t(`footer.${el.name}`)}</a></Link>
              </li>
            )
          } )}
        </ul>
      </section>
      <section className={styles.footerMiddleBlock}>
        <div className={styles.footerMiddleInnerWrapper}>
          {coinsImg.map((el) => {
            return (
              <div className={styles.coinImgWrapper} key={el.key}>
                <Image src={el.src} width={110} height={33} alt={el.key}/>
              </div>
            )
          })}
        </div>
      </section>
      <section className={styles.footerLowerBlock}>
        <div className={styles.divider}></div>
        <div className={styles.lowerFooter}>
          <div className={styles.socialBlock}>
            {socilaLinks.map((el) => {
              return (
                <a className={styles.socialLink} target="_blank" key={el.key} href={el.href}>
                  <img className={styles.socialImage} src={el.img} alt={el.key}/>
                </a>
              )
            })}
          </div>
          <div className={styles.languageRightInfo}>
            <div className={styles.languageSelectBlock}>
              <p>{t(`footer.SelectLanguage`)}</p>
              <div
                className={styles.chooseLanguageButton}
                onClick={() => switchActiveLangBlock()}>
              >
                <ChooseLangDropdown t={t} isVis={activeChooseLangBlock}/>
                <span>{language}</span>
              </div>
            </div>
            <div className={styles.rightsLicenseContainer}>
              <p className={styles.rightInfoText}>2020 SlotsIdol.com&#169; All Rights Reserved</p>
              <div className={styles.licensingBlock}>
                <iframe src="https://licensing.gaming-curacao.com/validator/?lh=39be67de0ffa98b11f0dd2b6aec51152&template=seal" width="150" height="50" style={{ border: 'none' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}