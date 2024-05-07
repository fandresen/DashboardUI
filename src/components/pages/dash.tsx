import Dashboard from "../Dashboard/Dashboard"
import Header from "../Header"

export const Dash = ()=>{
    return(
        <>
        <div className="flex">
          <div>
              <Header/>
              <Dashboard/>
          </div>
      </div>
        </>
    )
}
