import AOS from "aos";
import React, { useEffect } from "react";

const ReservationDetail = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="text-white md:pt-24 px-5   md:max-w-6xl w-full mx-auto flex md:flex-row flex-col gap-10">
      <div
        className="md:w-[60%]"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <h1 className="text-[#ca9c5e] md:text-[34px] text-[26px] mt-10 md:mt-0 font-bold mb-7 md:mb-14">
          "Until I discovered cooking I was never really interested in anything"
        </h1>
        <div className="flex md:flex-row flex-col justify-between gap-5">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-8">
              Reservation by Phone
            </h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </p>
            <p className="mt-5 mb-5 md:mb-0">
              Please call us at{" "}
              <span className="text-[#ca9c5e]">1.800.456.6756</span> between{" "}
              <br /> 10am-6pm, Monday to Friday
            </p>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold md:mb-8 mb-5">
              Event & Group Booking
            </h2>
            <p>
              Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste
              natus error sit.
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="border border-[#ca9c5e] p-3 rounded-md md:w-[40%]"
      >
        <div className="border border-[#ca9c5e] rounded-md p-10">
          <div className="flex md:flex-row flex-col justify-between">
            <div className="mb-8 md:mb-0">
              <h1 className="text-xl font-semibold mb-2">Lunch Time</h1>
              <p>Monday to Sunday</p>
              <p>10.30am-3:00pm</p>
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-2">Dinner Time</h1>
              <p>Monday to Sunday</p>
              <p>5.30am-11:00pm</p>
            </div>
          </div>
          <div className="mt-8 mb-3">
            <h1 className="text-xl font-semibold mb-2">Location</h1>
            <p>732/21 Second Street, Manchester Kingston United Kindom</p>
          </div>
          <div className="text-center my-7">
            <button className="bg-[#ca9c5e] px-5 py-4 font-bold rounded-md ">
              Make an Online Reservation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationDetail;
