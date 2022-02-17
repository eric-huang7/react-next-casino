export const logErrorToMyService = (error, errorInfo) => {

  console.log("error: " + error);
  console.log("errorInfo: " + JSON.stringify(errorInfo));
  console.log("componentStack: " + errorInfo.componentStack);
}