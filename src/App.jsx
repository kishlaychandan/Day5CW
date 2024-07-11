import { useState } from 'react'
import './App.css'
import Input from './components/Input/Input'
import Output from './components/Output/Output';

function App() {
  const [timeTable, setTimeTable] = useState([]);

  function setRoutine(routine) {
    setTimeTable([...timeTable, routine]);
  }

  return (
    <>
      <div className="main">
        <Input setRoutine={setRoutine} />
        {timeTable.map((routine, index) => (
          <Output key={index} hour={routine.hour} subject={routine.subject} />
        ))}
      </div>
    </>
  );
}

export default App;
