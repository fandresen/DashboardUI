import './App.css'
import Menu from './components/Menu'
import Header from './components/Header';
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  
  return (
  <>
    
    <div className='flex'>
          <div className='flex'>
              <Menu/>
          </div>

          <div>
              <Dashboard/>
          </div>
    </div>
    
    
    
  </>
  )
}

export default App
