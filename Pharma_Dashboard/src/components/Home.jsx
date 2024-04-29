import React from "react";
import Navbar from "./Navbar";
import Sidemenu from "./Sidemenu";
import RIghtmenu from "./RIghtmenu";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <body className="flex w-screen h-screen bg-neutral-200">
        <Sidemenu />
        <RIghtmenu />
      </body>
    </>
  );
}
