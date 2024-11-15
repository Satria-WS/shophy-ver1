import women_1 from "../../assets/women/women.png";
import women_2 from "../../assets/women/women2.jpg";
import women_3 from "../../assets/women/women3.jpg";
import women_4 from "../../assets/women/women4.jpg";

import { FaStar } from "react-icons/fa6";
const ProductListing = () => {
  interface product {
    id: number;
    img: string;
    title: string;
    rating: number;
    color: string;
    aosDelay: string;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const ProductsData: product[] = [
    {
      id: 1,
      img: women_1,
      title: "Women Ethnic",
      rating: 5.0,
      color: "white",
      aosDelay: "0",
    },
    {
      id: 2,
      img: women_2,
      title: "Women western",
      rating: 4.5,
      color: "Red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: women_3,
      title: "Goggles",
      rating: 4.7,
      color: "brown",
      aosDelay: "400",
    },
    {
      id: 4,
      img: women_4,
      title: "Printed T-Shirt",
      rating: 4.4,
      color: "Yellow",
      aosDelay: "600",
    },
  ];
  return (
    <>
      <div className="container   py-14 overflow-y-hidden">
        {/* title */}
        <div data-aos="fade-up" className="text-center space-y-1 py-5">
          <p className="text-primary">Listing Product for you</p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
            quod
          </p>
        </div>
      {/* parent */}
        <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 space-y-1 py-5">
          {/* content */}
          {ProductsData.map((item, index) => (
            <>
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={item.aosDelay}
                className="flex flex-col flex-wrap justify-center items-center py-3 space-y-1 "
              >
                {/* image */}
                <img
                  className="object-cover w-[150px] h-[220px] rounded-md"
                  src={item.img}
                  alt="girl"
                />
                {/* text */}
                <div className="space-y-1">
                  <p className="font-bold">Woment Ethnic</p>
                  <p className="text-sm text-gray-500">White</p>
                  <span className="inline-block text-primary">
                    <FaStar />
                  </span>
                  <span className="pl-1">{item.rating}</span>
                </div>
              </div>
            </>
          ))}
    
        </div>
        <div className="flex  justify-center py-5">
            <button className=" bg-primary rounded-md py-1 px-5">
              <span className="text-white">View All Button</span>
            </button>
          </div>
      </div>
    </>
  );
};
export default ProductListing;
