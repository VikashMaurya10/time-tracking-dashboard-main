import Cards from "./components/Cards";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
export function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="app b">
          <Header />
          <Cards />
        </div>
      </div>
    </BrowserRouter>
  );
}
