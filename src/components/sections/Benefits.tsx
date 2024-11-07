import { TbBrandCarbon } from "react-icons/tb";
import { FaMoneyBills } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";

const Benefits = () => {
  return (
    <div className="benefits flex flex-col items-center p-pEx pt-20 pb-28">
        <h2 className="custom-h2">Key Benefits of Choosing Eco Volt</h2>
        <ul className="flex gap-20">
            <li className="w-64 gap-3 flex flex-col items-center rounded p-2 pt-8 pb-8 shadow">
                <FaMoneyBills className="text-green-700 text-4xl" />
                <p className="text-center">Lower energy bills with sustainable solutions.</p>
            </li>
            <li className="w-64 gap-3 flex flex-col items-center rounded p-2 pt-8 pb-8 shadow">
                <TbBrandCarbon className="text-green-700 text-4xl" />
                <p className="text-center">Reduce your carbon footprint with renewable energy.</p>
            </li>
            <li className="w-64 gap-3 flex flex-col items-center rounded p-2 pt-8 pb-8 shadow">
                <FaUserFriends className="text-green-700 text-4xl" />
                <p className="text-center">24/7 support and system monitoring for peace of mind.</p>
            </li>
            <li className="w-64 gap-3 flex flex-col items-center rounded p-2 pt-8 pb-8 shadow">
                <BsBuildings className="text-green-700 text-4xl" />
                <p className="text-center">Tailored energy solutions for residential and commercial needs.</p>
            </li>
        </ul>
    </div>
  )
}

export default Benefits
