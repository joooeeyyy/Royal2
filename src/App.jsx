import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Product from "./pages/Products/product";
import About from "./pages/About/about";
import Services from "./pages/Services/Services";
import Partners from "./pages/Partners/partners";
import ContactUs from "./pages/ContactUs/contactus";
import { NavBar, Footer } from "./components";
import { ServiceProvider } from "./contexts/ServicesContext";

const App = () => (
  <Router>
    <ServiceProvider>
      <div className="bg-primary w-full overflow-hidden">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </ServiceProvider>
  </Router>
);

export default App;
