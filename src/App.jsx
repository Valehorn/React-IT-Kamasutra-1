import { useState } from "react";
import Header from "./components/Header/Header";
import WayToTeach from "./components/WayToTeach/WayToTeach";
import Button from './components/Button/Button';
import { ways, differences } from "./data";

function App() {
  const [contentType, setContentType] = useState(); // useState возвращает массив - 1ое значение(contentType), 2ое функция, меняющая состояние.
  const handleClick = (type) => {
    setContentType(type);
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h1>Подход к обучению</h1>
          <ul>
            {ways.map((way) => {
              return <WayToTeach key={way.description} {...way}/>
            })}
            {/* <WayToTeach  {...ways[0]} />
            <WayToTeach title={ways[1].title} description={ways[1].description} />
            <WayToTeach title={ways[2].title} description={ways[2].description} />
            <WayToTeach title={ways[3].title} description={ways[3].description} /> */}
          </ul>
        </section>
        <section>
          <h3>Отличия</h3>
          <Button isActive={contentType === 'way'} onClick={() => { handleClick('way') }}>Подход</Button>
          <Button isActive={contentType === 'easy'} onClick={() => { handleClick('easy') }}>Доступность</Button>
          <Button isActive={contentType === 'program'} onClick={() => { handleClick('program') }}>Концентрация</Button>
          {/* {contentType ? <p>{differences[contentType]}</p> : <p> Нажми на кнопку</p>} */}
          {!contentType && <p> Нажми на кнопку</p>}
          {contentType && <p>{differences[contentType]}</p>}
        </section>
      </main>
    </div>
  )
}

export default App
