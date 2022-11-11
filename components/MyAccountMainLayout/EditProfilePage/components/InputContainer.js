import {
  FormControl,
  FormLabel,
  FormHelperText,
  HStack,
  Box
} from '@chakra-ui/react'
import {Input} from "@chakra-ui/input";

const InputContainer = ({t, inputId, inputName, value, valueHandler, disableEdit, phoneError}) =>
  <FormControl as={HStack} spacing={0} mb="45px">
    <FormLabel w="180px" mr={0} fontSize="16px">{inputName}</FormLabel>
    <Box>
      <Input
        type="text"
        h="30px"
        w="239px"
        p={0}
        border="none"
        borderRadius={0}
        focusBorderColor="none"
        borderBottom="1px solid #b2b2b2 !important"
        value={value}
        id={inputId}
        disabled={disableEdit}
        onChange={(e) => valueHandler(e.target.value)}
      />
      {/*<FormHelperText></FormHelperText>*/}
      {inputId === 'mobileInput' && <>
        <FormHelperText color="red">{phoneError}</FormHelperText>
        <FormHelperText>{t("myAccount.editProfilePage.mobileAdd")}</FormHelperText>
      </>}
    </Box>
  </FormControl>

export default InputContainer;
