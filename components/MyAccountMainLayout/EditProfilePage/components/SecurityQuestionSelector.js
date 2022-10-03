import Selector from "./Selector";
import SelectContainer from "./SelectContainer";

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

export const SecurityQuestionSelector = ({t, disableEdit, value, onSelect}) => (
  <SelectContainer label={t("myAccount.editProfilePage.secQuestion")} id="securityQuestionsSelector">
    <Selector id="securityQuestionsSelector" value={value} disabled={disableEdit}
              onChange={(e) => onSelect(e.target.value)}>
      {disableEdit
        ? <option value={0}>{t("myAccount.editProfilePage.fieldAlreadySpec")}</option>
        : <>
          <option value={0}>{null}</option>
          {
            listOfSecurityQuestions.map((question) => {
              return (
                <option key={`${question.id} security question`} value={t(question.question)}>
                  {t(question.question)}
                </option>
              )
            })
          }
          <option value={'enter'}>{t("myAccount.editProfilePage.secQuestionsList.question_11")}</option>
        </>
      }
    </Selector>
  </SelectContainer>
)
