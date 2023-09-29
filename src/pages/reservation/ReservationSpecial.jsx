import React, { useEffect } from "react";
import restaurant from "../../assets/restaurant.jpg";
import special from "../../assets/special.png";
import Aos from "aos";
const ReservationSpecial = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="flex px-5 md:px-0 md:flex-row flex-col text-white mt-24 md:max-w-6xl w-full mx-auto">
      <div className="md:w-[40%] mb-8 md:mb-0 rounded-md md:rounded-none">
        <img src={restaurant} alt="" />
      </div>
      <div
        className="md:w-[60%] flex flex-col justify-center"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <h2 className="text-xl light-font tracking-wider uppercase md:ml-20 mb-5">
          your special occasion destination
        </h2>
        <p className="md:text-5xl text-4xl text-[#ca9c5e] font-semibold md:ml-20 leading-[60px] ">
          The Wilma is a premium taste that yearns to be savored, ground beef
          between your teeth
        </p>
        <img
          src={special}
          alt=""
          className="md:w-[477px] w-[300px] md:mt-36 mt-10"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1300"
        />
      </div>
    </div>
  );
};

export default ReservationSpecial;
