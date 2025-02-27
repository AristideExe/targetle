import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import ReactModal from 'react-modal';
import "./WinModal.css";
import {Link} from "react-router-dom";

const WinModal = ({ isVisible = false, closeFunc, targetName, targetImage }) => {
    const { t } = useTranslation();

    return (
        <ReactModal
            isOpen={isVisible}
            shouldFocusAfterRender={false}
            className="modal"
            overlayClassName="overlayModal"
        >
            {targetName && targetImage && (
                <div className="text">
                    <div className="resultsContainer">
                        <img src={`targets/${targetImage}`} />
                        <div className="results">
                            <span className="playstyle">ASSASSIN SILENCIEUX</span>
                            <p>Félicitation vous avez gagné ! Essayez nos<br/> autres modes de jeu (en cours de développement)</p>
                        </div>
                    </div>
                </div>
            )}
            <Link to={{}} onClick={closeFunc} className="button">VALIDER</Link>
        </ReactModal>
    )
}

WinModal.propTypes = {
    isVisible: PropTypes.bool,
    closeFunc: PropTypes.func,
    targetName: PropTypes.string,
    targetImage: PropTypes.string,
}

export default WinModal;