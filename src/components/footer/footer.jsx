import logo from "../../assets/logoLight.png";
import signature from "../../assets/© R Singhania.png";
import socialMedia from "../../assets/List.png";
const Footer = () => {
  return (
    <div className="bg-[#123557] py-[50px] px-[100px] flex flex-col gap-10 text-center md:flex-row items-center justify-between mt-[200px]">
      <div className="flex flex-col gap-5 md:flex-row md:gap-32">
        <div className="flex flex-col  gap-y-3">
          <img src={logo} alt="logo" className="h-[40px]" />
          <img src={signature} alt="signature" className="w-[100px] ml-2" />
        </div>
        <div className="flex flex-col gap-4 md:flex-row text-white md:gap-20">
          <div className="flex flex-col">
            <p className="font-bold">Company</p>
            <p className="text-gray-300">About</p>
            <p className="text-gray-300">FAQ</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Terms</p>
            <p className="text-gray-300">Data privacy</p>
            <p className="text-gray-300">Terms</p>
            <p className="text-gray-300">Accessibility</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Related</p>
            <p className="text-gray-300">Find Buyer</p>
            <p className="text-gray-300">Feedback</p>
          </div>
        </div>
      </div>
      <div>
        <img src={socialMedia} />
      </div>
    </div>
  );
};

export default Footer;
