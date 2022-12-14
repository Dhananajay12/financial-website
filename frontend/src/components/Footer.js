import "./footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiOutlineSkype,
  AiFillGithub,
  AiOutlineGoogle,
} from "react-icons/ai";

import "aos/dist/aos.css"; //
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ marginBottom: "-2rem" }} className="mt-5">
      <div
        className="background5"
        style={{ background: " rgb(114 36 147)", opacity: "" }}
      >
        <div className="transbox5">
          <div className="container-fluid">
            <br></br>
            <br></br>
            <div className="row padding2">
              <div className="col-sm-12 col-md-6 col-lg-3 center2 mt-1 mb-5">
                <ul>
                  <h3 className="text-white mt-4 h3 d-flex">
                    <BsBuilding className="mx-1" /> RazeEcom.{" "}
                  </h3>
                  <hr className="color-hr"></hr>

                  <p className="mt-3 text-white">
                    {" "}
                    If You Would Like To Experience The Best Of Online Shopping
                    For Men, Women And Kids In India, You Are At The Right
                    Place. RAZEECOM. Is The Ultimate Destination For Fashion And
                    Lifestyle, Being Host To A Wide Array Of Merchandise
                    Including Clothing, Footwear, Accessories, Jewellery,
                    Personal Care Products And More.
                  </p>
                  <button className="button-effect-white3  fill4  mt-4">
                    Know More
                  </button>
                </ul>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3 mt-1 mb-5 ">
                <div className="center2 mx-4">
                  <ul>
                    <br />
                    <h3 className="text-white h3 ">Quick Links</h3>
                    <hr className="color-hr"></hr>
                    <li className="zoom marginFooter  mt-3">
                      <Link to="/mainland" className="text-white color mt-1 ">
                        {" "}
                        <i
                          className="fa fa-angle-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Mainland License{" "}
                      </Link>
                    </li>
                    <li className="zoom marginFooter  mt-3">
                      {" "}
                      <Link to="/freezone" className="text-white  color   mt-3">
                        {" "}
                        <i
                          className="fa fa-angle-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Free zone License
                      </Link>
                    </li>
                    <li className="zoom marginFooter  mt-3">
                      <Link to="/offshore" className="text-white  color  ">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        Offshore License
                      </Link>
                    </li>
                    <li className="zoom marginFooter">
                      {" "}
                      <Link to="/businessvisa" className="text-white color  ">
                        {" "}
                        <i
                          className="fa fa-angle-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Dubai-Business visa
                      </Link>
                    </li>
                    <li className="zoom marginFooter  mt-3">
                      {" "}
                      <Link to="/investorvisa" className="text-white color  ">
                        {" "}
                        <i
                          className="fa fa-angle-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Dubai-Investi visa
                      </Link>
                    </li>
                    <li className="zoom marginFooter  mt-3">
                      {" "}
                      <Link to="/blog" className="text-white color  ">
                        {" "}
                        <i
                          className="fa fa-angle-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 mt-1 mb-5">
                <ul className="mx-2">
                  <br />
                  <h3 className="text-white h3 ">License</h3>
                  <hr className="color-hr"></hr>
                  <li className="zoom marginFooter mt-3">
                    <Link to="/professional" className="text-white color mt-1 ">
                      {" "}
                      <i
                        className="fa fa-angle-right"
                        aria-hidden="true"
                      ></i>{" "}
                      Professional License
                    </Link>
                  </li>

                  <li className="zoom marginFooter  mt-3">
                    {" "}
                    <Link to="/commericial" className="text-white  color ">
                      {" "}
                      <i
                        className="fa fa-angle-right"
                        aria-hidden="true"
                      ></i>{" "}
                      Commercial License
                    </Link>
                  </li>
                  <li className="zoom marginFooter  mt-3">
                    <Link to="/industrial" className="text-white  color ">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                      Industrial License
                    </Link>
                  </li>
                  <li className="zoom marginFooter">
                    {" "}
                    <Link to="/tourism" className="text-white color  ">
                      {" "}
                      <i
                        className="fa fa-angle-right"
                        aria-hidden="true"
                      ></i>{" "}
                      Tourism License
                    </Link>
                  </li>
                  <li className="zoom marginFooter  mt-3">
                    {" "}
                    <Link to="/etrade" className="text-white color  ">
                      {" "}
                      <i className="fa fa-angle-right" aria-hidden="true"></i> E
                      Trader Lincense
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                className="col-sm-12 col-md-6 col-lg-3 mt-2 mb-2"
                style={{ fontFamily: "Poppins" }}
              >
                <ul>
                  <br />
                  <h3 className="text-white h3"> Our Contact</h3>
                  <hr className="color-hr"></hr>
                  <li className="text-white mt-4">
                    <i className="fa fa-map-marker mx-1"></i> G06, Bin Thani
                    Building, Near Hilal Bank, <br />
                    Al Qusais, Dubai, UAE. P.O. Box 237739
                  </li>
                  <br />
                  <li className="text-white d-flex">
                    {" "}
                    <i className="fa fa-phone-square mx-1"></i> +971 522 407 111
                  </li>
                  <br />

                  <li className="text-white">
                    {" "}
                    <i className="fa fa-envelope  mx-1"></i>{" "}
                    dhananjayavare786@gmail.com
                  </li>
                  <br />
                  {/* <li className="text-white">
                    <i className="fa fa-map-marker mx-1"></i> kalyan , Thane ,
                    Mumbai{" "}
                  </li> */}
                  <br />
                </ul>
              </div>
            </div>
            <hr className="color-hr"></hr>
            <div className="row">
              <div className="register-free  ">
                <h3 className="mt-2 text-white h3">
                  Know More About Lincensing
                </h3>
                <br></br>

                <button className="button-effect-white3  fill4 mx-2 ">
                  Click Me
                </button>
              </div>
            </div>
            <br></br>
            <hr className="color-hr"></hr>

            <br></br>

            <div className="icon-social">
              <p className="">
                <FaFacebookF className="icons zoom" />
              </p>
              <AiOutlineInstagram className="icons zoom" />
              <FaTwitter className="icons zoom" />
              <AiOutlineSkype className="icons zoom" />
              <FaLinkedinIn className="icons zoom" />
            </div>
            <div className="icon-social color5">
              <h5 className="padding text-white h5">
                @ 2022 Copyright:Razer.c53.com
              </h5>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
