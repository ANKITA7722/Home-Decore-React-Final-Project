import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainHeader from "./components/MainHeader";

const Layout=()=>{
    return(
        <>
          <Header/>
         <MainHeader/>
           <Outlet/>
         <Footer/>
        </>
    )
}

export default Layout;