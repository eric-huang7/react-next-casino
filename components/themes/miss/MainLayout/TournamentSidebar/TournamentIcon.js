import Image from "next/image";
import {Box} from "@chakra-ui/react";
import {useDispatch} from "react-redux";
import {showTournaments} from "/redux/popups/action";
import {assetsPath} from "../../../../../envs/theme";

export const TournamentIcon = ({toursref}) => {
  const dispatch = useDispatch();

  function showTournamentsHandler(e) {
    dispatch(showTournaments(true));
  }

  return (
    <Box
      ref={toursref}
      onClick={() => showTournamentsHandler()}
      w="52px"
      h="61px"
      bg="primary.500"
      borderRadius="10px 0 0 10px"
      position="fixed"
      right={0}
      top="40%"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      cursor="pointer"
      zIndex={10}
      pl="7px"
    >
      <Image src={`${assetsPath}/img/tournaments/sidebar-icon.webp`} layout={'fixed'} width={40} height={40}
             alt={'tournament icon'}/>
    </Box>
  )
}
