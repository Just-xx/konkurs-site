import { InputWrapper, Label, ToggleCircle, ToggleWrapper } from './Inputs.style'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

export default function Toggle({ labelId, label, state }) {
  
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    state[1](checked)
  }, [checked])

  return (
    <InputWrapper $short>
      <Label $secondary htmlFor={labelId}>{label}</Label>
      <ToggleWrapper tabIndex="1" htmlFor={labelId} $checked={checked} onClick={() => setChecked(!checked)}>
        <ToggleCircle $checked={checked} />
      </ToggleWrapper>
      <input type="checkbox" style={{ display: "none" }} name={labelId} value={checked} />  
    </InputWrapper>
  )
}

Toggle.propTypes = {
  labelId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  state: PropTypes.array.isRequired,
}
