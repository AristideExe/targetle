import PropTypes from "prop-types";
import Icon from "../Icon/Icon.jsx";
import {ICONS} from "../Icon/IconsEnum.js";
import styles from "./Modal.module.css";

const Button = ({ icon, text, onClick}) => (
    <button className={styles.button} onClick={onClick}>
        <Icon icon={icon} className={styles.icon}/> {text}
    </button>
);

Button.propTypes = {
    icon: PropTypes.oneOf(ICONS).isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default Button;