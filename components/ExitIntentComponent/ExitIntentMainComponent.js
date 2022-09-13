import {GamesContainer} from "./GamesContainer/GamesContainer";
import {BonusesContainer} from "./BonusesContainer/BonusesContainer";
import {LoadingComponent} from "../LoadingComponent/LoadingComponent";
import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, chakra} from "@chakra-ui/react";
import {HStack, Text} from "@chakra-ui/layout";
import {useRouter} from "next/router";

export const ExitIntentMainComponent = ({t, showPopup, exit, type, isShowExitIntent}) => {
  const router = useRouter();
  const path = type === "bonus" ? "/promotions" : "/games-page/top-games";
  const innerHeadingText = type === "bonus" ? t("exitIntentPopup.innerHeadingBonus") : t("exitIntentPopup.innerHeadingGames");
  const linkText = type === "bonus" ? t("exitIntentPopup.seeAllPromo") : t("exitIntentPopup.seeAllGames");

  const onClick = () => {
    exit();
    router.push(path);
  }

  return showPopup && isShowExitIntent && (
    <Modal
      closeOnOverlayClick
      isOpen
      onClose={exit}
      scrollBehavior="outside"
    >
      <ModalOverlay/>
      <ModalContent w="430px" maxW="430px" minW="340px" borderRadius="15px" bg="url('/assets/img/modals/modal_bg.webp')">
        <ModalBody p={0}>

          <HStack h="50px" backgroundColor="accent.850" w="100%" position="relative" borderRadius="15px 15px 0 0"
                  backgroundImage="url('/assets/img/mainLayoutImg/header_bg.webp')" justifyContent="center">
            <Text fontSize={24} fontWeight={600} color="white" fontFamily="Lithograph">
              {t("exitIntentPopup.heading")}
            </Text>
          </HStack>
          <ModalCloseButton bg="transparent" color="white" fontSize={18} _hover={{color: "#fff"}}
              _focus={{ boxShadow: 'none' }}/>

          <HStack justifyContent="center" alignItems="center" minH="70px" p="20px" w="100%">
            <Text fontSize="16px" color="accent.850" fontWeight="600" fontFamily="Lithograph" textAlign="center">
              {innerHeadingText}
            </Text>
          </HStack>

          {type === "bonus" || true
            ? <BonusesContainer exit={exit} t={t}/>
            : (type === "games" ? <GamesContainer exit={exit} t={t}/> : <LoadingComponent t={t} />)}

        </ModalBody>

        {(type === "bonus" || type === "games") && <HStack onClick={onClick} maxW="430px" w="100%" minH="75px"
           backgroundColor="accent.850" border={0} borderRadius="15px" cursor="pointer" justifyContent="center"
           alignItems="center" backgroundImage="url('/assets/img/mainLayoutImg/header_bg.webp')">
          <Text fontSize="24px" fontWeight={600} color="white" fontFamily="Lithograph" textTransform="uppercase">
            {linkText}
          </Text>
        </HStack>}

      </ModalContent>
    </Modal>
  )
}
