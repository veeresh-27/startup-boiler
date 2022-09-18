import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import { Footer, Header } from "./components/organisms";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
