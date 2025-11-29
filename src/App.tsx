import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import Onboarding1 from "./components/Onboarding1";
import Onboarding2 from "./components/Onboarding2";
import Onboarding3 from "./components/Onboarding3";
import HomePage from "./components/HomePage";
import LaptopsPage from "./components/LaptopsPage";
import ProductPage from "./components/ProductPage";
import MessagePage from "./components/MessagePage";
import MessageListPage from "./components/MessageListPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
        {/* Mobile Device Frame */}
        <div className="relative">
          {/* Device Mockup Container */}
          <div className="bg-black rounded-[40px] p-3 shadow-2xl">
            {/* Screen Container */}
            <div className="bg-white rounded-[28px] overflow-hidden" style={{ width: '440px', height: '956px' }}>
              {/* Routes */}
              <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/onboarding-1" element={<Onboarding1 />} />
                <Route path="/onboarding-2" element={<Onboarding2 />} />
                <Route path="/onboarding-3" element={<Onboarding3 />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/laptops" element={<LaptopsPage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/message" element={<MessagePage />} />
                <Route path="/messages" element={<MessageListPage />} />
              </Routes>
            </div>
          </div>
          
          {/* Optional: Device notch/camera */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>
        </div>
      </div>
    </BrowserRouter>
  );
}
