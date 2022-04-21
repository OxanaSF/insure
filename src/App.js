
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home'
import HowWeWork from './pages/HowWeWork'
import Blog from './pages/Blog'
import Account from './pages/Account'
import ViewPlans from './pages/ViewPlans';
import GlobalStyle from "./components/GlobalStyle";


function App() {
  return (
    <div className="App">
      <GlobalStyle />

    <Router>
    <Navbar />
    <section className="page-content">
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/work" element={<HowWeWork />}  />
        <Route path="/blog" element={<Blog />}  />
        <Route path="/account" element={<Account/>}  />
        <Route path="/plans" element={<ViewPlans />}  />
      </Routes>
    </section>
    </Router>

    </div>
  );
}

export default App;
