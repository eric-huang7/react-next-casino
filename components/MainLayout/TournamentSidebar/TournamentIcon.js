import Image from "next/image";
import {Box} from "@chakra-ui/react";
import {useDispatch} from "react-redux";
import {showTournaments} from "../../../redux/popups/action";

export const TournamentIcon = ({toursref}) => {
  const dispatch = useDispatch();

  function showTournamentsHandler(e) {
    dispatch(showTournaments(true));
  }

  return (
    <Box
      ref={toursref}
      onClick={() => showTournamentsHandler()}
      w="107px"
      h="100px"
      bg="accent.500"
      borderRadius="50px 0 0 50px"
      position="fixed"
      right={0}
      top="40%"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      cursor="pointer"
      zIndex={10}
    >
      <Image src={'/assets/img/tournaments/sidebar-icon.webp'} layout={'fixed'} width={100} height={100}
             alt={'tournament icon'}/>
    </Box>
  )
}
