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
import {Box} from "@chakra-ui/layout";
import {assetsPath} from "../../../../envs/theme";

const Right = <Box position="absolute" top="150px" left="458px" w="228px">
  <img src={`${assetsPath}/img/mainLayoutImg/deposit_side_bg.svg`} width="228px" />
</Box>

const Right2 = <Box position="absolute" top="200px" left="370px" w="446px">
  <img src={`${assetsPath}/img/mainLayoutImg/deposit_side_bg.webp`} width="446px" />
</Box>

const SelectModal = ({
  isOpen, onClose, onBack, title, header, children, footer, width = 320, height, headerHeight = 56, before, headerProps,
  simpleClose = false, hideClose = false, right = Right2, ...props
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
      borderRadius="60px 0 60px 0"
      {...props}
    >
      {before}
      {right}
      {before && <Box h="150px" />}
      <ModalHeader
        h={`${headerHeight}px`}
        minH={`${headerHeight}px`}
        borderRadius="60px  0 0 0"
        border="0px solid white"
        bg="primary.900"
        overflow="hidden"
        p={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        sx={headerProps}
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
        {onBack && <Image src="/assets/icons/deposit/arrow-left.svg"
          position="absolute"
          w="16px" h="16px" left={4}
          top={`calc(5px + (${headerHeight}px - 46px - 8px) / 2)`}
          sx={{cursor: "pointer"}}
          onClick={onBack}
        />}
        {!hideClose && <Image src="/assets/icons/close.svg" color="white"
           fontSize={18} position="absolute" right={5} top={`calc(12px + (${headerHeight}px - 46px - 8px) / 2)`}
           _focus={{ boxShadow: 'none' }} cursor="pointer" onClick={onClose}  />}
      </ModalHeader>

      <ModalBody p={0} position="relative"  borderRadius="0 0 60px 0" bg="white" h="100%" display="block">
        {children}
      </ModalBody>
      {footer && <ModalFooter pt={5} px={0} pb={0} borderRadius="15px">
        {footer}
      </ModalFooter>}
    </ModalContent>
  </Modal>
)

export default SelectModal;
