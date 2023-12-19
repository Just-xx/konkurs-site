import './Button.css';
import PropTypes from 'prop-types';

export default function Button({ children, secondary, fileInput, allWidth, center, inactive, ...props}) {


  return (
    <>
      { fileInput ? 
          <>
            <input type="file" name="file" id="file-uload" className={`file-upload ${secondary ? 'btn-secondary' : ''}`}  {...props}/>
            <label className={`btn ${inactive ? 'btn--inactive' : ''}`} htmlFor="file-uload">{children}</label>
          </> :
          <button className={`btn  ${inactive ? 'btn--inactive' : ''} ${secondary ? 'btn-secondary' : ''} ${allWidth ? 'all-width' : ''} ${center ? 'center' : ''}`} {...props}>{children}</button>
      }
    </>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  secondary: PropTypes.bool,
  fileInput: PropTypes.bool,
  allWidth: PropTypes.bool,
  center: PropTypes.bool,
  inactive: PropTypes.bool,
}