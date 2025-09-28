import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Index";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Properties from "./pages/Properties";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import PropertyDetails from "./pages/PropertyDetails";
import ServiceDetials from "./pages/ServiceDetails";
import BlogDetails from "./pages/BlogDetails";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Toast from "./component/Toast";
import Loading from "./component/Loading";

function App() {
  return (
    <Router>
      <Toast />
      <Loading />
      <Routes>
        {/* All other routes wrapped in Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route
            path="/properties/property-details/:id"
            element={<PropertyDetails />}
          />
          <Route path="/service-details" element={<ServiceDetials />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
