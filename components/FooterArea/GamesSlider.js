import Slider from "react-slick";
import styles from '../../styles/FooterArea/FooterArea.module.scss';


export const GamesSlider = ({t}) => {

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    rows: 1,
    slidesToScroll: 1,
    centerPadding: '60px'
  }

  return (
    <Slider {...sliderSettings}>
      <div className={styles.game}>
        1
      </div>
      <div className={styles.game}>
        8
      </div>
      <div className={styles.game}>
        7
      </div>
      <div className={styles.game}>
        6
      </div>
      <div className={styles.game}>
        5
      </div>
      <div className={styles.game}>
        4
      </div>
      <div className={styles.game}>
        3
      </div>
      <div className={styles.game}>
        2
      </div>
    </Slider>
  )
}