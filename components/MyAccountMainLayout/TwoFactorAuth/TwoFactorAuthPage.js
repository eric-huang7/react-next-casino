import { Heading } from '../ComponentsForPages/Heading'
import { GoogleAuthContainer } from './GoogleAuthContainer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { SavedKeysBlock } from './GoogleAuthComponents/SavedKeysBlock'
import { TwoFactorAuthCompleteBlock } from './GoogleAuthComponents/TwoFactorAuthCompleteBlock'
import { getQrAuth } from '../../../redux/user/action'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'

export const TwoFactorAuthPage = ({ t }) => {
  const dispatch = useDispatch()
  const authData = useSelector((store) => store.authInfo)
  const [isShowSavedKeys, setIsShowSavedKeys] = useState(false)
  const [savedKeys, setSavedKeys] = useState([])

  useEffect(() => {
    dispatch(getQrAuth())
  }, [])

  return (
    <div>
      <Heading heading={t('myAccount.pageHeadings.googleAuth')}/>
      <ErrorText>
      {isShowSavedKeys
        ? <SavedKeysBlock t={t} savedKeys={savedKeys}/>
        : (authData.user.user.is_2fa_enabled || authData.isMayTwoFactorAuth
          ? <TwoFactorAuthCompleteBlock authData={authData} t={t}/>
          : <GoogleAuthContainer
            setSavedKeys={setSavedKeys}
            setIsShowSavedKeys={setIsShowSavedKeys}
            authData={authData}
            t={t}
          />
        )
      }
      </ErrorText>
    </div>
  )
}
