import Button from "../Button/Button";
import { differences } from "../../data";
import { useState } from "react";

function TabSection() {
    const [contentType, setContentType] = useState(); // useState возвращает массив - 1ое значение(contentType), 2ое функция, меняющая состояние.
    const handleClick = (type) => {
        setContentType(type);
    }
    return <section>
        <h3>Отличия</h3>
        <Button isActive={contentType === 'way'} onClick={() => { handleClick('way') }}>Подход</Button>
        <Button isActive={contentType === 'easy'} onClick={() => { handleClick('easy') }}>Доступность</Button>
        <Button isActive={contentType === 'program'} onClick={() => { handleClick('program') }}>Концентрация</Button>
        {/* {contentType ? <p>{differences[contentType]}</p> : <p> Нажми на кнопку</p>} */}
        {!contentType && <p> Нажми на кнопку</p>}
        {contentType && <p>{differences[contentType]}</p>}
    </section>
}

export default TabSection;