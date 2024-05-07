import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import { Dash } from './components/pages/dash';
import Menu from './components/Menu'
import { Profile } from './components/pages/profile';
import { Billing } from './components/pages/Billing';
import { Tables } from './components/pages/Tables';
import { SignIn } from './components/pages/SignIn';
import { SignUp } from './components/pages/SignUp';
import { NotFound } from './components/pages/notFound';
import { Rtl } from './components/pages/rtl';

function App() {

  return (
    <>
    <div>
     <BrowserRouter>
     <Menu/>
        <Routes>
            <Route index element={<Dash/>}/>
            <Route path='/' element={<Dash/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route  path="/billing" element={<Billing/>}/>
            <Route  path="/tables" element={<Tables/>}/>
            <Route  path="/signIn" element={<SignIn/>}/>
            <Route  path="/rtl" element={<Rtl/>}/>
            <Route  path="/signUp" element={<SignUp/>}/>
            <Route  path="/signIn" element={<SignIn/>}/>
            <Route  path="/*" element={<NotFound/>}/>
        </Routes>
     </BrowserRouter>
 
    </div>
     
  
    </>
        

  )
}

export default App
