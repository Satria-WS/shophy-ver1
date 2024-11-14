import Banner from "../../assets/website/orange-pattern.jpg";
const Subscribe = () => {
  const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <>
      <div className="container my-10" style={BannerImg}>
        <div className="flex flex-col justify-center items-center  py-10 px-5 space-y-5">
          <h1 className="text-2xl text-white font-semibold">Get Notified About New Products</h1>
          <input
            className="w-full max-w-[576px] p-3 "
            placeholder="Enter Your email"
            type="text"
          />
        </div>
      </div>
    </>
  );
};
export default Subscribe;
