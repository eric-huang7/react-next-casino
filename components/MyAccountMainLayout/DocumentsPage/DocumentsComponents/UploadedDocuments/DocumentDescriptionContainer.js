import {useRouter} from "next/router";
import {dateFormatter} from "../../../../../helpers/dateTranslator";
import {Text, HStack, Box} from "@chakra-ui/layout";
import LinkButton from "../../../../buttons/LinkButton";
import {CloseIcon} from "@chakra-ui/icons";
import {Collapse} from "@chakra-ui/react";

export const DocumentDescriptionContainer = ({t, document, showChangeFormHandler, showChangeForm, removeDocumentHandler}) => {
  const router = useRouter();
  let timeStr = dateFormatter(document.time_created, router.locale);

  return (
    <Collapse in={!showChangeForm}>
      <Box maxH="300px" overflow="hidden" zIndex="1" position="relative">
        <Text fontSize="13px" color="text.450" fontFamily="Verdana">
          {t("myAccount.documentsPage.uploadedDocumentsBlock.addedAt")} {timeStr}
        </Text>
        <Text fontSize="15px" color="#313131" fontFamily="Verdana" mt="30px" mb={0}>
          {document.description}
        </Text>
        <HStack sapcing={4}>
          <LinkButton onClick={() => showChangeFormHandler(true)} color="#ff9900"
              leftIcon={<img src="/assets/img/myAccount/edit.svg" width="15px" height="15px"/>}>
            {t("myAccount.documentsPage.uploadedDocumentsBlock.editDescription")}
          </LinkButton>
          <LinkButton onClick={() => removeDocumentHandler(document)} leftIcon={<CloseIcon boxSize={3} />}>
            {t("myAccount.documentsPage.uploadedDocumentsBlock.remove")}
          </LinkButton>
        </HStack>
      </Box>
    </Collapse>
  )
}
