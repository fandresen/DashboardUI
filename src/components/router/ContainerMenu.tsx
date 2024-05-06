import Menu from "../Menu";

export const MenuContainer = ({ children }) =>{
    return(
        <>
            <div className="flex flex-col">
                <Menu/>
                <div>
                    {children}
                </div>
            </div>
          
           
        </>
    )
}