import {Header} from "./Header/Header";


const MainLayout = ({children, t}) => {

  return (
          <>
            <Header t={t}/>
            {children}
          </>
  )
}

export default MainLayout;