import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Header = () => {
  const [header, setHeader] = useState(null); // Initialize with null or an appropriate default value

  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header/");

    // Set up the listener for the header data
    const unsubscribe = onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data); // Log the data to the console
      setHeader(data); // Optionally set the header state if needed
    });

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <header className="site-header reveal-from-bottom">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand">
            <h1 className="m-0">
              <a href="index.html">
                <img src="images/logo.svg" alt="Cube" width={32} height={32} />
              </a>
            </h1>
          </div>
          <button
            id="header-nav-toggle"
            className="header-nav-toggle"
            aria-controls="primary-menu"
            aria-expanded="false"
          >
            <span className="screen-reader">Menu</span>
            <span className="hamburger">
              <span className="hamburger-inner" />
            </span>
          </button>
          <nav id="header-nav" className="header-nav">
            <div className="header-nav-inner">
              <ul className="list-reset text-xxs header-nav-right">
                <li>
                  <a href="#">Home</a>
                </li>
                {header.title}
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Showcase</a>
                </li>
              </ul>
              <ul className="list-reset header-nav-right">
                <li>
                  <a
                    className="
												button
												button-primary
												button-wide-mobile
												button-sm
											"
                    href="#"
                  >
                    Sign up
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
