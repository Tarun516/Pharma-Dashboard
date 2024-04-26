import React from "react";
import Navbar from "./Navbar";
import Sidemenu from "./Sidemenu";

function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <body className="bg-neutral-200">
        <Sidemenu />
      </body>
    </>
  );
}

export default Home;
