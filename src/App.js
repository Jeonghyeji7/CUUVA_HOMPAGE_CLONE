import React, { useRef } from "react";
import { FullPage, Slide } from "react-full-page";
import './App.css';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import CoreValues from './corevalues/CoreValues';
import ResizableModal from "./component/modal/ResizableModal";
import { installModals, MODAL_TYPES } from "./lib/helper/modalHelper";
import Navbar from "./component/nav/Navbar";
import Home from "./home/Home";
import Contact from "./contact/Contact";

function App() {

  const resizableModalRef = useRef();

  installModals({
    [MODAL_TYPES.RESIZABLE_MODAL]: resizableModalRef,
  });

  return (
      <>
        <FullPage controls={Navbar}>
          <Slide>
            <Home />
          </Slide>
          <Slide>
            <About />
          </Slide>
          <Slide>
            <Portfolio />
          </Slide>
          <Slide>
            <CoreValues />
          </Slide>
          <Slide>
            <Contact />
          </Slide>
        </FullPage>
        <ResizableModal ref={resizableModalRef} />
      </>
  );
}

export default App;
