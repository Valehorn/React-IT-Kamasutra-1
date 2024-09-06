import { useState } from 'react';
import logo from '/logo-name.svg';

function Header() {
    const [now, setNow] = useState(new Date());
    setInterval(() => setNow(new Date()), 1000)
    return <header>
        <img src={logo} alt="Логотип"  width={200} height={80}/>
        <span>Время: {now.toLocaleTimeString()}</span>
    </header>
}

export default Header;