import styles from '../../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss';

const listOfSecurityQuestions = [
  {id: 1, question: "myAccount.editProfilePage.secQuestionsList.question_1"},
  {id: 2, question: "myAccount.editProfilePage.secQuestionsList.question_2"},
  {id: 3, question: "myAccount.editProfilePage.secQuestionsList.question_3"},
  {id: 4, question: "myAccount.editProfilePage.secQuestionsList.question_4"},
  {id: 5, question: "myAccount.editProfilePage.secQuestionsList.question_5"},
  {id: 6, question: "myAccount.editProfilePage.secQuestionsList.question_6"},
  {id: 7, question: "myAccount.editProfilePage.secQuestionsList.question_7"},
  {id: 8, question: "myAccount.editProfilePage.secQuestionsList.question_8"},
  {id: 9, question: "myAccount.editProfilePage.secQuestionsList.question_9"},
  {id: 10, question: "myAccount.editProfilePage.secQuestionsList.question_10"},
]

// myAccount.editProfilePage.secQuestionsList.question_1

export const SecurityQuestionSelector = ({t, disableEdit, value, genderSelectorHandler}) => (
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
                  <option key={`${question.id} security question`} value={t(question.question)}>{t(question.question)}</option>
                )
              })
            }
            <option value={'enter'}>{t("myAccount.editProfilePage.secQuestionsList.question_11")}</option>
          </select>
      }
    </div>
  </div>
)
