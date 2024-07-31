import { useContext } from 'react';
import './App.css';
import { themeContext } from './pages/Context/themeContext';

function App() {

  const { theme } = useContext(themeContext);
  console.log('themes', theme);
  return (
    <div>
      <h2 className='text-xl text-cyan-600 font-bold capitalize'>jai balaya</h2>
    </div>
  )
}

export default App
