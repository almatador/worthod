// import { createBrowserRouter, Outlet } from "react-router-dom";
// import Homepage from './pages/claint/HomePage/homepage';
// import About from './pages/claint/About/AboutPage';
// import Contact from './pages/claint/Contact/Contactpage';
// import NotFound from './pages/claint/Notfound/Notfoundpage';
// import Services from './pages/claint/servies/serviespage';
// import Navbar from "./Layouts/navbar";
// import Footer from "./Layouts/footer";

// // Layout component that includes the Navbar, Outlet for nested routes, and Footer
// const AppLayoutHomePage = () => (
//   <div className="py-12 px-6 bg-gradient-to-r from-[#120C1C] to-[#2A1845]">
//     {/* الخلفية الثابتة وراء المحتوى */}
//     <Navbar />

//     {/* المحتوى */}
//     <div className="flex-grow z-10 p-5">
//       <Outlet />
//     </div>

//     <Footer />
//   </div>
// );



// export const router = createBrowserRouter([
//   {
//     element: <AppLayoutHomePage />, // Use the layout for main pages
//     path: "/",
//     children: [
//       {
//         index: true, // Default route for "/"
//         element: <Homepage />, // Use the correct component name
//       },
//       {
//         path: "about",
//         element: <About />, // Correct path and component
//       },
//       {
//         path: "contact",
//         element: <Contact />, // Correct path and component
//       },
//       {
//         path: "services",
//         element: <Services />
//       }
//     ],
//   },
//   {
//     path: "*", // Catch-all route for undefined paths
//     element: <NotFound />,
//   },
// ]);
import { createBrowserRouter, Outlet } from "react-router-dom";
import Homepage from './pages/claint/HomePage/homepage';
import About from './pages/claint/About/AboutPage';
import Contact from './pages/claint/Contact/Contactpage';
import NotFound from './pages/claint/Notfound/Notfoundpage';
import Services from './pages/claint/servies/serviespage';
import Navbar from "./Layouts/navbar";
import Footer from "./Layouts/footer";

// Layout component that includes the Navbar, Outlet for nested routes, and Footer
const AppLayoutHomePage = () => (
  <div className=" flex flex-col bg-gradient-to-r from-[#120C1C] to-[#2A1845]">
    {/* Navbar */}
    <Navbar />

    {/* Main Content Area */}
    <div className="  ">
      <Outlet />
    </div>

    {/* Footer */}
    <Footer />
  </div>
);

export const router = createBrowserRouter([
  {
    element: <AppLayoutHomePage />, // Use the layout for main pages
    path: "/",
    children: [
      {
        index: true, // Default route for "/"
        element: <Homepage />, // HomePage component
      },
      {
        path: "about",
        element: <About />, // AboutPage component
      },
      {
        path: "contact",
        element: <Contact />, // ContactPage component
      },
      {
        path: "services",
        element: <Services />, // ServicesPage component
      },
    ],
  },
  {
    path: "*", // Catch-all route for undefined paths
    element: <NotFound />,
  },
]);
