import shirt1 from "../../assets/shirt/shirt.png";
import shirt2 from "../../assets/shirt/shirt2.png";
import shirt3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

interface data {
  id: number;
  img: string;
  title: string;
  description: string;
}

const ProductsData: data[] = [
  {
    id: 1,
    img: shirt1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: shirt2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: shirt3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const BestProduct = () => {
  return (
    <>
      <div className="container  p-5 overflow-y-hidden">
        {/* text */}
        <div className="flex flex-col items-center text-center space-y-1 py-5">
          <span className="text-primary">Top Best Rated Products for you</span>
          <h1 className="text-3xl font-bold">Best Products</h1>
          <p className="text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            ut!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center pt-20">
          {/* card */}
          {ProductsData.map((item, index) => (
            <>
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                key={index}
                className=" aos-init aos-animate px-3 rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white  shadow-xl duration-300 group max-w-[300px]  py-5 mb-7"
              >
                {/* image */}
                <div className="h-[140px]">
                  <img
                    className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                    src={item.img}
                    alt="shirt-1"
                  />
                </div>
                {/* text-card */}
                <div className="flex flex-col justify-center items-center text-center space-y-2">
                  {/* star */}
                  <div>
                    <ul className="flex space-x-1">
                      {/* Create the number of stars dynamically */}
                      {[...Array(5)].map((_, index) => (
                        <li key={index}>
                          <FaStar className="text-yellow-500" />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h1 className="text-xl font-bold">{item.title}</h1>
                  <p>{item.description}</p>
                  <button className="bg-primary hover:bg-white text-white hover:text-primary  py-2  px-4 rounded-full">
                    <span>Order Now</span>
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export default BestProduct;
