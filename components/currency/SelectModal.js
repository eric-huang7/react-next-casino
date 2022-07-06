import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
} from '@chakra-ui/react'
import {ChevronLeftIcon} from "@chakra-ui/icons"

export const SelectModal = ({ isOpen, onClose, onBack, title, wrapperRef, children}) => (
  <Modal
    closeOnOverlayClick
    isOpen={isOpen}
    onClose={onClose}
    isCentered
  >
    <ModalOverlay/>
    <ModalContent w="320px" h="60%" ref={wrapperRef}>
      <ModalHeader
        minH="60px"
        borderRadius="10px 10px 0 0"
        border="5px solid white"
        bg="primary.500"
        overflow="hidden"
        p={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Text
          color="white"
          fontFamily="Lithograph"
          textAlign="center"
          fontSize={20}
          fontWeight={600}
        >
          {title}
        </Text>
        {onBack && <ChevronLeftIcon
          position="absolute"
          w={10} h={10} left={0} top="5px"
          color="white"
          sx={{cursor: "pointer"}}
          onClick={onBack}
        />}
      </ModalHeader>
      <ModalCloseButton color="white" fontSize={18} top={15}/>
      <ModalBody p={0} position="relative">
        {children}
      </ModalBody>
    </ModalContent>
  </Modal>
)
