// import Header from "../Layout/Header"
import Footer from "../Layout/Footer"
import { Outlet } from "react-router-dom"
// import Navbar from "./Navbar"
import NavbarSecond from "./NavbarSecond"

function AppLayoutOutlet() {
  return (
    <>
     {/* <Header/> */}
     {/* <Navbar/> */}
     <NavbarSecond/>
     <Outlet/>
     <Footer/> 
    </>
  )
}

export default AppLayoutOutlet
