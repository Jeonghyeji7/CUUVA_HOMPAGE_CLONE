import React from 'react'
import HomeSection from '../home/HomeSection'
import About from '../about/About'
import Portfolio from '../portfolio/Portfolio'
import CoreValues from '../corevalues/CoreValues'
import ContactFooter from './ContactFooter';
import ReactFullpage from "@fullpage/react-fullpage";

const Home =()=> {
  
  
    return (
      <ReactFullpage
        scrollOverflow={true}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section">
              <HomeSection />
              </div>
              <div className="section">
              <About />
              </div>
              <div className="section">
              <Portfolio />
              </div>
              <div className="section">
              <CoreValues />
              </div>
              <div className="section">
              <ContactFooter />
              </div>
            </div>
          );
        }}
      />
    );
  
}

// ReactDOM.render(<Home />, document.getElementById("react-root"));

export default Home;
