import React from "react";
import {logErrorToMyService} from "../../../helpers/errorLoger";


class ExitIntentError extends React.Component {
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
      return <></>;
    }
    return this.props.children;
  }
}

export default ExitIntentError;