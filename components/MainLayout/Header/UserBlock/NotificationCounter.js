import {Text} from "@chakra-ui/react";

export const NotificationCounter = ({messageCount}) => (
  <Text
    as="span"
    position="absolute"
    top="0px"
    right="-5px"
    p="0px 1px"
    backgroundColor="#4fa053"
    borderRadius="50%"
    textAlign="center"
    fontSize="10px"
    fontWeight={700}
    color="#ffffff"
    w={{base: "13px", lg: "16px"}}
    h={{base: "13px", lg: "16px"}}
  >
    {messageCount}
  </Text>
)
