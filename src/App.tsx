import { Header, MarketSection, FavoritesSection } from "./components";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white">
      <Header />
      <main className="container mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <MarketSection />
        <FavoritesSection />
      </main>
    </div>
  );
}

export default App;
