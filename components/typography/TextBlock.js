import { Text } from "@chakra-ui/react"
import {Box} from "@chakra-ui/layout";

export const TextBlock = ({ title, content }) => (
  <Box p="15px" m="0 auto">
    <Box maxW="1065px" maxH="1065px" overflow="hidden" p="15px" bg="rgba(0,0,0, 0.3)" m="60px auto 0">
      <Box
        border="1px solid #626567"
        maxW="1065px"
        maxH="1035px"
        overflowY="auto"
        css={{
          scrollbarColor: "rgba(124,125,129, 1) rgba(124,125,129, 0.6)",
          scrollbarWidth: "thin",
        }}
        p="20px 50px 20px 10px"
      >
        <Text as="h2" fontSize="22px" color="primary.500" fontWeight={700} fontFamily="Verdana" pb={4}>
          {title}
        </Text>
        <Box color="white" whiteSpace="pre-wrap">
          <div dangerouslySetInnerHTML={{ __html: content }}/>
        </Box>
      </Box>
    </Box>
  </Box>
)
