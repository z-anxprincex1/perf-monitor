import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LeftPane from './components/LeftPane';
import PerfOverview from './components/PerfOverview';
import Page1 from './components/Page1';
import Page2 from './components/UserAccSettings';

function App() {
  return (
    <div className="App">
      <LeftPane />
      <BrowserRouter>
        <Routes>
          <Route index element={<PerfOverview/>}/>
          <Route path="p1" element={<Page1/>}/>
          <Route path="uac-settings" element={<Page2/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
