import {Select} from "@chakra-ui/select";

const SelectField = ({
  children, value, name, fontSize = "15px", width = "155px", size = "sm", bg = "#ededed",
  onChange, label, border = "0.88px solid #8a8a8a", ...props
}) => (
  <>
    {label && <label htmlFor={name}>
      {label}
    </label>}
    <Select id={name} size={size} bg={bg} border="border" value={value}
            name={name} onChange={onChange} {...props}
    >
      {children}
    </Select>
  </>
);

export default SelectField;
