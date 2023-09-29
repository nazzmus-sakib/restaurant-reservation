import React from "react";
import ReservationCover from "./ReservationCover";
import ReservationDetail from "./ReservationDetail";
import ReservationBanner from "./ReservationBanner";
import ReservationSpecial from "./ReservationSpecial";
import About from "./About";
import ShowCase from "./ShowCase";
import Footer from "./Footer";

const Reservation = () => {
  return (
    <div className="mx-auto">
      <ReservationCover></ReservationCover>
      <div className="bg-[#0b1517]">
        <ReservationDetail></ReservationDetail>
        <ReservationBanner></ReservationBanner>
        <ReservationSpecial></ReservationSpecial>
        <About></About>
        <ShowCase></ShowCase>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Reservation;
