import React from "react";
import banner from "../../assets/banner.jpg";
const ReservationBanner = () => {
  return (
    <div className="mt-24">
      <img
        src={banner}
        alt=""
        className="w-full  bg-cover bg-fixed object-cover h-[444px]"
      />
    </div>
  );
};

export default ReservationBanner;
