import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Home";
import { Clients } from "./Clients";
import { Foodpantry } from "./Foodpantry";
import { Staff } from "./Staff";
import { NewClient } from "./NewClient";
import { Editclient } from "./Editclient";
import { Login } from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import AppLogout from "./AppLogout.js";

function App() {


  const MainDashboardEntry = () => {
    return (
        <AppLogout>
            < Clients />
        </AppLogout>
    )
    }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/clients" element={<MainDashboardEntry />} />
            <Route path="/clients/:Client_ID" element={<Editclient />} />
            <Route path="/foodpantry" element={<Foodpantry />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/newclient" element={<NewClient />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* <Clients /> */}
      {/* <Foodpantry /> */}
      {/* <Staff /> */}
      {/* <NewClient /> */}
      {/* <Deleteclient /> */}
    </div>
  );
}

export default App;
