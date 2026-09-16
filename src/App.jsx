import './App.css';
import Explore from './pages/Explore';
import Home from './pages/Home';
import PlanYourTrip from './pages/PlanYourTrip';
import Tours from './pages/Tours';

const pages = [
  { label: 'Home', path: '/', component: Home },
  { label: 'Tours', path: '/tours', component: Tours },
  { label: 'Explore', path: '/explore', component: Explore },
  { label: 'Plan Your Trip', path: '/plan-your-trip', component: PlanYourTrip },
];

function App() {
  const Page = pages.find(({ path }) => path === window.location.pathname)?.component || Home;

  return (
    <div className="app">
      <header className="appHeader">
        <a className="appLogo" href="/">
          Tours &amp; Travels
        </a>

        <nav className="appNav">
          {pages.map((page) => (
            <a key={page.path} href={page.path}>
              {page.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="pageContent">
        <Page />
      </main>

      <footer className="appFooter">
        <p>&copy; 2026 Tours &amp; Travels. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
