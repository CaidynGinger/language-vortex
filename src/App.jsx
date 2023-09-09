import './App.scss';
import { HowToUse } from './components/HowToUse/HowToUse';

import { MainNav } from './components/MainNav';
import { TranslationComp } from './components/TranslationComp/TranslationComp';

function App() {
  return (
    <div className="App">
      <MainNav />
      <section className='app-children'>
        <HowToUse/>
        <TranslationComp/>
      </section>
    </div>
  );
}

export default App;
