import { TbBrandCarbon } from "react-icons/tb";
import { FaMoneyBills } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import CardBenefits from "../cards/CardBenefits";

const Benefits = () => {
  return (
    <div className="benefits flex flex-col items-center p-pEx pt-20 pb-28">
        <h2 className="custom-h2">Key Benefits of Choosing Eco Volt</h2>
        <ul className="flex gap-20">
            <CardBenefits 
            icon={FaMoneyBills} 
            content="Lower energy bills with sustainable solutions."
            />
            {/* Card 2 */}
            <CardBenefits 
            icon={TbBrandCarbon} 
            content="Reduce your carbon footprint and contribute to a greener planet."
            />
            {/* Card 3 */}
            <CardBenefits 
            icon={FaUserFriends} 
            content="24/7 support and system monitoring for peace of mind."
            />
            {/* Card 4 */}
            <CardBenefits 
            icon={BsBuildings} 
            content="Tailored energy solutions for residential and commercial needs."
            />
        </ul>
    </div>
  );
};

export default Benefits
