import {InstructionsIconItem} from "./InstructionsIconItem";
import { Text, Box, VStack } from "@chakra-ui/react";

export const InstructionsTextItem = ({t, data}) => (
  <VStack w={{base: "100%", lg: "425px"}} alignItems="center" justifyContent="center">
    <Box display={{base: "block", lg: "none"}}>
      <InstructionsIconItem t={t} data={data} arrow/>
    </Box>

    <Box w="100%" bg="white" borderRadius="45px" borderTop="5px solid #c4c4c4" p={{base: "30px 16px", lg: "30px"}}>
      <Text fontSize="19px" color="#6f6f6f" fontFamily="Verdana" whiteSpace="pre-line">
        {t(data.textInfo)}
      </Text>
    </Box>
  </VStack>
)
