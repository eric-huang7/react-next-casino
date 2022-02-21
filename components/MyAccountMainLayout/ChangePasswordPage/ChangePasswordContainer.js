import { ChangePasswordForm } from './ChangePasswordForm'

export const ChangePasswordContainer = ({ t, userInfo }) => {

  return (
    <ChangePasswordForm userInfo={userInfo} t={t}/>
  )
}