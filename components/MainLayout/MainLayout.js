import {Header} from "./Header/Header";

import styles from '../../styles/MainLayout.module.scss'

const MainLayout = ({children, t}) => {

  return (
          <div  className={styles.mainLayoutWrapper}>
            <Header t={t}/>
            {children}

          </div>
  )
}

export default MainLayout;