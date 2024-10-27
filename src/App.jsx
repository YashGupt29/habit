import "./App.css";
import Hero from "./components/header/hero";
import Navbar from "./components/header/navbar";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
