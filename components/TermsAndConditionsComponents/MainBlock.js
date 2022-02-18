import styles from '../../styles/TermsAndConditions/TermsMainBlock.module.scss'
import useWindowDimensions from '../../hooks/useWindowDimensions'

export const MainBlock = () => {
  const { width } = useWindowDimensions()

  let backImg = '/assets/img/termsAndConditions/termsBg.jpg'

  if (width > 620) {
    backImg = '/assets/img/termsAndConditions/termsBg.jpg'
  } else {
    backImg = '/assets/img/termsAndConditions/termsBgMobile.jpg'
  }

  return (
    <div className={styles.mainWrapper}>
      <img src={backImg} alt="main background"/>
    </div>
  )
}