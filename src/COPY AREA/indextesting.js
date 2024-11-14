//for se bale features p css
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Header = () => {
  const [header, setHeader] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header/");

    const unsubscribe = onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <header>
      {header ? (
        <h1
          style={{ color: "red", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          {header}
        </h1>
      ) : (
        <h1>Loading...</h1>
      )}
    </header>
  );
};

export default Header;
//this area
