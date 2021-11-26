import "./Assets/global.scss";
import "antd/dist/antd.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Service from "./Components/Services/Service/Service";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:serviceSlug" element={<Service />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
