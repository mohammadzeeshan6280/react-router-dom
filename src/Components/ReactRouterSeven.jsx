import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Page/Home";
import About from "../Page/About";
import Services from "../Page/Services";
import Contact from "../Page/Contact";
import AppLayoutOutlet from "../Layout/AppLayoutOutlet";
// import ErrorPage from "../Page/ErrorPage";
import NotFoundPage from "../Page/NotFoundPage";
import  { getMoviesData } from "../Api/GetApiData";
import Movies from "../Page/Movies";

export default function ReactRouterSeven() {
    const router = createBrowserRouter([   
        {
          path: "/",
          element: <AppLayoutOutlet />,
          // errorElement : <ErrorPage/>,
          errorElement : <NotFoundPage/>,
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
            {
              path: "/movies",
              element: <Movies />,
              loader : getMoviesData,
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
