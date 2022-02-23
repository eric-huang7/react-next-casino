import Link from 'next/link'
import { useTranslation } from 'next-i18next'

export const MessageTextContainer = ({ messageType }) => {
  const { t } = useTranslation('common')

  switch (messageType) {
    case 'success':
      return (
        <p>
          {t('messageContainer.messagesText.succes')}
          <span>&ensp;</span>
          <Link href={'/accounts/history'}><a>{'View Transaction History.'}</a></Link>
        </p>
      )
    case 'token_invalid':
      return (
        <p>{t('messageContainer.messagesText.tokenInvalid')}</p>
      )
    case 'other_error':
      return (
        <p>{t('messageContainer.messagesText.otherError')}</p>
      )
    default:
      return (
        <p>
          {t(messageType)}
        </p>
      )
  }
}