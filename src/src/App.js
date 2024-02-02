import './App.css';
import Launch from './Component/Launch';
import Main from './Component/Main';
import Stat from './Component/Stat';
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  

  return (
    <HashRouter>
      <div className="main">
        <Routes>
          <Route path="/" element={ <Launch />} />
          <Route path="/main" element={ <Main/> }/>
          <Route path="/stat" element={ <Stat/> }/>
          <Route path="*" element={ <div> Not Found </div> }/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;