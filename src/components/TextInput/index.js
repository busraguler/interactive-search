import TextField from "@mui/material/TextField";

const textStyle = { color: "#9d9ba6", fontSize: "14px" };
const inputProps = { style: textStyle };

const TextInput = ({
  variant = "standard",
  label,
  name,
  onChange,
  value,
  ...rest
}) => {
  return (
    <TextField
      name={name}
      onChange={(e) => {
        onChange && onChange(e.target.value);
      }}
      inputProps={inputProps}
      label={label}
      variant={variant}
      {...rest}
      sx={{
        width: "65%",
        "& label": textStyle,
        "& .MuiFormLabel-root.Mui-focused": textStyle,
        "& .MuiInput-underline": {
          borderBottom: "1px solid #9d9ba6",
        },
        "& .MuiInput-underline:after": {
          borderBottom: "1px solid #9d9ba6",
        },
      }}
    />
  );
};

export default TextInput;
