import "./App.css";
import Main from "./components/body/main";
import Footer from "./components/footer/footer";
import Hero from "./components/header/hero";
import Navbar from "./components/header/navbar";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Navbar />
        <Hero />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
