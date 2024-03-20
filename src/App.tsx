import Header from "./pages/Header";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <nav>
        <Link to="/bus-booking/">Home</Link>
        {" | "}
        <Link to="/bus-booking/contact">Contact</Link>
      </nav>

      <Outlet />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
