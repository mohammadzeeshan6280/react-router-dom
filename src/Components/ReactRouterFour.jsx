// import Navbar from "../Layout/Navbar"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Page/Home";
import About from "../Page/About";
import Services from "../Page/Services";
import Contact from "../Page/Contact";
import AppLayoutOutlet from "../Layout/AppLayoutOutlet";
function ReactRouterFour() {
    const router = createBrowserRouter([   
        {
          path: "/",
        //   element: <AppLayout />,
          element: <AppLayoutOutlet />,
          // element: <Navbar />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
    
            {
              path: "/about",
              element: <About />,
            },
    
            {
              path: "/services",
              element: <Services />,
            },
    
            {
              path: "/contact",
              element: <Contact />,
            },
          ],
        },
      ]);
  return (
    <>
     {/* <Navbar/>  */}
     <RouterProvider router={router} />
    </>
  )
}

export default ReactRouterFour
