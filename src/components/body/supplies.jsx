import Button from "../Reusable_components/button";
import underline from "../../assets/underline.png";

const Supplies = () => {
  return (
    <div className="bg-[#E8FBFF] p-10 flex flex-col items-center gap-5 md:flex-row md:justify-between md:px-44 md:py-24 m-4">
      <div>
        <h1 className="font-bold text-xl md:text-4xl">
          Let Suppliers Find You
        </h1>
        <img
          src={underline}
          alt="underline"
          className="h-1 w-[80px] md:w-[150px] relative right-[-130px] top-1 md:right-[-230px] md:top-2"
        />
      </div>
      <Button className="bg-[#EB7150] md:w-1/6 md:mt-6">Get Verified</Button>
    </div>
  );
};

export default Supplies;
