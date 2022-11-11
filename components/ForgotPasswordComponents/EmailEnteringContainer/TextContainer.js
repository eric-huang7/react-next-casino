import { Text } from "@chakra-ui/react"

export const TextContainer = ({t}) => {
  const liveChatClick = () => {
    const liveChatButton = document.getElementById('lhc_status_widget_v2').contentWindow.document.body.childNodes[0];
    liveChatButton.click();
  }

  return (
    <>
      <Text fontSize="16px" lineHeight="22px" color="text.300" textIndent="15px" mb="24px">
        {t('forgotPasswordForm.textBlocks.instructionsText')}
      </Text>
      <Text  fontSize="16px" lineHeight="22px" color="text.300" mb="16px">
        <span>
          {t('forgotPasswordForm.textBlocks.supportText.firstPart')}
        </span>
        <Text as="span"
          cursor="pointer"
          color="primary.500"
          onClick={liveChatClick}
        >
          {` ${t('forgotPasswordForm.textBlocks.supportText.support')} ` }
        </Text>
        <span>
          {t('forgotPasswordForm.textBlocks.supportText.secondPart')}
        </span>
      </Text>
    </>
  )
}
