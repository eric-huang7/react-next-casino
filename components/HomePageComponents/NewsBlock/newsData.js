export const newsData = () => {
  let slides = [
    {
      id: 1,
      mainText: "GET LUCKY WITH LUCKY NUMBER SEVEN IN SLOT VEGAS  SLOT",
      date: "February 14, 2021",
      image: "/assets/img/newsSlider/news_slide1.png",
    },
    {
      id: 2,
      mainText: "GET LUCKY WITH LUCKY NUMBER SEVEN IN SLOT VEGAS  SLOT",
      date: "February 14, 2021",
      image: "/assets/img/newsSlider/news_slide2.png",
    },
    {
      id: 3,
      mainText: "NOTHING SAYS VALENTINE’S DAY MORE THAN THESE ROMANTIC SLOTS",
      date: "February 14, 2021",
      image: "/assets/img/newsSlider/news_slide1.png",
    },
    {
      id: 4,
      mainText: "GET LUCKY WITH LUCKY NUMBER SEVEN IN SLOT VEGAS  SLOT",
      date: "February 14, 2021",
      image: "/assets/img/newsSlider/news_slide2.png",
    },
    {
      id: 5,
      mainText: "GET LUCKY WITH LUCKY NUMBER SEVEN IN SLOT VEGAS  SLOT",
      date: "February 14, 2021",
      image: "/assets/img/newsSlider/news_slide1.png",
    },
    {
      id: 6,
      mainText: "NOTHING SAYS VALENTINE’S DAY MORE THAN THESE ROMANTIC SLOTS",
      date: "February 14, 2021",
      image: "/assets/img/newsSlider/news_slide2.png",
    },
    {
      id: 7,
      mainText: "GET LUCKY WITH LUCKY NUMBER SEVEN IN SLOT VEGAS  SLOT",
      date: "February 14, 2021",
      image: "/assets/img/newsSlider/news_slide1.png",
    },
    {
      id: 8,
      mainText: "GET LUCKY WITH LUCKY NUMBER SEVEN IN SLOT VEGAS  SLOT",
      date: "February 14, 2021",
      image: "/assets/img/newsSlider/news_slide2.png",
    }
  ]

  return slides;
}


//import styles from "../../../styles/HomePage/NewsBlock.module.scss";
// import {newsImageUrl} from "../../../helpers/imageUrl";
// import {dateFormatter} from "../../../helpers/dateTranslator";
//
//
// export const NewsItem = ({newsData, locale}) => {
//
//   const imgArr = newsData.image.split(".");
//   const imgName = `${imgArr[0]}_${locale}.${imgArr[1]}`;
//
//   const date = dateFormatter(newsData.start_time, locale, false);
//
//
//
//   return (
//     <div className={styles.newsItemContainer}>
//       <div className={styles.newItemWrapper}>
//         <div className={styles.newFrame}>
//
//         </div>
//         <div className={styles.newImage}>
//           <img src={newsImageUrl(imgName)} alt={`new ${newsData.id}`}/>
//         </div>
//         <div className={styles.newTextBlock}>
//           <div className={styles.frameTextBlock}>
//             <p className={styles.newMainText}>{newsData.mainText}</p>
//             <p className={styles.newDateText}>{date}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }