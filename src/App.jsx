import './App.css'
import Menu from './components/Menu'
import Header from './components/Header';
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  return (
  <>
      <div className="flex">
              <Menu/>
          <div>
              <Header/>
              <Dashboard/>
          </div>
      </div> 
  </>
  )
}

export default App
