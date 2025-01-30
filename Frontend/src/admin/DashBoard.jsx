import {Link, Outlet} from "react-router-dom";
const DashBoard=()=>{
    return(
        <>
        <div style={{backgroundColor:"lightblue", padding:"20px"}}>
        <h1>Admin DashBoard</h1> 
        </div>
            
           <div id="adminDash">
             <div id="leftmenu"> 
               <Link to="insertpro"> Insert Product </Link>
             </div>
             <div id="rightdata">
                  <Outlet/>
             </div>
            </div>      
        </>
    )
}

export default DashBoard;