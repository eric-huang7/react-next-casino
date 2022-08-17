import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import React, {useEffect} from "react";
import { HStack } from "@chakra-ui/react";
import {deleteGameLink, freeGame, playPayGame} from "../../redux/playGame/action";
import {showGameWindow} from "../../redux/ui/action";
import GamesItemErrorHandler from "./GamesPageErrorHandler/GameItemErrorHandler";
import preloadImages from "../../helpers/preloadImages";
import {setLoaded} from "../../redux/games/action";
import SectionHeader from "../typography/SectionHeader";
import {keyframes} from "@chakra-ui/react";
import {Text, Box, VStack} from "@chakra-ui/layout";
import {GameItemContainer} from "../HomePageComponents/GamesSliderBlock/GameItemContainer";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const titles = {
  'all-games': 'gamesPage.headings.allGames',
  'new-games': 'gamesPage.headings.newGames',
  'btc-games': 'gamesPage.headings.btcGames',
  'top-games': 'gamesPage.headings.topGames',
  'jackpot-games': 'gamesPage.headings.jackpotGames',
  'table-games': 'gamesPage.headings.tableGames',
  'tournaments': 'gamesPage.headings.tournaments',
}

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const animation = `${pulse} 1.5s ease-in-out 0.5s infinite`

export const GamesContainer = (props) => {
  const {
    t,
    heading,
    gamesData,
    setPageCounter,
    gamesError
  } = props;
  const { width } = useWindowDimensions();
  const userInfo = useSelector((store) => store.authInfo);
  const playGames = useSelector((state) => state.playGame);
  const isLoaded = useSelector((store) => store.games.isLoaded)

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    return () => {
      setPageCounter(0);
    }
  },[])

  useEffect(() => {
    if (playGames.startGame?.game_link) {
      if (width <= 1065) {
        router.push(playGames.startGame.game_link);
      }
    }

    if (playGames.freeGame?.game_link) {
      if (width <= 1065) {
        router.push(playGames.freeGame.game_link);
      }
    }
  }, [playGames]);

  const playFunClickHandler = (gameData) => {
    let sendData = {
      game_provider_id: gameData.game_provider_id,
      game_id: gameData.game_provided_id
    }

    if (typeof window !== "undefined") {
      let saveData = JSON.stringify({
        data: sendData,
        gameName: gameData.name ? gameData.name : "..."
      })

      localStorage.setItem("user_last_game", saveData);
    }

    dispatch(deleteGameLink());
    dispatch(freeGame({
      data: sendData,
      gameName: gameData.name ? gameData.name : "..."
    })).then((res) => {
      if (res?.error) {
        // TODO show notification
      } else if (width > 1065) {
        router.push(`/game/${gameData.name ? gameData.name : "..."}`).then((data) => {
          dispatch(showGameWindow(true));
        });
      }
    });
  }

  const playGameClickHandler = (gameData, user) => {
    if (user.isAuthenticated && (user.balance.balances.length > 0)) {
      let is_bonus = false; // default val
      let bonus_id = null; // default val
      let userBalance = user.balance.balances.filter((el) => el.is_default !== "0");

      let sendData = {
        game_provider_id: gameData.game_provider_id,
        game_id: gameData.game_provided_id,
        user_id: user.user.user.id,
        is_bonus: is_bonus,
        balance_id: `${userBalance[0]?.id || user.balance.balances[0]?.id}`
      }
      if (typeof window !== "undefined") {
        let saveData = JSON.stringify({
          data: {
            game_provider_id: sendData.game_provider_id,
            game_id: sendData.game_provided_id
          },
          gameName: gameData.name ? gameData.name : "..."
        })
        localStorage.setItem("user_last_game", saveData);
      }
      // game_provider_id, game_id, user_id, is_bonus, balance_id

      dispatch(deleteGameLink());
      dispatch(playPayGame({
        data : sendData,
        gameName: gameData.name ? gameData.name : "..."
      })).then((res) => {
        if (res?.error) {
          // TODO show notification
        } else if ( width > 1065) {
          router.push(`/game/${gameData.name ? gameData.name : "..."}`).then((data) => {
            dispatch(showGameWindow(true));
          });
        }
      });
    } else {

    }
  }

  useEffect(() => {
    // Images preload
    let isCancelled = false

    if (gamesData.length > 0) {
      (async () => await preloadImages(gamesData, isCancelled, () => {
        dispatch(setLoaded(true))
      }))();
    }

    return () => {
      isCancelled = true
    }
  }, [isLoaded, gamesData])

  let games = gamesData.map((el, ind) => {
    return (
      <GamesItemErrorHandler key={`${el.id} ${el.name} game page`}>
        <GameItemContainer
          w={{base: "160px", lg: "235px"}}
          h={{base: "125px !important", lg: "160px !important"}}
          m={{base: "5px !important", lg: "10px !important"}}
          playGameClickHAndler={playGameClickHandler}
          playFunClickHandler={playFunClickHandler}
          t={t}
          gameData={el}
          user={userInfo}
        />
      </GamesItemErrorHandler>
    )
  })

  return (
    <VStack
      maxW="1360px"
      m={{base: "16px", lg: "30px auto"}}
      p={{base: "0 0 30px", lg: "0 30px 50px"}}
    >
      <SectionHeader px={{base: "16px", lg: "20px"}} fontSize={30}>{t(titles[heading] || heading)}</SectionHeader>
      <HStack w="100%" spacing={0} p={{base: 0, lg: "12px 6px 6px 6px"}} flexWrap="wrap"
        pb={!gamesError && !isLoaded ? 60 : 0 }
      >
        {gamesError
          ? <Text as="h2" m="0 auto" fontSize="24px" fontFamily="Arial" color="#ffffff">{t(gamesError)}</Text>
          : (!isLoaded ? (width > 800 ? [0,1,2,3,4] : [0,1]).map(key => (
              <Box m={{base: "5px", lg: "10px"}} key={key}
                bg="rgba(0, 0, 0, 0.21)"
                borderRadius="0.25rem"
                h={{base: "125px", lg: "160px"}}
                w={{base: "calc(50% - 10px)", lg: "calc(20% - 20px)"}}
                animation={animation}
              />
            )) : games)
        }
      </HStack>
    </VStack>
  )
}

