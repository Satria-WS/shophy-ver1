import React from "react";
import logo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
// import Slider from "react-slick";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

// Slick Carousel settings
// const settings = {
//   dots: false,
//   arrows: false,
//   infinite: true,
//   speed: 800,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 4000,
//   cssEase: "ease-in-out",
//   pauseOnHover: false,
//   pauseOnFocus: true,
// };

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundSize: "cover",
  backgroundPosition: "bottom",
};

const Footer: React.FC = () => {
  return (
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:place-items-center gap-10 text-white px-7 pt-20 pb-40" style={BannerImg}>
        {/* 1-Shopsy */}
        <div className="relative ">
          <img className="max-w-[50px] inline-block" src={logo} alt="logo" />
          <h1 className=" relative inline-block px-3 text-3xl text-white font-bold top-2 ">
            Shopsy
          </h1>
          <p className="pt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            commodi voluptates iusto eaque totam neque!
          </p>
        </div>
        {/* 2*/}
        <div className="">
          <p className="text-2xl font-bold">Important Links</p>
          <ul className="py-3 space-y-3">
            <li className="cursor-pointer hover:text-primary hover:pl-1 duration-300">
              Home
            </li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
        {/* 3 */}
        <div className="space-y-5 py-5">
          {/*icon*/}
          <ul className="flex gap-5">
            <li className="">
              <FaInstagram className="text-3xl" />
            </li>
            <li>
              <FaFacebook className="text-3xl" />
            </li>
            <li>
              <FaLinkedin className="text-3xl" />
            </li>
          </ul>
          <ul className="flex gap-2">
            <li><FaLocationArrow/></li>
            <li>Noida, Uttar Pradesh</li>
          </ul>
          <ul className="flex gap-2">
            <li><FaMobileAlt/></li>
            <li>+91 123456789</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;

// const Footer: React.FC = () => {
//   return (
//     <>
//       {/* <div>
//         <Slider {...settings}>
//           <div>
//             <h3>Slide 1</h3>
//           </div>
//           <div>
//             <h3>Slide 1</h3>
//           </div>
//         </Slider>
//       </div> */}
//     </>
//   );
// };
