import Dashboard from "../Dashboard/Dashboard"
import Header from "../Header"
import Menu from "../Menu"

export const Dash = ()=>{
    return(
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
