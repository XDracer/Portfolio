import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";

import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Works from "./pages/works/Works";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";

import SampleProject from "./pages/sampleproject/SampleProject";
import SampleProjectTwo from "./pages/sampleproject2/SampleProject2";
import SampleProjectThree from "./pages/sampleproject3/SampleProject3";
import SampleProjectFour from "./pages/sampleproject4/SampleProject4";

import SampleBlog from "./pages/sampleblog/SampleBlog";
import SampleBlogTwo from "./pages/sampleblog2/SampleBlog";
import SampleBlogThree from "./pages/sampleblog3/SampleBlog";
import SampleBlogFour from "./pages/sampleblog4/SampleBlog";
import SampleBlogFive from "./pages/sampleblog5/SampleBlog";
import SampleBlogSix from "./pages/sampleblog6/SampleBlog";
import SampleBlogSeven from "./pages/sampleblog7/SampleBlog";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const showFooter = location.pathname !== "/";

  return (
    <>
      <Menu />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sample-project" element={<SampleProject />} />
          <Route path="/sample-project2" element={<SampleProjectTwo />} />
          <Route path="/sample-project3" element={<SampleProjectThree />} />
          <Route path="/sample-project4" element={<SampleProjectFour />} />

          <Route path="/sample-blog" element={<SampleBlog />} />
          <Route path="/sample-blog2" element={<SampleBlogTwo />} />
          <Route path="/sample-blog3" element={<SampleBlogThree />} />
          <Route path="/sample-blog4" element={<SampleBlogFour />} />
          <Route path="/sample-blog5" element={<SampleBlogFive />} />
          <Route path="/sample-blog6" element={<SampleBlogSix />} />
          <Route path="/sample-blog7" element={<SampleBlogSeven />} />
          

        </Routes>
      </AnimatePresence>
      {showFooter && <Footer />}
    </>
  );
}

export default App;
