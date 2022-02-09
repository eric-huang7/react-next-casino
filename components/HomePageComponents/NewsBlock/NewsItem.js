import styles from "../../../styles/HomePage/NewsBlock.module.scss";
import {newsImageUrl} from "../../../helpers/imageUrl";
import {dateFormatter} from "../../../helpers/dateTranslator";
import {useTranslation} from "next-i18next";



export const NewsItem = ({newsData, locale}) => {

  const {t} = useTranslation('newsData');

  let imgName = 'news image';

  try {
    const imgArr = newsData.image.split(".");
    imgName = `${imgArr[0]}_${locale}.${imgArr[1]}`;
  } catch (e) {
    imgName = 'news image';
  }

let date = `${new Date().getTime() / 1000}000`;
  try {
    date = dateFormatter(newsData.start_time, locale, false);
  } catch (e) {
    date = `${new Date().getTime() / 1000}000`;
  }




  return (
    <div className={styles.newsItemContainer}>
      <div className={styles.newItemWrapper}>
        <div className={styles.newImage}>
          <img src={newsImageUrl(imgName)} alt={`new ${newsData.id}`}/>
        </div>
        <div className={styles.newTextBlock}>
          <div className={styles.frameTextBlock}>
            <p className={styles.newMainText}>{t(`${newsData.frontend_id}.newsText`)}</p>
            <p className={styles.newDateText}>{date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}