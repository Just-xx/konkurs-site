import PropTypes from "prop-types";
import { InputWrapper, Label, StyledTextInput } from "./Inputs.style";

export default function TextInput({ label, labelId, ...props }) {

  return (
    <InputWrapper>
      <Label htmlFor={labelId}>{label}</Label>
      <StyledTextInput
        id={labelId}
        name={labelId}
        type="text"
        {...props}
      />
    </InputWrapper>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
};