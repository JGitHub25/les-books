import { Landing, NotFound, Wishlists, Books, Home } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/wishlists" element={<Wishlists />} />
          <Route path="/books" element={<Books />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
