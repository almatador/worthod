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
import Improve from './pages/claint/improve/improvepage';
import Marketing from './pages/claint/marketing/marketingpage';
import Websites from './pages/claint/websites/websitespage';
import Navbar from "./Layouts/navbar";
import Footer from "./Layouts/footer";
import SidebarDashboard from "./Layouts/SidebarMenudashbord";
import NavbarDashboard from "./Layouts/NavbarDashboard";
import DashboardHome from "./pages/dashbord/homedashboard/DashboardHome"
import MessageList from "./pages/dashbord/concetpage/conectpage"
import ProjectPage from "./pages/dashbord/projectpage/projectpage"
import UserTrackingPage from "./pages/dashbord/trakinkpage/trakingpage"
import PlansPage from "./pages/dashbord/planpage/planpage"
// Import the specific service pages
// import DesigningWebsiteStore from './pages/claint/servies/DesigningWebsiteStore';
// import WebsiteDesign from './pages/claint/servies/WebsiteDesign';
// import ApplicationDesign from './pages/claint/servies/ApplicationDesign';
// import WebHosting from './pages/claint/servies/WebHosting';
// import SEOOptimization from './pages/claint/servies/SEOOptimization';
// import DashboardDesign from './pages/claint/servies/DashboardDesign';
// import SocialMediaMarketing from './pages/claint/servies/SocialMediaMarketing';
// import CybersecurityPage from './pages/claint/servies/CybersecurityPage';

const AppLayoutHomePage = () => (
  <div className="flex flex-col bg-gradient-to-r from-[#120C1C] to-[#2A1845]">
    {/* Navbar */}
    <Navbar />

    {/* Main Content Area */}
    <div>
      <Outlet />
    </div>

    {/* Footer */}
    <Footer />
  </div>
);


const DashboardLayout = () => (
  <div className="flex flex-row">
    {/* Sidebar */}
    <SidebarDashboard />

    {/* Main Content Area */}
    <div className="flex flex-col w-full bg-gradient-to-r from-[#120C1C] to-[#2A1845]">
      {/* Navbar */}
      <NavbarDashboard />

      {/* Main Content for Dashboard */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  </div>
);
export const router = createBrowserRouter([
  {
    element: <AppLayoutHomePage />,
    path: "/",
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "Websites",
        element: <Websites />,
      },
      {
        path: "marketing",
        element: <Marketing />,
      },
      {
        path: "Improve",
        element: <Improve />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      },
      // Define new routes for each service
      // {
      //   path: "designing-website-store",
      //   element: <DesigningWebsiteStore />,
      // },
      // // {
      // //   path: "website-design",
      // //   element: <WebsiteDesign />,
      // // },
      // // {
      // //   path: "application-design",
      // //   element: <ApplicationDesign />,
      // // },
      // {
      //   path: "web-hosting",
      //   element: <WebHosting />,
      // },
      // {
      //   path: "seo-optimization",
      //   element: <SEOOptimization />,
      // },
      // {
      //   path: "dashboard-design",
      //   element: <DashboardDesign />,
      // },
      // {
      //   path: "social-media-marketing",
      //   element: <SocialMediaMarketing />,
      // },
      // {
      //   path: "cybersecurity",
      //   element: <CybersecurityPage />,
      // },
    ],
  },
  {
    element: <DashboardLayout />,
    path: "/dashboard",
    children: [
      {
        index: true,
        element: <DashboardHome />, // الصفحة الرئيسية للـ Dashboard
      },
      {
        path: "/dashboard/messages",
        element: <MessageList />, // صفحة Admin
      },
      // {
      //   path: "settings",
      //   element: <SettingsPage />, // صفحة الإعدادات
      // },
      
      {
        path: "/dashboard/projectdashboard",
        element: <ProjectPage />, // صفحة الإعدادات
      },
      {
        path: "/dashboard/users",
        element: <UserTrackingPage />, // صفحة الإعدادات
      },
      {
        path: "/dashboard/plandashboard",
        element: <PlansPage />, // صفحة الإعدادات
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
