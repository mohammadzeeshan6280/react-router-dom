import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../Page/Home"
import About from "../Page/About"
import Services from "../Page/Services"
import Contact from "../Page/Contact"


export default function ReactRouterFirst() {
  // New React Router Method
    const router = createBrowserRouter([
        {
        path : "/",
        element : <Home/>
        },

        {
        path : "/about",
        element : <About/>
        },

        {
        path : "/services",
        element : <Services/>
        },

        {
        path : "/contact",
        element : <Contact/>
        },

])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
