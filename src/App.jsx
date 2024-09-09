import Header from "./components/Header/Header";
import IntroSection from "./components/IntroSection/IntroSection";
import TabSection from "./components/TabSection/TabSection";
import TeachingSection from "./components/TeachingSection/TeachingSection";
import Difference from "./components/Difference/Difference";
import FeedBackSection from "./components/FeedBackSection/FeedBackSection";
import EffectSection from "./components/EffectSection/EffectSection";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState('effect');

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabSection active={tab} onChange={(current) => {setTab(current)}} />
        {tab === 'main' && <>
          <TeachingSection />
          <Difference />
        </>}
        {tab === 'feedback' && <FeedBackSection /> }
        {tab === 'effect' && <EffectSection /> }
      </main>
    </>
  )
}

export default App
