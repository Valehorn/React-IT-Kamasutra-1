import { useState, useRef } from 'react';
import { styled } from 'styled-components';

const StateVsRefInput = styled.input`
border: 1px solid blue;
border-radius: 5px;
padding: 0.5rem 1rem;
width: 100%;
margin-bottom: 1rem;
`

function StateVsRef() {
    const input = useRef();
    const [show, setShow] = useState(false);

    function handleKeyDown(evt) {
        if (evt.key === 'Enter') {
            setShow(true);
        }
    }

    return <div>
        <label htmlFor="state">
            <h3>Input Value: {show && input.current.value}</h3>
        </label>
        <StateVsRefInput ref={input} type="text"  id="state" onKeyDown={handleKeyDown} />
    </div>
}

export default StateVsRef;