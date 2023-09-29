import React, { useEffect } from "react";
import leftCornerImage from "../../assets/left-corner-leap.png";
import rightCornerImage from "../../assets/right-corner-img.png";
import Aos from "aos";
const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="about-container mt-24 md:relative ">
      <div className="bg-zinc-950/30 w-full h-full px-5 flex justify-center items-center">
        <div className="md:max-w-6xl w-full mx-auto text-white ">
          <div className="md:w-[500px] w-full">
            <h2
              className="light-font text-xl text-center mb-3"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
            >
              WE SAVED YOU A SEAT
            </h2>
            <h1
              className="text-5xl font-bold mb-3 text-center"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="900"
            >
              Discover <br /> About Us
            </h1>
            <p
              className="text-lg text-center md:text-left"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
            >
              When the going gets tough, the tough get grilling. Bringing heat
              to your meat. No one can compete with our meat.
            </p>
            <div
              className=" text-center mt-10"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500"
            >
              <span className="border-t-2 border-b-2 border-[#ca9c5e] py-3 px-5 font-bold text-3xl light-font">
                Learn more
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute  -bottom-52 -right-5 md:block hidden">
        <img src={rightCornerImage} alt="" className="w-[300px]" />
      </div>
      <div className="absolute  -bottom-[430px] -left-[200px] md:block hidden">
        <img src={leftCornerImage} alt="" className="w-[400px]" />
      </div>
    </div>
  );
};

export default About;
