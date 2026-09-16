import './App.css';

const pages = [
  { label: 'Home', path: '/' },
  { label: 'Tours', path: '/tours' },
  { label: 'Explore', path: '/explore' },
  { label: 'Plan Your Trip', path: '/plan-your-trip' },
];

function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <a className="appLogo" href="/" aria-label="Tours and Travels home">
          Tours &amp; Travels
        </a>

        <nav className="appNav" aria-label="Main navigation">
          {pages.map((page) => (
            <a key={page.path} href={page.path}>
              {page.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="pageContent" aria-label="Page content" />

      <footer className="appFooter">
        <p>&copy; 2026 Tours &amp; Travels. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
