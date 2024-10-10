import './App.css'
import { Footer } from './components/shared/Footer';
import { Navbar } from './components/shared/Nav';

function App() {

  return (
    <>
    <div>
      <Navbar/>
      <div className='min-h-[50svh]'></div>
      <Footer/>
    </div>
    </>
  )
}

export default App;