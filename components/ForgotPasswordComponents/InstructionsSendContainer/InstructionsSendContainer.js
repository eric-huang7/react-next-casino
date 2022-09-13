import { VStack, Text, Image } from "@chakra-ui/react";

export const InstructionsSendContainer = ({t, text}) => (
  <VStack spacing={0}>
    <Image src='/assets/img/paymentsModals/confirmed.png' alt="" w="120px" h="120px" my="35px"/>
    <Text fontSize="16px" lineHeight="24px" color="text.200" textAlign="center">
      {t(text)}
    </Text>
  </VStack>
)
