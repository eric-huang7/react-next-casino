import {Text, Textarea} from "@chakra-ui/react"
import {HStack} from "@chakra-ui/layout";

export const FileDescriptionContainer = ({t, descriptionInputHandler, description}) => (
  <HStack alignItems="flex-start" mb="30px" position="relative" zIndex={2}>
    <label htmlFor="fileDescriptionField">
      <Text fontSize={15} color="text.450" fontFamily="Verdana" w="140px">
        {t("myAccount.documentsPage.uploadDocumentBlock.description")}
      </Text>
    </label>
    <Textarea
      id={"fileDescriptionField"}
      value={description}
      maxW="402px"
      w="100%"
      h="144px"
      borderRadius="5px"
      bg="#eeeeee"
      border="1px solid #686565 !important"
      onChange={(e) => descriptionInputHandler(e.target.value)}
    />
  </HStack>
)
