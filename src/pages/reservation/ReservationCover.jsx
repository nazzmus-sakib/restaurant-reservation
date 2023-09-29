import React, { useEffect } from "react";
import leftCornerImg from "../../assets/left-corner-img.png";
import rightCornerImg from "../../assets/right-corner-img.png";
import Aos from "aos";
const ReservationCover = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="reservation-cover relative w-full">
      <div className="h-full bg-zinc-950/20 px-5 md:px-0 text-white overflow-hidden">
        <div className="h-full flex flex-col justify-center items-center overflow-hidden">
          <h3 className="light-font block text-lg leading-4 tracking-widest ">
            MORE FLAVOR FOR LESS
          </h3>

          <h1
            className="md:text-[90px]  text-6xl font-bold mb-5"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            Reservation
          </h1>
          <p
            className="text-center text-lg"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            When the going gets tough, the tough get grilling. Bringing heat to{" "}
            <br></br>
            your meat. No one can compete with our meat
          </p>
        </div>
        {/* left corner image */}
        <div className="absolute -bottom-10 z-50 -left-[91px] hidden md:block ">
          <img src={leftCornerImg} alt="" className="w-[300px]" />
        </div>
        {/* right corner image */}
        <div className="absolute -right-16 z-50 -bottom-48  hidden md:block">
          <img src={rightCornerImg} alt="" className="w-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default ReservationCover;
