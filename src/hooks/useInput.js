import { useState } from "react";

function useInput(defaultValue = '') {
    const [value, setValue] = useState(defaultValue);

    return {
        value,
        onChange: (evt) => {setValue(evt.target.value)},
    }
};

export default useInput;