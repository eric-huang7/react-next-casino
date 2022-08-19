import {SearchGamesContainer} from "./SearchGamesContainer";
import {useDispatch, useSelector} from "react-redux";
import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text} from "@chakra-ui/react";
import {SearchBar} from "../HomePageComponents/ChooseCategoryBlock/SearchBar";
import {showSearchModal} from "../../redux/popups/action";

export const SearchGamesModal = ({t}) => {
  const dispatch = useDispatch();
  let searchGames = useSelector((store) => store.games.searchGames);

  const onClose = () => {
    dispatch(showSearchModal(false));
  }

  return (
    <Modal
      closeOnOverlayClick
      isOpen
      onClose={onClose}
      isCentered
      size="full"
      scrollBehavior="inside"
    >
      <ModalOverlay/>
      <ModalContent
        bg="accent.500"
      >
        <ModalHeader
          pr="50px"
        >
          <SearchBar width="100%" />
        </ModalHeader>
        <ModalCloseButton color="white" fontSize={18} top="20px" />
        <ModalBody p={0}>
          <SearchGamesContainer searchGames={searchGames} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
