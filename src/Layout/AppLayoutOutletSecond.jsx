import Footer from "../Layout/Footer"
import { Outlet, useNavigation } from "react-router-dom"
// import Navbar from "./Navbar"
import NavbarSecond from "./NavbarSecond"
import Loader from "./Loader";

export default function AppLayoutOutletSecond() {

    const navigation = useNavigation();
    console.log(navigation)

    if(navigation.state === "loading") return <Loader/>

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
