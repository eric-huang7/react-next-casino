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

const SelectModal = ({
  isOpen, onClose, onBack, title, header, wrapperRef, children, footer, width = 320, height, headerHeight = 56, before,
}) => (
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
      h={height || "60%"}
      minH="200px"
      ref={wrapperRef}
      bg="transparent"
    >
      {before}
      <ModalHeader
        h={`${headerHeight}px`}
        minH={`${headerHeight}px`}
        borderRadius="15px 15px 0 0"
        border="4px solid white"
        bg="primary.500"
        overflow="hidden"
        p={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        {title && <Text
          color="white"
          fontFamily="Lithograph"
          textAlign="center"
          fontSize={20}
          fontWeight={600}
        >
          {title}
        </Text>}
        {header}
        {onBack && <ChevronLeftIcon
          position="absolute"
          w={10} h={10} left={0}
          top={`calc(5px + (${headerHeight}px - 46px - 8px) / 2)`}
          color="white"
          sx={{cursor: "pointer"}}
          onClick={onBack}
        />}
      </ModalHeader>
      <ModalCloseButton color="white" fontSize={18} top={`calc(12px + (${headerHeight}px - 46px - 8px) / 2)`}/>
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
