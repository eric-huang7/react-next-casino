import {Box} from "@chakra-ui/react";
import {HStack} from "@chakra-ui/layout";
import {Input} from "@chakra-ui/input";

export const RedeemInput = ({mb = 0, mt = 8, onChange, value = 0, children, ...props}) => (
  <HStack
    w="auto"
    m="auto"
    {...props}
    style={{marginTop: mt, marginBottom: mb}}
    spacing={0}
    justifyContent="center"
    fontSize="16px"
    fontFamily="Verdana"
    bg="white"
    color="black"
  >
    <Box
      bg={`url("/assets/img/redeemPage/up-icon.svg") no-repeat center`}
      backgroundColor="accent.400"
      w="34px"
      minW="34px"
      h="34px"
    />
    {!children && <Input
      type="text"
      value={value}
      onChange={onChange}
      h={34}
      border="none"
      borderWidth={0}
      borderRadius={0}
      textAlign="right"
      p="0 8px"
      minW="196px"
      m={0}
      _focus={{
        outline: "none",
        border: "none",
        boxShadow: "none !important"
      }}
    />}
    {children && <HStack
      h={34}
      justifyContent="flex-end"
      alignItems="center"
      flexWrap="nowrap"
      whiteSpace="nowrap"
      textTransform="none"
      minW="196px"
      p="0 8px"
    >
      {children}
    </HStack>}
    <Box
      bg={`url("/assets/img/redeemPage/down-icon.svg") no-repeat center`}
      backgroundColor="accent.400"
      w="34px"
      minW="34px"
      h="34px"
    />
  </HStack>
)
