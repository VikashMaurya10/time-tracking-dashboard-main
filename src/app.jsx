import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
export function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app__main">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/daily" replace={true} />} />
            <Route path="/daily" element={<Cards frame="daily" />} />
            <Route path="/weekly" element={<Cards frame="weekly" />} />
            <Route path="/monthly" element={<Cards frame="monthly" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
