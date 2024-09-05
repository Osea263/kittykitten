import './App.css';
import MintPage from './components/mintPage';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Accordion from './components/Accordion';
import Gallary from './components/Gallary';



function App() {
   

    return(
      <div className='main-app bg-gray-900'>
        
        <MintPage/>
        <About/>
        <Roadmap/>
        <Gallary/>
        <Accordion/>

      </div>
    )
 }

export default App;