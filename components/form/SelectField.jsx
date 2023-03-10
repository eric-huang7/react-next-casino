import {Select} from "@chakra-ui/select";

const SelectField = ({
  children, value, name, fontSize = "15px", width = "200px", size = "sm", bg = "#ededed",
  onChange, label, border = "1px solid #8a8a8a !important", ...props
}) => (
  <>
    {label && <label htmlFor={name}>
      {label}
    </label>}
    <Select id={name} size={size} bg={bg} border={border} borderRadius="5px" value={value}
        name={name} onChange={(e) => onChange(e.target.value)} width={width} {...props}
    >
      {children}
    </Select>
  </>
);

export default SelectField;
