// import hero image
import sale from "../../assets/hero/sale.png";
import shopping from "../../assets/hero/shopping.png";
import women from "../../assets/hero/women.png";

// import slider
import Slider from "react-slick";

const Hero = () => {
  // interface
  interface imageList {
    id: number;
    img: string;
    title: string;
    description: string;
  }

  const settings = {};

  const ImageList: imageList[] = [
    {
      id: 1,
      img: sale,
      title: "Upto 50% off on all Men's Wear",
      description:
        "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: shopping,
      title: "30% off on all Women's Wear",
      description:
        "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: women,
      title: "70% off on all Products Sale",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <>
      <div className="container relative flex border border-rose-300 min-h-[700px]">
        {/* garis background */}
        <div className="absolute w-[700px] h-[2000px] bg-primary/40 -top-1/2 rotate-45 right-0  rounded-2xl z-0 "></div>
        {/* parent */}
        <div className=" flex flex-col justify-center items-center z-10 space-y-10">
          {/* slider */}

          {ImageList.map((item, index) => (
            <div
              key={index}
              className=" border border-gray-500 p-1 flex flex-col items-center"
            >
              {/* Image Section */}
              <div
                data-aos="zoom-in"
                data-aos-once="true"
                className="relative z-10"
              >
                <img
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                  src={item.img}
                  alt="discount"
                />
              </div>
              {/* Content Section */}
              <div className="border border-yellow-500 text-center">
                <h1
                  className="text-5xl font-bold "
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  {item.title} off on all Men's Wear
                </h1>
                <p className="font-semibold">{item.description}</p>
                <button className="py-2 px-4 bg-primary rounded-full hover:shadow-md">
                  <span className="text-white">Order Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Hero;
