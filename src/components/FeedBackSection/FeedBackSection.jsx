import { useState } from "react";
import Button from "../Button/Button";
import StateVsRef from "../StateVsRef/StateVsRef";

function FeedBackSection() {
    const [name, setName] = useState('');
    const [hasError, setHasError] = useState(false);
    const [reason, setReason] = useState('help');

    function handleNameChange(evt) {
        setName(evt.target.value);
        setHasError(evt.target.value.trim().length === 0);
    }

    return <section>
        <h3>Обратная связь.</h3>
        <form>
            <label htmlFor="name">Ваше имя</label>
            <input className="control" type="text" id="name" value={name}  onChange={handleNameChange} placeholder="Ваше имя"
            style={{border: hasError ? '1px solid red' : null }}/>
            <label htmlFor="name">Причина обращения.</label>
            <select className="control" name="reasons" id="reasons" value={reason} onChange={evt => {setReason(evt.target.value)}}>
                <option value="error">Ошибка</option>
                <option value="help">Нужна помощь</option>
                <option value="suggest">Предложение</option>
            </select>
            <Button disabled={hasError} isActive={!hasError} style={{marginBottom: '1rem'}}>Отправить</Button>
            <StateVsRef></StateVsRef>
        </form>
    </section>
}

export default FeedBackSection;