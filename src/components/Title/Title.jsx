import PropTypes from 'prop-types'
import { H1 } from './Title.style'

export default function Title({ children, center, sm }) {
  return (
    <H1 $center={center} $sm={sm} as={sm ? 'h2' : undefined}>
      {children}
    </H1>
  )
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
  sm: PropTypes.bool,
}
