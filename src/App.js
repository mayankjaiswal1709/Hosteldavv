
import './App.css';
import About from './components/About';

import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar title="Davv Hostelers" aboutText="About Davv Hostelers" />
      <div className="container my-3">

        <About />
      </div>



    </>
  );
}

export default App;
