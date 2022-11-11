import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; //
import { BsBank2, BsBuilding } from "react-icons/bs";
import { BiBuilding, BiBuildings } from "react-icons/bi";
import { TbCertificate } from "react-icons/tb";

import { Link } from "react-router-dom";
import b1 from "../Images/b1.jpeg";
import b2 from "../Images/b2.jpeg";
import b3 from "../Images/b3.jpeg";
import b4 from "../Images/b4.jpeg";
import img5 from "../Images/5.jpg";
import img6 from "../Images/6.jpg";
import img7 from "../Images/7.jpeg";
import avatar from "../Images/avatar.jpg";
import office from "../Images/office.jpeg";
import "./services.css";
import { FaShieldAlt, FaUsers, FaUserShield } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row center color4">
          <div className="padding">
            <h1 className="text-white">That is why we’re here.</h1>
            <br></br>
            <h5 className="text-white">
              We make it simpler and easier for you. Before you do anything,
              <br></br>
              talk to one of our Company Formation Specialists.
            </h5>
            <br></br>
            <Link to="/" className="button-effect-white  fill2">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container">
        <div className="center">
          <p className="color2 h1 bold-text">What Services We Offers</p>
          <p className="padding-1 mt-4">
            Are you looking to set up a business in Dubai? Starting a business
            in Dubai is easy with help from the right professionals. Kiltons
            offers the best and economical business setup services
          </p>
          <p className="bold-text h4 mt-4 text-secondary">
            Choose your business need in Dubai or UAE to continue
          </p>
        </div>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-lg-4 col-md-6 mt-5 center">
            <center>
              <div className="box">
                <div className="imgBox">
                  <div className="back-img-3">
                    <h1 className="heading"> FREEZONE </h1>
                  </div>
                </div>
                <div className="content shadow">
                  <h2>
                    <BsBuilding
                      fontSize="40px"
                      className="mx-2"
                      color="purple"
                    />
                    FREEZONE LICENSE
                    <br />
                    {/* <span>Graphic Designer</span> */}
                  </h2>
                </div>
              </div>
            </center>
          </div>
          <div className="col-lg-4 col-md-6 mt-5 center">
            <center>
              <div className="box">
                <div className="imgBox">
                  <div className="back-img-2">
                    <h1 className="heading">MAINLAND </h1>
                  </div>
                </div>
                <div className="content shadow">
                  <h2>
                    <BiBuildings
                      fontSize="40px"
                      className="mx-2"
                      color="purple"
                    />
                    MAINLAND LICENSE
                    <br />
                    {/* <span>Graphic Designer</span> */}
                  </h2>
                </div>
              </div>
            </center>
          </div>
          <div className="col-lg-4 col-md-6 mt-5 center">
            <center>
              <div className="box">
                <div className="imgBox">
                  <div className="back-img-1">
                    <h1 className="heading">OFFSHORE </h1>
                  </div>
                </div>
                <div className="content shadow">
                  <h2>
                    <BiBuilding
                      fontSize="40px"
                      className="mx-2"
                      color="purple"
                    />{" "}
                    OFFSHORE LICENSE
                    <br />
                    {/* <span className="">Graphic Designer</span> */}
                  </h2>
                </div>
              </div>
            </center>
          </div>

          <br></br>
          <br></br>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <br></br>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 col-md-6"
            data-aos="fade-up-right"
            data-aos-duration="3000"
          >
            <h1 className="color2" style={{ fontWeight: "bold" }}>
              Start a Business in Dubai & UAE with Kiltons
            </h1>

            <p className="text-secondary">
              Kiltons provide a wide range of business setup services in Dubai
              and UAE for startups, medium enterprises and large business
              concerns. An amalgamation of trust and quality is the trademark of
              our Business setup services. And this is not just a marketing
              gimmick, but our proven growth-formula to be precise. Kiltons
              offer business setup services related to Mainland, Free zone and
              Offshore business set up right from the very basics to Licensing,
              License renewal and a lot more. We consider the success and growth
              of the clients as the greatest reward. We serve as a helping hand
              for our esteemed clients and provide prompt recommendations and
              support. Finding a UAE national sponsor is one of our prestigious
              services. Other services that we offer are Brand Protection, Bank
              account opening, PRO Services, Company liquidation and many more.
            </p>
            <br></br>
            <Link to="/" className="button-effect-white  fill2">
              Get in Touch
            </Link>
          </div>

          <div
            className="col-lg-6 col-md-6"
            data-aos="fade-up-left"
            data-aos-duration="3000"
          >
            <br></br>
            <br></br>
            <img src={b4} className="img-fluid rounded" />
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="row" data-aos="fade-up-left" data-aos-duration="3000">
          <div className="col-lg-2 col-md-4 center zoom mt-2">
            <TbCertificate className="icon-service" />
            <h4 className="text-secondary">TRADE</h4>
            <h3 className="bold-text">LICENSE</h3>
          </div>
          <div className="col-lg-2 col-md-4 center zoom mt-2">
            <FaUserShield className="icon-service" />
            <h4 className="text-secondary">FIND A</h4>
            <h3 className="bold-text">SPONSOR</h3>
          </div>
          <div className="col-lg-2 col-md-4 center zoom mt-2">
            <GiTakeMyMoney className="icon-service" />
            <h4 className="text-secondary">COMPANY</h4>
            <h3 className="bold-text">LIQUIDATION</h3>
          </div>
          <div className="col-lg-2 col-md-4 center zoom mt-2">
            <FaShieldAlt className="icon-service" />
            <h4 className="text-secondary">BRAND</h4>
            <h3 className="bold-text">PROTECTION</h3>
          </div>
          <div className="col-lg-2 col-md-4 center zoom  mt-2">
            <BsBank2 className="icon-service" />
            <h4 className="text-secondary"> BANK ACCOUNT</h4>
            <h3 className="bold-text">OPENING</h3>
          </div>
          <div className="col-lg-2 col-md-4 center zoom  mt-2">
            <FaUsers className="icon-service" />
            <h4 className="text-secondary"> PRO</h4>
            <h3 className="bold-text">SERVICES</h3>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>

      <br></br>
      <br></br>
      <br></br>
      <div
        className="container-fluid"
        data-aos="fade-up"
        data-aos-duration="3000"
        style={{
          background: "linear-gradient(to right, #0033cc 11%, #ff6699 91%)",
        }}
      >
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-lg-4 col-md-4" style={{ padding: "0px" }}>
            <img src={img5} alt="errror" className="img-fluid" />
          </div>
          <div className="col-lg-4 col-md-4" style={{ padding: "0px" }}>
            <img src={img7} alt="errror" className="img-fluid" />
          </div>
          <div className="col-lg-4 col-md-4" style={{ padding: "0px" }}>
            <img src={img7} alt="errror" className="img-fluid" />
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <div className="container">
        <div className="row">
          <div
            className="col-lg-4 "
            data-aos="fade-up-right"
            data-aos-duration="3000"
          >
            <br></br>
            <img src={office} alt="error" className="img-fluid rounded" />
          </div>
          <div
            className="col-lg-8"
            data-aos="fade-up-left"
            data-aos-duration="3000"
          >
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <h1 className="color2 bold-text">Office Spaces</h1>
            <br></br>
            <p>
              Starting a business in Dubai or anywhere in UAE with Kiltons in
              simple and time-saving. We help you set up a company in a free
              zone, on mainland or offshore. “According to the data revealed by
              the BRL sector Dubai, more than 9500 new licenses were granted
              during the first 4 months of the year 2019.” People have their own
              perspectives and perceptions of Dubai particularly when it comes
              to business setup and getting an office space. But it is necessary
              to have the right advice from the right source before you set up a
              business in Dubai. To start a business in Dubai and UAE, you are
              supposed to seek advice only from an individual who works 24* 7 in
              the field of business setup, as the subject deals with legal
              issues and complicated norms. Kiltons Business Set Up Consultants
              have a proven track record in providing expert suggestions when it
              comes to business set up in Dubai and UAE. Our highly experienced
              Business Set Up specialistes give you the support and services to
              help you with company formation in Dubai and other related
              services across the Emirates.
            </p>
            <br></br>
            <Link to="/" className="button-effect-white  fill2">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="container-fluid">
        <div className="mx-5">
          <h1 className="bold-text color">Testimonials</h1>
          <br></br>
          <h5>
            We regard the client testimonial as a treasured token of
            appreciation that signifies our value as a Business Setup service
            provider. As you all know credible testimonials build “Trust” – one
            of the core business virtues that we cherish.
          </h5>
        </div>
        <br></br>
        <br></br>

        <Swiper
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          breakpoints={{
            576: {
              // width: 576,
              slidesPerView: 1,
            },
            768: {
              // width: 768,
              slidesPerView: 2,
            },
          }}
          name="mySwiper"
        >
          <SwiperSlide>
            <div
              className="center3 hover-underline-animation "
              style={{
                paddingLeft: "10%",
                paddingRight: "10%",
                paddingTop: "3%",
                paddingBottom: "0%",
              }}
            >
              <p className=" ">
                “Spend a lot of time talking to customers face-to-face. You’d be
                amazed how many companies don’t listen to their customers.”
                “Spend a lot of time talking to customers face-to-face. You’d be
                amazed how many companies don’t listen to their customers.”
              </p>
              <br></br>
              <div className="d-flex">
                <img src={avatar} alt="error" className="avatar" />
                <div className="mx-3 mt-3">
                  {" "}
                  <p className="bold-text ">
                    Mr.Jhon deo <br></br>{" "}
                    <span className="h5 text-secondary">
                      Manager of Holidng Group
                    </span>
                  </p>
                </div>
              </div>
              <br></br>
              <br></br>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div
              className="center3 hover-underline-animation "
              style={{
                paddingLeft: "10%",
                paddingRight: "10%",
                paddingTop: "3%",
                paddingBottom: "0%",
              }}
            >
              <p className=" ">
                “Spend a lot of time talking to customers face-to-face. You’d be
                amazed how many companies don’t listen to their customers.”
                “Spend a lot of time talking to customers face-to-face. You’d be
                amazed how many companies don’t listen to their customers.”
              </p>
              <br></br>
              <div className="d-flex">
                <img src={avatar} alt="error" className="avatar" />
                <div className="mx-3 mt-3">
                  {" "}
                  <p className="bold-text ">
                    Mr.Jhon deo <br></br>{" "}
                    <span className="h5 text-secondary">
                      Manager of Holidng Group
                    </span>
                  </p>
                </div>
              </div>
              <br></br>
              <br></br>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div
              className="center3 hover-underline-animation"
              style={{
                paddingLeft: "10%",
                paddingRight: "10%",
                paddingTop: "3%",
                paddingBottom: "0%",
              }}
            >
              <p className=" ">
                “Spend a lot of time talking to customers face-to-face. You’d be
                amazed how many companies don’t listen to their customers.”
                “Spend a lot of time talking to customers face-to-face. You’d be
                amazed how many companies don’t listen to their customers.”
              </p>
              <br></br>
              <div className="d-flex">
                <img src={avatar} alt="error" className="avatar" />
                <div className="mx-3 mt-3">
                  {" "}
                  <p className="bold-text ">
                    Mr.Jhon deo <br></br>{" "}
                    <span className="h5 text-secondary">
                      Manager of Holidng Group
                    </span>
                  </p>
                </div>
              </div>
              <br></br>
              <br></br>
            </div>
          </SwiperSlide>
        </Swiper>
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

export default Services;