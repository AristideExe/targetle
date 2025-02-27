import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import ReactModal from 'react-modal';
import {Link} from "react-router-dom";
import styles from "./WinModal.module.css";

const WinModal = ({ isVisible = false, closeFunc, targetName, targetImage }) => {
    const { t } = useTranslation();

    return (
        <ReactModal
            isOpen={isVisible}
            shouldFocusAfterRender={false}
            className={styles.modal}
            overlayClassName={styles.overlayModal}
        >
            {targetName && targetImage && (
                <div className={styles.text}>
                    <div className={styles.resultsContainer}>
                        <img src={`targets/${targetImage}`} />
                        <div className={styles.results}>
                            <span className={styles.playstyle}>ASSASSIN SILENCIEUX</span>
                            <p>Félicitation vous avez gagné ! Essayez nos<br/> autres modes de jeu (en cours de développement)</p>
                        </div>
                    </div>
                </div>
            )}
            <Link to={{}} onClick={closeFunc} className={styles.button}>VALIDER</Link>
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