import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import ReactModal from 'react-modal';
import {winModalStyles} from "./WinModalStyles.js";
import "./WinModal.css";
import {Link} from "react-router-dom";

const WinModal = ({ isVisible = false, closeFunc }) => {
    const { t } = useTranslation();

    return (
        <ReactModal
            isOpen={isVisible}
            defaultStyles={winModalStyles}
        >
            <div className="text">
                <p>Sed aliquet bibendum amet vestibulum tortor sit sit elit. at. mauris vestibulum vel nisi tellus Suspendisse dignissim non Sed tristique. fringilla. vel dolor, dolor, lacinia tristique. Lorem Maecenas sit tristique. luctus. amet, quis Suspendisse amet, et fringilla. tristique. risus sollicitudin consectetur venenatis consectetur fermentum </p>
            </div>
            <Link to={{}} onClick={closeFunc} className="button">VALIDER</Link>
        </ReactModal>
    )
}

WinModal.propTypes = {
    isVisible: PropTypes.bool,
    closeFunc: PropTypes.func,
}

export default WinModal;