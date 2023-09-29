import React from "react";
import Navbar from "../pages/navbar/Navbar";
import Reservation from "../pages/reservation/Reservation";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Reservation></Reservation>
    </div>
  );
};

export default MainLayout;
