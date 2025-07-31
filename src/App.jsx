// // App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import Contact from "./pages/Contact";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import About from "./pages/About";
// import AdminLogin from "./admin/Login";
// import ProtectedRoute from "./admin/ProtectedRoute";
// import AdminDashboard from "./admin/Dashboard";
// import Blogs from "./pages/Blogs";
// import NotFound from "./pages/NotFound";

// function App() {
//   return (
//     <Router>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<NotFound />} />

//         <Route path="/admin/login" element={<AdminLogin />} />
//         <Route
//           path="/admin/dashboard"
//           element={
//             <ProtectedRoute>
//               <AdminDashboard />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import AdminLogin from "./admin/Login";
import ProtectedRoute from "./admin/ProtectedRoute";
import AdminDashboard from "./admin/Dashboard";
import Blogs from "./pages/Blogs";
import NotFound from "./pages/NotFound";

function AppWrapper() {
  const location = useLocation();

  // Hide header/footer for admin routes
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
