import {useSelector} from "react-redux";
import { Box } from "@chakra-ui/react";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {GameItemContainer} from "./GameItemContainer";
import usePlayGame from "../../../hooks/usePlayGame";

export const GamesContainer = ({t, exit}) => {
  const gamesList = useSelector((store) => store.games);
  const {playFun, playGame} = usePlayGame();
  const gamesData = gamesList.topGames.results.slice(0, 3);

  return (
    <Box p="15px 10px 15px 20px">
      {gamesList?.topGames?.success ? gamesData.map((game) => {
        return (
          <GameItemContainer
            playGameClickHandler={playGame}
            playFunClickHandler={playFun}
            key={`${game.name} game key`}
            t={t}
            gameData={game}
          />
        )
      }) : <LoadingComponent t={t} />}
    </Box>
  )
}
