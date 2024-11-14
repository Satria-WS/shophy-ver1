import women2 from "../../assets/women/women2.jpg";
// import icon
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
const SaleProduct = () => {
  interface iconData {
    img: JSX.Element;
    title: string;
    color: string;
  }
  const iconList: iconData[] = [
    {
      img: <GrSecure />,
      title: "Quality Products",
      color: "bg-violet-100",
    },
    {
      img: <IoFastFood />,
      title: "Fast Deliver",
      color: "bg-orange-100",
    },
    {
      img: <GiFoodTruck />,
      title: "Easy Payment meth",
      color: "bg-green-100",
    },
    {
      img: <GiFoodTruck />,
      title: "Get Offers",
      color: "bg-yellow-100",
    },
  ];
  return (
    <>
      <div className="container grid grid-cols-1 sm:grid-cols-2 sm:gap-10 place-items-center overflow-y-hidden p-5  ">
        {/* image */}
        <div
          data-aos="zoom-in"
          className="w-full max-w-[400px] h-[350px] aos-inite aos-animate py-10"
        >
          <img
            className="w-full h-full object-cover drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
            src={women2}
            alt="women"
          />
        </div>
        {/* text */}
        <div className="space-y-3">
          <h1
            data-aos="zoom-in"
            className="text-3xl font-bold aos-init aos-animate"
          >
            Winter Sale upto 50% Off
          </h1>
          <p data-aos="zoom-in" className="text-gray-400 aos-init aos-animate">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            consectetur assumenda sint, odit voluptatum distinctio doloremque
            velit voluptatibus quae accusantium?.
          </p>
          <ul data-aos="zoom-in" className="aos-init aos-animate">
            {iconList.map((icon, index) => (
              <li key={index} className="flex items-center py-3 ">
                <div className={`${icon.color} p-4 rounded-full`}>
                  {icon.img}
                </div>
                <div className="px-3">{icon.title}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SaleProduct;
