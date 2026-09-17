import { Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Explore from './pages/Explore/Explore';
import Home from './pages/Home/Home';
import PlanYourTrip from './pages/PlanYourTrip/PlanYourTrip';
import Tours from './pages/Tours/Tours';

import Navbar from './componenets/Navbar';
import Footer from './componenets/Footer';


function App(){

  return (
    <div className="app">

      <header className="appHeader">
        <Link className="appLogo" to="/">
          Tours &amp; Travels
        </Link>
        <Navbar />
      </header>

      <main className="pageContent">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/tours"} element={<Tours />} />
          <Route path={"/explore"} element={<Explore />} />
          <Route path={"/plan-your-trip"} element={<PlanYourTrip />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;
