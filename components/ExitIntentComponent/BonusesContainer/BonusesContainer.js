import { useSelector} from "react-redux";
import { Box } from "@chakra-ui/react";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {BonusItemContainer} from "./BonusItemContainer";
import {bonusesFinder} from "../../../helpers/bonusesFinder";

export const BonusesContainer = ({t, exit}) => {
  const activeBonuses = useSelector((state) => state.bonuses);
  const userCurrency = useSelector((state) => state.userFinance);
  const userData = useSelector((store) => store.authInfo);

  let bonusesList = activeBonuses?.activeBonuses?.offers?.slice(0, 3);

  if (userData.isAuthenticated) {
    bonusesList = bonusesFinder(activeBonuses?.activeBonuses?.offers, userCurrency).slice(0, 3);
  } else {
    bonusesList = activeBonuses?.activeBonuses?.offers?.slice(0, 3);
  }

  return (
    <Box p="15px 10px 15px 20px">
      {activeBonuses?.activeBonuses?.success ?
        bonusesList.map((bonus, index) => (
          <BonusItemContainer
            index={index}
            key={`${bonus.id} bonus item key`}
            t={t}
            userData={userData}
            bonusData={bonus}
            exit={exit}
          />
        )) : <LoadingComponent t={t} />
      }
    </Box>
  )
}
