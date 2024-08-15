import {useState} from 'react';
import './App.css';

export default function App() {
  const [appData, setAppData] = useState('React Marathon');

  const handleLowerCase = () => {
    if(appData !== appData.toLowerCase()) {
      return setAppData(appData.toLowerCase());
    } else {
      setAppData(prevData => {
        return prevData
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      })
    }
  }
  return <div onClick={handleLowerCase}> {appData} </div>;
}

