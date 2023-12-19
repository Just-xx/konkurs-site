import './Title.css'
import PropTypes from 'prop-types'

export default function Title({ children, center }) {
  return (
    <h1 className={`title ${center ? "title--center" : ""}`}>
      {children}
    </h1>
  )
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
}
