import ReactModal from "react-modal";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

const Modal = ({ isVisible = false, children }) => (
    <ReactModal
        isOpen={isVisible}
        shouldFocusAfterRender={false}
        overlayClassName={styles.overlayModal}
        className={styles.modal}
        shouldCloseOnEsc
    >
        {children}
    </ReactModal>
);

Modal.propTypes = {
    isVisible: PropTypes.bool,
    children: PropTypes.node
}

export default Modal;