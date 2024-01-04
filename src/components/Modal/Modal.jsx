import Button from "../Button/Button";
import PropTypes from "prop-types";
import {
  ModalContainer,
  ModalTitle,
  ModalCloseButton,
  Dimm,
  ModalBtns,
} from "./Modal.style";
import { AnimatePresence } from "framer-motion";

export default function Modal({
  title,
  visible,
  close,
  action,
  buttonText,
  children,
}) {
  return (
    <>
      <AnimatePresence>
        {visible && (
          <>
            <Dimm
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="dimm"
            ></Dimm>
            <ModalContainer
              initial={{ opacity: 0, transform: "translateX(-50%) translateY(calc(-50% - 10px))" }}
              animate={{ opacity: 1, transform: "translateX(-50%) translateY(calc(-50%))" }}
              exit={{ opacity: 0, transform: "translateX(-50%) translateY(calc(-50% + 10px))" }}
              className="modal"
            >
              <ModalCloseButton onClick={close} className="modal__close">
                <i className="fa-solid fa-xmark"></i>
              </ModalCloseButton>
              <ModalTitle>{title}</ModalTitle>
              {children}
              <ModalBtns>
                <Button onClick={action}>{buttonText || "Dodaj"}</Button>
              </ModalBtns>
            </ModalContainer>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
  children: PropTypes.node,
};
