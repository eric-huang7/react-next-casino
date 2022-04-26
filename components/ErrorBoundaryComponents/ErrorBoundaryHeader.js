import React from "react";
import {logErrorToMyService} from "../../helpers/errorLoger";
import styles from "../../styles/Header/Header.module.scss";
import Link from "next/link";
import {Navigation} from "../MainLayout/Header/Navigation/Navigation";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import {UserBlockNavigation} from "../MainLayout/Header/UserBlock/UserBlock";

class ErrorHeaderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <header className={styles.mainHeader}>
          <Link href={'/'} passHref>
            <img style={{cursor: "pointer"}} className={styles.logo} src={'/assets/img/mainLayoutImg/logo.webp'} alt="logo"/>
          </Link>
          <LangSwitcher />
        </header>
      );
    }
    return this.props.children;
  }
}

export default ErrorHeaderPage;
