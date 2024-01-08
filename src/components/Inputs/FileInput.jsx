import { InputWrapper, Label, FileInputEl, FileInputLabel } from './Inputs.style'
import PropTypes from 'prop-types'

export default function FileInput({ label, inactive, labelId, short, action, labelSec, ...props }) {
  
  return (
    <InputWrapper $inactive={inactive} $short={short}>
      <Label $secondary={labelSec} htmlFor={labelId}>{label}</Label>
      <FileInputLabel htmlFor={labelId}>Dodaj plik</FileInputLabel>
      <FileInputEl onChange={action} type="file" id={labelId} {...props} />
    </InputWrapper>
  )
}

FileInput.propTypes = {
  label: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  short: PropTypes.bool,
  inactive: PropTypes.bool,
  action: PropTypes.func,
  labelSec: PropTypes.bool,
}