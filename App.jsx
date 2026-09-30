import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Crops from "./pages/Crops";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Garden from "./pages/Garden";
import Tasks from "./pages/Tasks";
import Harvest from "./pages/Harvest";
import CropDetails from "./pages/CropDetails";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";


function App() {
  return (
    <BrowserRouter>
      <div className="aquvana-app">

        <Navbar />

        <main className="aquvana-main">
          <Routes>

            {/* Public pages */}
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/crops" element={<Crops />} />

            <Route path="/crops/:cropId" element={<CropDetails />} />

            <Route path="/login" element={<Login />} />

            <Route path="/forgot-password" element={<ForgotPassword />} />

            <Route path="/reset-password/:token" element={<ResetPassword />} />

            <Route path="/register" element={<Register />} />


            {/* Application pages */}
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/garden" element={<Garden />} />

            <Route path="/tasks" element={<Tasks />} />

            <Route path="/harvest" element={<Harvest />} />


            {/* Fallback */}
            <Route
              path="*"
              element={
                <div className="aquvana-page">
                  <div className="aquvana-empty-state">

                    <h2>Page Not Found</h2>

                    <p>
                      The AQUVANA page you are looking for
                      does not exist.
                    </p>

                  </div>
                </div>
              }
            />

          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;