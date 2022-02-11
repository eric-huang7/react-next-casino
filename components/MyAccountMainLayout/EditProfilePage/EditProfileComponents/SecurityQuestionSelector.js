import styles from '../../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss';

const listOfSecurityQuestions = [
  {id: 1, question: "What was your childhood nickname?"},
  {id: 2, question: "In what city did you meet your spouse/significant other?"},
  {id: 3, question: "What is the name of your favorite childhood friend?"},
  {id: 4, question: "What street did you live on in third grade?"},
  {id: 5, question: "What is the middle name of your youngest child?"},
  {id: 6, question: "What was the last name of your third grade teacher?"},
  {id: 7, question: "In what city does your nearest sibling live?"},
  {id: 8, question: "What is your maternal grandmother's maiden name?"},
  {id: 9, question: "In what city or town was your first job?"},
  {id: 10, question: "What is your spouse's mother's maiden name?"},
]

export const SecurityQuestionSelector = ({t, disableEdit, value, genderSelectorHandler}) => {


  return (
    <div className={styles.selectorWrapper}>
      <div className={styles.labelWrapper}>
        <label htmlFor="securityQuestionsSelector">{t("myAccount.editProfilePage.secQuestion")}</label>
      </div>
      <div className={styles.selectorsContainer}>
        {
          disableEdit
            ?
            <select
              id="securityQuestionsSelector"
              value={value}
              disabled={disableEdit}
              onChange={(e) => genderSelectorHandler(e.target.value)}
            >
              <option value={0}>{t("myAccount.editProfilePage.fieldAlreadySpec")}</option>
            </select>
            :
            <select
              id="securityQuestionsSelector"
              value={value}
              // disabled={disableEdit}
              onChange={(e) => genderSelectorHandler(e.target.value)}
            >
              <option value={0}>{null}</option>
              {
                listOfSecurityQuestions.map((question) => {
                  return (
                    <option key={`${question.id} security question`} value={question.question}>{question.question}</option>
                  )
                })
              }
              <option value={'enter'}>{"Enter your question."}</option>
            </select>
        }
      </div>
    </div>
  )
}