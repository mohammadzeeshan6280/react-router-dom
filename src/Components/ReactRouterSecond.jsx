import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "../Page/Home";
import About from "../Page/About";
import Services from "../Page/Services";
import Contact from "../Page/Contact";

function ReactRouterSecond() {
  const router = createBrowserRouter(
    createRoutesFromElements(
        // Old React Router Method
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default ReactRouterSecond;
