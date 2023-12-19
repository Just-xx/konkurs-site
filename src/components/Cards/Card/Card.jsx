import './Card.css'
import '../../../styles/form.css'
import PropTypes from 'prop-types';

export default function Card({inactive, children, ...props}) {
  return (
    <section className={`card ${inactive ? "inactive" : ""}`} {...props}>{children}</section>
  )
}

Card.propTypes = {
  inactive: PropTypes.bool,
  children: PropTypes.node
}