import './App.css'
import { List } from './components/Liste'
import { Formulaire } from './components/formulaire'


function App() {

  
  return (
  <>
   <div className="mx-auto w-[80vw] h-[90vh] bg-sky-100 text-center pt-16 mt-8 shadow-lg shadow-black rounded-3xl">
    <Formulaire/>
    <div className='overflow-y-scroll overflow-x-hidden h-[65vh] w-[70vw] mt-14 mx-auto bg-white rounded-xl'>
    <h1 className="text-3xl py-2 font-bold fixed  bg-gray-200 w-[40vw] ml-[14vw]">Task List</h1>
      <List/>
    </div>
   
   </div>

  </>

  )
}

export default App
