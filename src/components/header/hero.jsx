import bg from "../../assets/bg.png";
import suitcase from "../../assets/suitcase.png";
import location from "../../assets/placeholder1.png";
import Input from "../Reusable_components/input";
import Button from "../Reusable_components/button";
``;
const Hero = () => {
  return (
    <div
      className="relative flex-grow  bg-cover bg-center pb-[10rem] mx-[0.2rem]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 flex flex-col items-center text-white">
        <div className="flex flex-col text-center items-center mt-[10rem] gap-3">
          <h1 className="text-4xl md:text-6xl font-bold">
            Are You a Supplier?
          </h1>
          <h1 className="text-4xl md:text-6xl">
            Explore Matching Opportunities.
          </h1>
        </div>
        <div className="flex flex-col items-center md:flex-row mt-[3rem] gap-2">
          <Input
            icon={suitcase}
            placeholder="Search your required service here"
          />
          <Input
            icon={location}
            placeholder="Search your desired location here"
          />
          <Button className="bg-[#00732F] hover:bg-lime-300 hover:text-gray-500 w-[6rem]">
            Search
          </Button>
        </div>
        <div className="flex flex-col   text-center mt-3 md:flex-row md:mt-[3rem] md:gap-2">
          <p className="font-bold">Are you a buyer?</p>
          <p className="underline font-light">
            Click here if you are looking to post a requirements
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
