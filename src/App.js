import React from "react";

import Content from "./Content";

const App = () => {
  return (
    <>
      <header className="header">
        <h1 className="heading-primary">Currency Converter</h1>
      </header>

      <Content />

      <footer className="footer">
        <p className="footer__copyright">
          &copy; 2020 Copyright:
          <a href="http://www.jobayerahad.com" className="footer__link">
            Jobayer Al Mahmud
          </a>
        </p>
      </footer>
    </>
  );
};

export default App;
