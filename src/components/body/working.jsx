import icon1 from "../../assets/howItworks/icon1.png";
import icon2 from "../../assets/howItworks/icon2.png";
import icon3 from "../../assets/howItworks/icon3.png";
import icon4 from "../../assets/howItworks/icon4.png";
import icon5 from "../../assets/howItworks/icon5.png";
import icon6 from "../../assets/howItworks/icon6.png";

const Works = () => {
  const content = [
    { icon: icon2, title: "Select Your Role and Sign Up" },
    { icon: icon4, title: "Buyers Post Your Requirements" },
    { icon: icon5, title: " Review, Select, and Contact the Best Suppliers" },
    {
      icon: icon1,
      title:
        "Suppliers Complete your profile and get notified for opportunities",
    },
    {
      icon: icon6,
      title: "Contact to Buyers and Share your Quote for the service",
    },
    {
      icon: icon3,
      title: "Both the Parties can Connect and Make Business Leave a Feedback",
    },
  ];
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full mt-20">
      <div className="flex flex-col justify-center items-center md:w-[50%] gap-4">
        <p className="text-4xl font-bold">How it works?</p>
        <p className="text-center">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback.
        </p>
      </div>
      <div className="grid mx-3 mt-2 md:grid-cols-3 md:grid-rows-2 md:mx-[10rem] md:mt-[2rem]">
        {content.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg flex flex-col items-center text-center ${
              [0, 4, 2].includes(index) ? "bg-[#E8FBFF]" : "bg-white"
            }`}
          >
            <img src={item.icon} alt="icon" className="mb-2" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
