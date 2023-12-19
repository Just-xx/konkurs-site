import "./Modal.css";
import Title from "../Title/Title";
import Button from "../Button/Button";
import PropTypes from "prop-types";

export default function Modal({ title, text, visible, close, action }) {
  
  
  
  return (
    <>
      {visible && (
        <>
          <div className="dimm"></div>
          <div className="modal">
            <button onClick={close} className="modal__close">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <Title center>{title}</Title>
            <div className="modal__text">{text}</div>
            <div className="modal__buttons">
              <Button
                onClick={() => {
                  action();
                  close();
                }}
              >
                Kontynuuj
              </Button>
              <Button onClick={close} secondary>
                Anuluj
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
}