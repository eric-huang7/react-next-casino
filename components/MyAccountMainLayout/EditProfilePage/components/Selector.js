import SelectField from "../../../form/SelectField";

const SelectContainer = ({children, ...props}) => (
  <SelectField w="239px" h="43px" mb="14px" {...props}>
    {children}
  </SelectField>
)

export default SelectContainer;
