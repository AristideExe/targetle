import AsyncSelect from "react-select/async";
import "./TargetSelector.css";

const TargetSelector = () => {
    const options = [
        { id: 1, name: 'Kalvin Ritter', image: "/targets/Kalvin-Ritter.webp" },
        { id: 2, name: 'Jasper Knight', image: "/targets/Jasper-Knight.webp" },
        { id: 3, name: 'Viktor Novikov', image: "/targets/Viktor-Novikov.webp" },
        { id: 4, name: 'Dalia Margolis', image: "/targets/Dalia-Margolis.webp" },
        { id: 5, name: 'Silvio Caruso', image: "/targets/Silvio-Caruso.webp" },
        { id: 6, name: 'Francesca De Santis', image: "/targets/Francesca-De-Santis.webp" },
    ];

    const loadOptions = (inputValue, callback) => {
        setTimeout(() => {
            callback(options.filter((option => 
                option.name.toLowerCase().includes(inputValue)))),
            1000
        });
    }

    return (
        <AsyncSelect
            cacheOptions
            loadOptions={loadOptions}
            formatOptionLabel={option => (
                <div className="option">
                    <img src={option.image} />
                    <span>{option.name}</span>
                </div>
            )}
            onChange={value => { console.log(value); }}
        />
    );
};

TargetSelector.propTypes = {};

export default TargetSelector;