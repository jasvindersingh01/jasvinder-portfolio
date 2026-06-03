import { useEffect } from "react";
import Lenis from "lenis";
import { useState } from "react";
import Loader from "./components/ui/Loader";
import Home from "./pages/Home";

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {!loading && <Home />}
    </>
  )
}