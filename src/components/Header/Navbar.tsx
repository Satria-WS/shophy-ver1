import Toogle from "../Button/Toogle";
import logo from "/src/assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {



  return (
    <>
      <div className="container flex bg-primary/40 justify-between py-2 shadow-md px-5 ">
        {/* 1 */}
        <div className="flex justify-center items-center">
          <img className="w-[clamp(48px,_10vw,_90px)]" src={logo} alt="logo" />
          <div className="text-[clamp(1.5rem,_5vw,_2.5rem)] font-bold pl-3">
            Shopsy
          </div>
        </div>
        {/* 2 */}
        <div className="flex items-center space-x-3 ">
          {/* search bar */}
          <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[100px] sm:w-[200px] group-hover:w-[190px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          {/* button cart */}
          <button className="bg-primary py-1 px-4 rounded-full">
            <FaCartShopping className="text-xl  drop-shadow-sm cursor-pointer" />
          </button>
          {/* toogle */}
          <Toogle />
        </div>
      </div>
    </>
  );
};
export default Navbar;

{
  /* <div className="text-[clamp(1.25rem,_5vw,_2.5rem)]">
This text will scale between 1.25rem and 2.5rem depending on the
viewport width.
</div> */
}
