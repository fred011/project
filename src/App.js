import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginReg from "./components/pages/auth/LoginReg";
import ResetPassword from "./components/pages/auth/ResetPassword";
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail";
import Contact from "./components/pages/Contact";
import Change from "./components/pages/auth/Change";
import About from "./components/pages/About";
import Electro from "./components/pages/Electro";
import Optic from "./components/pages/Optic";
import Request from "./components/pages/Request";
import Ideal from "./components/pages/Ideal";
import Rate from "./components/pages/Rate";
import Equi from "./components/pages/Equi";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import Dashboard from "./components/pages/Dashboard";
import Chemistry from "./components/pages/Chemistry";
import Physics from "./components/pages/Physics";
import Rainbow from "./components/pages/Rainbow";
import Hot from "./components/pages/Hot";
import Moment from "./components/pages/Moment";
import CarCollisionSimulation from "./components/pages/CarCollisionSimulation";
import Acids from "./components/pages/Acids";
import First from "./components/pages/First";
import Second from "./components/pages/Second";
import Third from "./components/pages/Third";
import Bonds from "./components/pages/Bonds";
import Endo from "./components/pages/Endo";
import Thermite from "./components/pages/Thermite";
import Water from "./components/pages/Water";
import Heart from "./components/pages/Heart";
import Paper from "./components/pages/Paper";
import ElectroChem from "./components/pages/ElectroChem";
import Wavefront from "./components/pages/Wavefront";
import Geometric from "./components/pages/Geometric";
import Chem from "./components/pages/chem";
import ChangePassword from "./components/pages/auth/Change";
import Titration from "./components/pages/Titration";
import Oxidation from "./components/pages/Oxidation";
import Atomic from "./components/pages/Atomic";
import Vertical from "./components/pages/Vertical";
import Work from "./components/pages/Work";
import Doppler from "./components/pages/Doppler";
import Circuit from "./components/pages/Circuit";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LoginReg />} />
            <Route
              path="sendpasswordresetemail"
              element={<SendPasswordResetEmail />}
            />
            <Route path="reset" element={<ResetPassword />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chemistry" element={<Chemistry />} />
          <Route path="/physics" element={<Physics />} />
          <Route path="/rainbow" element={<Rainbow />} />
          <Route path="/hot" element={<Hot />} />
          <Route path="/moment" element={<Moment />} />
          <Route
            path="/CarCollisionSimulation"
            element={<CarCollisionSimulation />}
          />
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
          <Route path="/bonds" element={<Bonds />} />
          <Route path="/endo" element={<Endo />} />
          <Route path="/thermite" element={<Thermite />} />
          <Route path="/water" element={<Water />} />
          <Route path="/paper" element={<Paper />} />
          <Route path="/heart" element={<Heart />} />
          <Route path="/rate" element={<Rate />} />
          <Route path="/equi" element={<Equi />} />
          <Route path="/ideal" element={<Ideal />} />
          <Route path="/about" element={<About />} />
          <Route path="/request" element={<Request />} />
          <Route path="/optic" element={<Optic />} />
          <Route path="/electro" element={<Electro />} />
          <Route path="/electrochem" element={<ElectroChem />} />
          <Route path="/acids" element={<Acids />} />
          <Route path="/wavefront" element={<Wavefront />} />
          <Route path="/geometric" element={<Geometric />} />
          <Route path="/chem" element={<Chem />} />
          <Route path="/change" element={<Change />} />
          <Route path="/titration" element={<Titration/>} />
          <Route path="/oxidation" element={<Oxidation/>} />
          <Route path="/atomic" element={<Atomic/>} />
          <Route path="/vertical" element={<Vertical/>} />
          <Route path="/work" element={<Work/>} />
          <Route path="/doppler" element={<Doppler/>} />
          <Route path="/circuit" element={<Circuit/>} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
