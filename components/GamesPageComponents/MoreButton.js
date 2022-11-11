import {
  allProvidersURL,
  chosenProviderURL,
  jackpotGames_url,
  newGames_url,
  tableGames_url,
  topGames_url
} from "../../helpers/gamesURL";
import {setGames, setTotalRows} from "../../redux/games/action";
import {useDispatch, useSelector} from "react-redux";
import {HStack, Text} from "@chakra-ui/layout";

export const MoreButton = ({t, setPageCounter, pageCounter, gamesData, heading}) => {
  const dispatch = useDispatch();

  const moreButtonClickHAndler = async () => {
    let res;
    let url;

    if (heading === 'all-games') {
      url = allProvidersURL(100, pageCounter * 100);
    } else if (heading === 'new-games') {
      url = newGames_url(100, pageCounter * 100);
    } else if (heading === 'btc-games') {
      url = topGames_url(100, pageCounter * 100);
    } else if (heading === 'top-games') {
      url = topGames_url(100, pageCounter * 100);
    } else if (heading === 'jackpot-games') {
      url = jackpotGames_url(100, pageCounter * 100);
    } else if (heading === 'table-games') {
      url = tableGames_url(100, pageCounter * 100);
    } else {
      url = chosenProviderURL(heading, 100, pageCounter * 100);
    }
    res = await fetch(url);
    let newGamesData = await res.json();
    dispatch(setTotalRows(newGamesData.total_rows))
    setPageCounter(pageCounter + 1);
    dispatch(setGames([...gamesData, ...newGamesData.results]))
  }

  return (
    <HStack
      backgroundColor="accent.850"
      backgroundImage="url('/assets/img/mainLayoutImg/header_bg.webp')"
      w="100%"
      h="85px"
      mb="150px"
      alignItems="center"
      justifyContent="center"
    >
      <img src={'/assets/img/moreButton/more-arrow-left.webp'} alt=""/>
        <Text variant="heading" size="lg" onClick={moreButtonClickHAndler} cursor="pointer">
          {t("gamesPage.moreButton")}
        </Text>
      <img src={'/assets/img/moreButton/more-arrow-right.webp'} alt=""/>
    </HStack>
  )
}
