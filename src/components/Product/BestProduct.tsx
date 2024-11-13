import shirt1 from "../../assets/shirt/shirt.png";
import shirt2 from "../../assets/shirt/shirt2.png";
import shirt3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";
const BestProduct = () => {
  return (
    <>
      <div className="container  p-5">
        {/* text */}
        <div className="flex flex-col items-center text-center">
          <span className="text-primary">Top Best Rated Products for you</span>
          <h1 className="text-3xl font-bold">Best Products</h1>
          <p className="text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            ut!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center py-20">
          {/* card */}
          <div className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white  shadow-xl duration-300 group max-w-[300px] aos-init aos-animate py-5">
            {/* image */}
            <div className="h-[140px]">
              <img
                className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                src={shirt1}
                alt="shirt-1"
              />
            </div>
            {/* text-card */}
            <div>
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

              <h1>Casual Wear</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, repudiandae?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BestProduct;
