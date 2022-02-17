import React from "react";
import {logErrorToMyService} from "../../../helpers/errorLoger";


class BonusErrorHandler extends React.Component {
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
      return <h3 className={'errorBoundaryMessage'}>{'Something is wrong. Please contact support.'}</h3>;
    }
    return this.props.children;
  }
}

export default BonusErrorHandler;