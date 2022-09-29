import RoundButton from "../../../../buttons/RoundButton";
import {Textarea, Collapse} from "@chakra-ui/react";
import {Box} from "@chakra-ui/layout";

export const ChangeDescriptionContainer = ({
  t,
  showChangeFormHandler,
  document,
  showChangeForm,
  newDescription,
  newDescriptionInputHandler,
  updateDocumentHandler
}) => {

  return (
    <Collapse in={showChangeForm}>
      <Box bg="inherit" maxH="300px" overflow="hidden" zIndex={2} position="relative">
        <form id={`${'changeDocumentForm'}${document.id}`}>
              <Textarea w="100%" minH="60px" mb="30px" bg="white"
                name={`${'changeDocumentDescription'}${document.id}`}
                value={newDescription}
                onChange={(e) => newDescriptionInputHandler(e.target.value)}
              />
        </form>
        <RoundButton
          onClick={() => updateDocumentHandler(document)}
          title={t('myAccount.documentsPage.uploadedDocumentsBlock.updateDocument')}
          w="auto"
          solid
          fontFamily="Verdana"
          fontSize={15}
          form={`${'changeDocumentForm'}${document.id}`}
          type="submit"
        />
        <RoundButton
          ml={4}
          title={t('myAccount.documentsPage.uploadedDocumentsBlock.cancel')}
          onClick={() => showChangeFormHandler(false)}
        />
      </Box>
    </Collapse>
  )
}
