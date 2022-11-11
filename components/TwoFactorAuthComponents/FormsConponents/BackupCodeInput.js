import { Input, chakra, Box } from "@chakra-ui/react";

export const BackupCodeInput = ({error, value, inputCodeHandler, backupCodeFormHandler}) => (
  <Box w="100%" p="0 20px">
    <chakra.form onSubmit={backupCodeFormHandler} w="100%">
      <Input
        type="text"
        w="100%"
        h="55px"
        bg={error? "rgba(255, 0, 0, 0.1)" : "#f2f6f9"}
        border={`1px solid ${error ? 'red' : '#b5b7b8'}`}
        borderRadius="7px"
        outline="none"
        fontSize="30px"
        lineHeight="26px"
        color={error? "red" : "#707070"}
        textAlign="center"
        p="0 5px 0 5px"
        value={value}
        onChange={(e) => inputCodeHandler(e.target.value)}
      />
    </chakra.form>
  </Box>
)
