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

const LightModal = ({ isOpen, onClose, onBack, title, wrapperRef, children, footer, width = "800px"}) => (
  <Modal
    closeOnOverlayClick
    isOpen={isOpen}
    onClose={onClose}
    scrollBehavior="inside"
    isCentered
  >
    <ModalOverlay/>
    <ModalContent
      w={{base: "calc(100% - 120px)", lg: width}}
      minW={{base: "calc(100% - 120px)", lg: width}}
      maxW={{base: "calc(100% - 120px)", lg: "80%"}}
      h="80%"
      minH="200px"
      borderRadius="15px"
      bg="white"
      ref={wrapperRef}
    >
      <ModalHeader
        minH="60px"
        borderRadius="15px 15px 0 0"
        bg="grey.200"
        borderBottom="1px solid #a7a7a7"
        p={4}
        display="table"
        position="relative"
      >
        <Text
          fontFamily="Verdana"
          textAlign="center"
          fontSize={24}
          fontWeight={400}
        >
          {title}
        </Text>
        {onBack && <ChevronLeftIcon
          position="absolute"
          w={8} h={8}
          left="-50px" top={0}
          borderRadius="md"
          bg="white"
          sx={{cursor: "pointer"}}
          onClick={onBack}
        />}
      </ModalHeader>
      <ModalCloseButton bg="white" fontSize={18} top={0} right={-50} _hover={{bg: "#fff"}} _focus={{ boxShadow: 'none' }}/>
      <ModalBody
        p={5}
        position="relative"
        whiteSpace="pre-line"
        css={{
          scrollbarColor: "scroll.100 scroll.500",
          scrollbarWidth: "thin",
        }}
      >
        {children}
      </ModalBody>
      <ModalFooter pt={5} px={0} pb={0}>
        {footer}
      </ModalFooter>
    </ModalContent>
  </Modal>
)

export default LightModal
