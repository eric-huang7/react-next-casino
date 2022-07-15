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
import {ModalFooter} from "@chakra-ui/modal";

const SelectModal = ({ isOpen, onClose, onBack, title, wrapperRef, children, footer, width = 320}) => (
  <Modal
    closeOnOverlayClick
    isOpen={isOpen}
    onClose={onClose}
    isCentered
  >
    <ModalOverlay/>
    <ModalContent
      w={{base: "90%", lg: width}}
      minW={{base: "90%", lg: width}}
      maxW={{base: "90%", lg: "80%"}}
      h="60%"
      minH="200px"
      ref={wrapperRef}
      bg="transparent"
    >
      <ModalHeader
        minH="60px"
        borderRadius="15px 15px 0 0"
        border="3px solid white"
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
      <ModalBody p={0} position="relative"  borderRadius="0 0 15px 15px" bg="white">
        {children}
      </ModalBody>
      {footer && <ModalFooter pt={5} px={0} pb={0}>
        {footer}
      </ModalFooter>}
    </ModalContent>
  </Modal>
)

export default SelectModal;
