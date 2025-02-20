import PropTypes from "prop-types";
import AsyncSelect from "react-select/async";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import {targetSelectStyles} from "./TargetSelectStyles.js";

export const valuesToFilter = (values) => ({
    startWith: values.startWith,
    notIn: values.notIn
})

const TargetSelect = ({ loadOptions, onChange }) => {
    const { t } = useTranslation();
    const [ selectValue, setSelectValue ] = useState(null);

    const handleChange = (value) => {
        setSelectValue(null);
        onChange(value)
    }

    return (
        <>
            <AsyncSelect
                loadOptions={(inputValue, callback) => loadOptions(inputValue, callback)}
                noOptionsMessage={({inputValue}) => 
                    inputValue !== "" ? (<p>{t("home.targetSelector.noCharacterFound")}</p>) : null
                }
                placeholder={t("home.targetSelector.startTyping")}
                formatOptionLabel={option => {
                    return (
                        <div className="option">
                            <img src={`targets/${option.image_path}`} />
                            <span>{option.name}</span>
                        </div>
                    )
                }}
                value={selectValue}
                styles={targetSelectStyles}
                onChange={handleChange}
            />
        </>
    );
};

TargetSelect.propTypes = {
    loadOptions: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default TargetSelect;