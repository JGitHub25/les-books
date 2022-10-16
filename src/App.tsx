import { Landing, NotFound, Wishlists, Books, Home, SignUser } from "./pages";
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
          <Route path="/register" element={<SignUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
