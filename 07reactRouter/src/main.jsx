import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Github, { GithubLoaderInfo } from "./pages/Github.jsx";
import User from "./components/User.jsx";

// const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Layout/>,
//       children: [
//         {
//           path: "",
//           element: <Home/>
//         },
//         {
//           path: "about",
//           element: <About/>
//         },
//         {
//           path: "contact",
//           element: <Contact/>
//         },
//         {
//           path: 'github',
//           element: <Github/>,
//           loader: GithubLoaderInfo
//         }
//       ]
//     }
//   ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={GithubLoaderInfo} path="github" element={<Github />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
