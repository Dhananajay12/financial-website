import React, { useEffect } from "react";
import "./caursal.css";
import AOS from "aos";
import "aos/dist/aos.css"; //
import banner from "../Images/banner05.png";
import Typical from "react-typical";
import { BsBuilding } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";

const Caursol = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="container-banner">
        <img src={banner} alt="error" className="img-fluid img-size" />
        <div className="div-banner">
          {" "}
          <div>
            <p className="text-white font-size-slider bold-text d-flex">
              <BsBuilding className=" icon-banner" /> Banner
            </p>
          </div>
          <hr className="color-hr2" size="4px"></hr>
          <p className="text-small-banner1">2022</p>
          <p className="text-small-banner2">
            <Typical
              loop={Infinity}
              className="text-small-banner2"
              steps={[
                " HOW TO START YOUR COMPANY IN DUBAI",
                1000,
                "get flat 10% off for new arrivals",
                1000,
              ]}
            />
          </p>
          <p className="text-small-banner3 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br></br> Lorem Ipsum has been the industry's standard
            dummy text ever since the<br></br> 1500s, when an unknown printer
            took a galley of type and scrambled it to <br></br> make a type
            specimen book.
          </p>
          <div className="d-flex">
            <Link to="/about" className="button-effect-white3 fill4">
              Know More
            </Link>
            <p className="d-flex mx-4 mt-1">
              <BsFillTelephoneInboundFill className="icons" />{" "}
              <FaWhatsapp className="icons" /> <FaYoutube className="icons" />
            </p>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <br></br>
      <br></br>
    </>
  );
};

export default Caursol;
