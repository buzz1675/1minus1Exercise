import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import HeroSection from "./components/HeroSection";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [loading]);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <main className="main-content" id="main-content">
        <Navigation isReady={!loading} />
        <HeroSection isReady={!loading} />
      </main>
    </>
  );
}

export default App;
