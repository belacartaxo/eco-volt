import aboutImg1 from "../../assets/img/about-img1.svg"
import aboutImg2 from "../../assets/img/about-img2.svg"
import aboutImg3 from "../../assets/img/about-img3.svg"
import aboutImg4 from "../../assets/img/about-img4.svg"
import AboutSection from "./AboutSection"
import AboutSectionList from "./AboutSectionList"
import { MdOutlineEco, MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegHandshake, FaBuildingWheat } from "react-icons/fa6";
import { PiTree } from "react-icons/pi";
import { RiCommunityLine } from "react-icons/ri";
import { SlEnergy } from "react-icons/sl";
import { TbBuildingWindTurbine } from "react-icons/tb";
import { LiaMoneyBillSolid } from "react-icons/lia";

const AboutUs = () => {
  return (
    <div>
        <div className="flex flex-col items-center about-us p-20 text-lg">
            <h2 className="custom-h2 !pb-5">About Us</h2>
            <p className="w-[800px] text-center">At <span className="font-bold text-[#01cc01]">Eco Volt</span>, we are dedicated to shaping a sustainable future through innovative renewable energy solutions. Our mission is to make <span className="font-bold text-slate-700">clean, affordable, and reliable energy accessible to everyone</span>, while reducing environmental impact and promoting energy independence.</p>

            <AboutSection 
                img={aboutImg1} 
                title="Our Mission"
                content="To provide cutting-edge, sustainable energy solutions that empower individuals, businesses, and communities to reduce their carbon footprint and achieve energy independence."
                alt="Illustration of wind turbines"
            />

            <AboutSectionList
                img={aboutImg2} 
                title="Our Values"
                items={["Sustainability: We are committed to environmentally responsible practices in every aspect of our work.", "Innovation: We constantly explore new technologies and solutions to stay at the forefront of the renewable energy industry.", "Integrity: We build trust with our clients through transparency, honesty, and ethical business practices."]}
                alt="Illustration of a business conversation"
                icons={[MdOutlineEco, BsGraphUpArrow, FaRegHandshake]}
            />
        </div>

        <div className="impact flex items-center bg-zinc-100 h-[300px] text-lg pl-32 pl-32 gap-10">
            <div className="w-[45%]">
                <p className="text-3xl font-semibold">Through our <span className="text-[#01cc01] font-bold">renewable energy solutions</span><br />we’re reducing costs and empowering businesses and homes.</p>
                <p className="pt-2">See the impact we’ve made so far.</p>
            </div>
            <ul className="w-[50%] grid grid-cols-2 gap-4">
                <li className="flex flex items-center gap-3"><TbBuildingWindTurbine className="text-[#01cc01] text-3xl" /><div className="flex flex-col text-base"><span className="text-3xl font-bold">45,674,430 kWh</span> of Renewable Energy Generated</div></li>
                <li className="flex flex items-center gap-3"><FaBuildingWheat className="text-[#01cc01] text-3xl" /><div className="flex flex-col text-base"><span className="text-3xl font-bold">32</span> Years of Industry Experience</div></li>
                <li className="flex flex items-center gap-3">< SlEnergy className="text-[#01cc01] text-3xl"/><div className="flex flex-col text-base"><span className="text-3xl font-bold">92%</span> of Clients Achieved Net-Zero Energy</div></li>
                <li className="flex flex items-center gap-3"><LiaMoneyBillSolid className="text-[#01cc01] text-3xl" /><div className="flex flex-col text-base"><span className="text-3xl font-bold">$23,457,890</span> Saved Annually on Energy Bills</div></li>

            </ul>
        </div>

        <div className="flex flex-col items-center about-us p-20 pt-8 text-lg">
            <AboutSection 
                img={aboutImg3} 
                title="Our Vision"
                content="We envision a world where renewable energy is the cornerstone of every home, business, and community, driving a global shift toward a greener, more sustainable future."
                alt="Building ilustration"
            />

            <AboutSectionList
                img={aboutImg4} 
                title="Our Goals"
                items={["Reduce Carbon Emissions: We aim to help our clients reduce their carbon emissions by 30% over the next 5 years.", "Expand Our Reach: Our goal is to install 100 MW of renewable energy systems annually, expanding our impact.", "Achieve Net-Zero: We aim to achieve net-zero energy consumption in all our operations in the year 2035",]}
                alt="Illustration of a woman holding up the world"
                icons={[PiTree, RiCommunityLine, MdOutlineEnergySavingsLeaf]}
            />

        </div>

    </div>
  )
}

export default AboutUs
