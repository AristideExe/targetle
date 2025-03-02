import PropTypes from "prop-types";
import {ICONS} from "./IconsEnum.js";
import styles from "./Icon.module.css";
import classNames from "classnames";

const Icon = ({ icon, className }) => (
    <img
        className={classNames(styles.icon, className)}
        src={`icons/${icon}`}
        alt={icon}
    />
);

Icon.propTypes = {
    icon: PropTypes.oneOf(ICONS).isRequired,
    className: PropTypes.string,
}

export default Icon;