import React, { useEffect } from "react";
import wave from "../../assets/small-wave.png";
import image1 from "../../assets/archive-img-1.jpg";
import image2 from "../../assets/archive-img-2.jpg";
import image3 from "../../assets/archive-img-3.jpg";
import image4 from "../../assets/archive-img-4.jpg";
import image5 from "../../assets/archive-img-5.jpg";
import image6 from "../../assets/archive-img-6.jpg";
import Aos from "aos";
const ShowCase = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-full">
      <div className="text-white  text-center md:my-24 my-14 px-5 md:px-0">
        <h2
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="uppercase light-font tracking-widest text-xl mb-3"
        >
          follow alone
        </h2>
        <div className="inline-flex gap-2 justify-between items-center ">
          <img
            src={wave}
            alt=""
            className=" h-[15px] w-full hidden md:block"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
          <h1
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            className="md:text-7xl text-5xl font-semibold"
          >
            @Wilma
          </h1>
          <img
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src={wave}
            alt=""
            className="
            h-[15px]  w-full hidden md:block
          "
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="grid px-7 md:px-0 md:grid-cols-9 grid-cols-1 gap-8 md:max-w-6xl w-full mx-auto showcase"
      >
        <img
          src={image1}
          className="h-[345px] rounded-md w-full md:col-span-3"
        />
        <img
          src={image2}
          className="h-[345px] rounded-md w-full md:col-span-4"
        />
        <img
          src={image3}
          className="h-[345px] rounded-md w-full md:col-span-2"
        />
        <img
          src={image4}
          className="h-[345px] rounded-md w-full md:col-span-4"
        />
        <img
          src={image5}
          className="h-[345px] rounded-md w-full md:col-span-2"
        />
        <img
          src={image6}
          className="h-[345px] rounded-md w-full md:col-span-3"
        />
      </div>
    </div>
  );
};

export default ShowCase;
