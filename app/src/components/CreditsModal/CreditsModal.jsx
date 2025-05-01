import PropTypes from "prop-types";
import {Trans, useTranslation} from "react-i18next";
import {ACCEPT} from "../Icon/IconsEnum.js";
import Modal from "../Modal/Modal.jsx";
import Button from "../Modal/Button.jsx";
import styles from "./CreditsModal.module.css";

const CreditsModal = ({ isVisible = false, closeFunc }) => {
    const { t } = useTranslation();

    return (
        <Modal isVisible={isVisible}>
            <div className={styles.creditsContainer}>
                <h1>À Propos</h1>
                <div>
                   <p>{t("layout.credits.mainRule")}</p>
                </div>
                <div>
                    <p>{t("layout.credits.legalProperty")}</p>
                    <p>{t("layout.credits.cookies")}</p>
                </div>
                {/* eslint-disable-next-line react/jsx-key */}
                <p><Trans i18nKey="layout.credits.inspiredBy" components={[<a href="http://loldle.net" target="_blank"/> ]}/></p>
                <div>
                    {/* eslint-disable-next-line react/jsx-key */}
                    <p><Trans i18nKey="layout.credits.developpedBy" components={[<a href="http://aristideproriol.com" target="_blank"/> ]}/> &lt;3</p>
                </div>
            </div>
            <Button onClick={closeFunc} icon={ACCEPT} text={t("home.creditsModal.closeModal")}/>
        </Modal>
    )
}

CreditsModal.propTypes = {
    isVisible: PropTypes.bool,
    closeFunc: PropTypes.func,
}

export default CreditsModal;