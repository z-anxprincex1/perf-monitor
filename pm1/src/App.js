import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LeftPane from './components/LeftPane';
import PerfOverview from './components/PerfOverview';
import ChartT1 from './components/ChartT1';
import UserAccSettings from './components/UserAccSettings';
import { TestData } from './Data/Data';
import { useState } from 'react';
import { useEffect } from 'react';
// import ExpoData from './papaparse_t1/index';

function App() {

  const [testData, setTestData] = useState({
    labels: TestData.map((data) => data.year),
    datasets: [{
      label: "user gained",
      data: TestData.map((data) => data.value)
    }]
  })

  // const [testData, setTestData] = useState({
  //   label: ExpoData.map((data) => data.timestamp),
  //   datasets: [{
  //     label: "CPU Usage",
  //     data: ExpoData.map((data) => data.cpu_usage)
  //   }]
  // })

  return (
    <div className="App">
      <LeftPane />
      <BrowserRouter>
        <Routes>
          <Route index element={<PerfOverview/>}/>
          <Route path="chartt1" element={<ChartT1 chartData={testData}/>}/>
          <Route path="uac-settings" element={<UserAccSettings/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
