import PropTypes from "prop-types";
import { InputWrapper, Label, StyledTextInput } from "./Inputs.style";

export default function TextInput({ label, inactive, labelId, short, state, labelSec, ...props }) {

  return (
    <InputWrapper $short={short} $inactive={inactive}>
      <Label $secondary={labelSec} htmlFor={labelId}>{label}</Label>
      <StyledTextInput
        id={labelId}
        name={labelId}
        type="text"
        onChange={e => state[1](e.target.value)}
        value={state[0]}
        {...props}
      />
    </InputWrapper>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  short: PropTypes.bool,
  inactive: PropTypes.bool,
  state: PropTypes.array.isRequired,
  labelSec: PropTypes.bool,
};