import { useState } from 'react';
 
import ListEmployeeComponent from './components/ListEmployeeComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderConponent } from './components/HeaderConponent';
 
import EmployeeComponent from './components/EmployeeComponent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='bg-slate-800 ' >
      <HeaderConponent className="bg-slate-800"/>
      <Routes>
        <Route path="/" element={<ListEmployeeComponent />} />

        <Route path="/add" element={<EmployeeComponent />} />
        <Route path="/edit/:id" element={<EmployeeComponent />} />
      </Routes>
    </div>


  );
}

export default App;
