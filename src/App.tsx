import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Dash } from './components/router/dash';
import Menu from './components/Menu'
import { Profile } from './components/router/profile';
import { Billing } from './components/router/Billing';
import { Tables } from './components/router/Tables';
import { SignIn } from './components/router/SignIn';
import { SignUp } from './components/router/SignUp';
import { NotFound } from './components/router/notFound';
import { Rtl } from './components/router/rtl';
import { MenuContainer } from './components/router/ContainerMenu';

function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element : <Dash/>,
    },
    {
      path: "/profile",
      element : <Profile/>,
    },
    {
      path: "/billing",
      element : <Billing/>
    },
    {
      path: "/tables",
      element : <Tables/>
    },
    {
      path: "/signIn",
      element : <SignIn/>
    },
    {
      path: "/rtl",
      element : <Rtl/>
    },
    {
      path: "/signUp",
      element : <SignUp/>
    },
    {
      path: "/*",
      element : <NotFound/>
    },

  ])

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
  
    </>
        

  )
}

export default App
