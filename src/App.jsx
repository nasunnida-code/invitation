import "./App.css";

import Hero from "./components/Hero";
import Greeting from "./components/Greeting";
import Calendar from "./components/Calendar";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Account from "./components/Account";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Hero />

      <Greeting />

      <Calendar />

      <Gallery />

      <Location />

      <Account />

      <Footer />
    </div>
  );
}

export default App;
