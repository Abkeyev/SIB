import React from "react";
import {
  Banner,
  Benefits,
  News,
  Videos,
  Useful,
  Footer,
  Modal,
} from "./components";
import "./App.css";

function App() {
  const [open, setOpen] = React.useState(false);

  const openModal = () => {
    setOpen(true);
    document.body.style.overflowY = "hidden";
  };

  const closeModal = () => {
    setOpen(false);
    document.body.style.overflowY = "scroll";
  };

  return (
    <div>
      <Banner openModal={openModal} />
      {open && <Modal closeModal={closeModal} />}
      <Benefits />
      <News />
      <Videos />
      <Useful />
      <Footer />
    </div>
  );
}

export default App;
