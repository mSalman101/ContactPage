import { useState } from "react";

import "./App.css";
import Nav from "./Components/Nav/Nav";
import HeroContact from "./Components/HeroContact/HeroContact";
import ContactForm from "./Components/ContactForm/ContactForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <main className="main_container">
        <HeroContact />
        <ContactForm />
      </main>
    </>
  );
}

export default App;
