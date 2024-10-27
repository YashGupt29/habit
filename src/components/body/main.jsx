import Button from "../Reusable_components/button";
import video from "../../assets/video-buyer.png";
import arrow from "../../assets/Group.png";
import Supplies from "./supplies";
import Works from "./working";
const Main = () => {
  const cities = [
    "Abu Dhabi",
    "Sharjah & Ajman",
    "Ras Al Khaimah",
    "Dubai",
    "Fujairah",
    "Umm Al Quwain",
  ];
  return (
    <div>
      <div className="md:p-24 p-4 flex gap-[8rem] flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col md:w-[35rem] gap-4">
          <h1 className="text-3xl font-bold">Ready to dive into HABOT?</h1>
          <p>
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
          <Button className="bg-[#00732F] w-[317px] hover:bg-lime-500 font-extrabold flex justify-between items-center pl-[100px] py-3">
            <span>Sign Up Today !</span>
            <img src={arrow} alt="arrow" className="mr-4 " />
          </Button>
        </div>
        <div className="flex flex-col md:px-[100px] gap-4 md:w-[541px] md:h-[244px] flex-wrap text-center mt-[-70px] md:pt-14">
          {cities.map((city, index) => (
            <div
              className="border-[#E7760D] border-2 w-[200px] md:w-[70%] h-[50px] text-center flex justify-center items-center"
              key={index}
            >
              <p className="text-md">{city}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-[1rem] mt-2  md:p-[5rem] flex justify-center items-center md:mt-[-5rem]">
        <img src={video} alt="video image" />
      </div>
      <Supplies />
      <Works />
    </div>
  );
};

export default Main;
