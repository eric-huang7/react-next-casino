import { Text, VStack } from "@chakra-ui/react";

export const ErrorTextBlock = ({t, text}) => (
  <VStack alignItems="center">
      <Text fontSize="16px" lineHeight="24px" color="text.200" textAlign="center">
          {t(text)}
      </Text>
  </VStack>
)
