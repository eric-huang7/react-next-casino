import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text, Image,
} from '@chakra-ui/react'
import {ChevronLeftIcon} from "@chakra-ui/icons"
import {ModalFooter} from "@chakra-ui/modal";

const SelectModal = ({
  isOpen, onClose, onBack, title, header, children, footer, width = 320, height, headerHeight = 56, before,
  ...props
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
      h={height ?? "fit-content"}
      minH={height ?? "200px"}
      bg="transparent"
      boxShadow="0px 0px 40px rgba(0, 0, 0, 0.9)"
      borderRadius="15px"
      {...props}
    >
      {before}
      <ModalHeader
        h={`${headerHeight}px`}
        minH={`${headerHeight}px`}
        borderRadius="15px 15px 0 0"
        border="0px solid white"
        bg="accent.950"
        overflow="hidden"
        p={0}
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        position="relative"
      >
        {title && <Text
          color="white"
          fontFamily="Montserrat"
          textAlign="center"
          fontSize={25}
          textTransform="uppercase"
          fontWeight={500}
          px="21px"
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
        <Image src="/assets/icons/close.svg" color="white" fontSize={18} position="absolute" right={5}
           top={`calc(12px + (${headerHeight}px - 46px - 8px) / 2)`} _focus={{ boxShadow: 'none' }}
           cursor="pointer" onClick={onClose}  />
      </ModalHeader>

      <ModalBody p={0} position="relative"  borderRadius="0 0 15px 15px" bg="accent.950" h="100%" display="block">
        {children}
      </ModalBody>
      {footer && <ModalFooter pt={5} px={0} pb={0} borderRadius="15px">
        {footer}
      </ModalFooter>}
    </ModalContent>
  </Modal>
)

export default SelectModal;
