import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Layout} from "./Components/Layout";
import {ErrorPage} from './Pages/Error';
import {About} from "./Pages/About";
import {Experience} from "./Pages/Experience";
import {Projects} from "./Pages/Projects";
import {Contact} from "./Pages/Contact";
import './App.css';
import './fonts/Aldrich-Regular.woff';
import {Home} from "./Pages/Home";
import {Footer} from "./Components/Footer";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Layout/>,
//         errorElement: <ErrorPage/>,
//         children: [
//             {
//                 path: "about",
//                 element: <About />,
//             },
//             {
//                 path: "experience",
//                 element: <Experience />,
//             },
//             {
//                 path: "projects",
//                 element: <Projects />,
//             },
//             {
//                 path: "contact",
//                 element: <Contact />,
//             },
//         ]
//     },
//     {
//         path: "/blog",
//         // element: <Blog/>,
//     },
// ]);

const App = () => {
  return (
      // <RouterProvider router={router} />
      <>
        <Home/>
        <About/>
        <Footer/>
      </>
  );
}

export default App;
