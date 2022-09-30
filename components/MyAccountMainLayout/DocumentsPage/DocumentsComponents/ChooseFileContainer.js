import {chakra} from "@chakra-ui/react";
import {HStack, Text} from "@chakra-ui/layout";

export const ChooseFileContainer = ({ t, fileInputHandler, selectedFile, isUploading, fileError }) => (
  <>
    <HStack alignItems="flex-start" mb="24px" spacing={0}>
      <chakra.label htmlFor="chooseFileInput"  w="140px">
        <Text as="span" fontSize={16} color="text.450" fontFamily="Verdana">
          {t('myAccount.documentsPage.uploadDocumentBlock.attachment')}
        </Text>
      </chakra.label>
      <chakra.label htmlFor="chooseFileInput" w="229px" minH="34px" borderRadius="5px" bg="#eeeeee" cursor="pointer"
        border="0.88px solid #8a8a8a" p="5px" display="flex !important" alignItems="center" justifyContent="center">
        {selectedFile
          ? <Text as="span" fontSize={12} color="text.450" fontFamily="Verdana" fontWeight={600}
              textTransform="uppercase" textAlign="center">
            {t('myAccount.documentsPage.uploadDocumentBlock.chosenFile')} {selectedFile.name}
          </Text>
          : <Text as="span" fontSize={12} color="text.450" fontFamily="Verdana" textTransform="uppercase"
              textAlign="center" fontWeight={600}>
             {t('myAccount.documentsPage.uploadDocumentBlock.chooseFile')}
          </Text>
        }
      </chakra.label>

      {isUploading && <Box w="25px" h="25px" ml="10px">
        <img width="100%" height="100%" src={'/assets/icons/loader.gif'} alt="loader"/>
      </Box>}

      <chakra.input
        onChange={(e) => fileInputHandler(e.target.files[0])}
        type={'file'}
        id={'chooseFileInput'}
        opacity={0}
        visibility="hidden"
        position="absolute"
        // value={selectedFile}
      />
    </HStack>
    <Text as="span" fontSize={12} color="red.500" ml="140px" mb="20px">{fileError}</Text>
  </>
)
