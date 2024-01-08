import { InputWrapper, Label, ToggleCircle, ToggleWrapper } from './Inputs.style'
import PropTypes from 'prop-types'

export default function Toggle({ inactive, labelId, label, state }) {
  
  return (
    <InputWrapper $inactive={inactive} $short>
      <Label $secondary htmlFor={labelId}>{label}</Label>
      <ToggleWrapper tabIndex="1" htmlFor={labelId} $checked={state[0]} onClick={() => state[1](!state[0])}>
        <ToggleCircle $checked={state[0]} />
      </ToggleWrapper>
      <input type="checkbox" style={{ display: "none" }} name={labelId} value={state[0]} />  
    </InputWrapper>
  )
}

Toggle.propTypes = {
  labelId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  state: PropTypes.array.isRequired,
  inactive: PropTypes.bool,
}
