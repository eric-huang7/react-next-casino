import {Heading} from "../ComponentsForPages/Heading";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {MainBlock} from "./MainBlock";


export const GamblingLimitsPage = ({t}) => {


  return (
    <div>
      <Heading t={t} heading={"myAccount.pageHeadings.gamblingLimits"}/>
      <MainBlock t={t} />
    </div>
  )
}