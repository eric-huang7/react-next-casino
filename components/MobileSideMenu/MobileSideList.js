import styles from '../../styles/MobileSideMenu/MobileSideMenu.module.scss';

let listArr = [
  {id: 1, name: "Lorem ipsum home", icon: '/assets/img/mobileSideMenu/home.svg'},
  {id: 2, name: "Lorem ipsum user", icon: '/assets/img/mobileSideMenu/user.svg'},
  {id: 3, name: "Lorem ipsum bell", icon: '/assets/img/mobileSideMenu/bell.svg'},
  {id: 4, name: "Lorem ipsum gift", icon: '/assets/img/mobileSideMenu/gift.svg'},
  {id: 5, name: "Lorem ipsum cup", icon: '/assets/img/mobileSideMenu/cup.svg'},
  {id: 6, name: "Lorem ipsum question", icon: '/assets/img/mobileSideMenu/question.svg'},
  {id: 7, name: "Lorem ipsum information", icon: '/assets/img/mobileSideMenu/information.svg'},
  {id: 8, name: "Lorem ipsum files", icon: '/assets/img/mobileSideMenu/files.svg'},
  {id: 9, name: "Lorem ipsum arrow", icon: '/assets/img/mobileSideMenu/arrow.svg'},
]

export const MobileSideList = () => {

  return (
    <ul className={styles.mobileSideList}>
      {
        listArr.map((el) => {
          return (
            <li key={el.id} className={styles.mobileSideListItem}>
              <img src={el.icon} alt='side menu icon'/>
              <p>{el.name}</p>
            </li>
          )
        })
      }
    </ul>

    )
}