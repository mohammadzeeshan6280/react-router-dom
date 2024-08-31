import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Page/Home";
import About from "../Page/About";
import Services from "../Page/Services";
import Contact from "../Page/Contact";
// import AppLayout from "../Layout/AppLayout";
import AppLayoutOutlet from "../Layout/AppLayoutOutlet";

function ReactRouterThree() {

  // New React Router Method
  const router = createBrowserRouter([
    // {
    //     path : "/",
    //     element : <AppLayout/>
    // },

    {
      path: "/",
    //   element: <AppLayout />,
      element: <AppLayoutOutlet />,
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
      <RouterProvider router={router} />
    </>
  );
}

export default ReactRouterThree;
