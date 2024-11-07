import sustainabilityImg from "../../assets/img/sustainability-img.svg"
import { FaLeaf, FaRecycle } from "react-icons/fa6";
import { PiSolarPanel } from "react-icons/pi";
import { GiWorld } from "react-icons/gi";
import CardBenefits from "../cards/CardBenefits";

const Sustainability = () => {
  return (
    <div className="sustainability flex flex-col p-20 gap-20 items-center text-lg pb-24">
      <div className="flex gap-20 items-center text-lg">
        <img src={sustainabilityImg} alt="Nature benefits" className="w-[500px]" />
        <div>
          <h2 className="custom-h2 !pb-4">Our Commitment to <span className="text-[#01cc01]">Sustainability</span></h2>
          <p>At <span className="font-bold text-[#01cc01]">Eco Volt</span>, sustainability is at the core of everything we do. We believe in creating long-term value not only for our clients but also for the planet. Our renewable energy solutions are designed to reduce environmental impact, lower carbon emissions, and promote energy efficiency in every project we undertake.</p><br />
          
          <p>We are continuously working towards a greener future by adopting eco-friendly practices in our operations, reducing waste, and prioritizing renewable energy sources. Our goal is to help communities and businesses transition to cleaner energy while contributing to the global fight against climate change.</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="font-semibold custom-services-h3 pb-8 pt-8">Our Sustainable Practices Include:</h3>
        <ul className="flex gap-14">
            <CardBenefits 
              icon={PiSolarPanel} 
              content="Use of renewable energy sources such as solar, wind, and geothermal."
            />
            <CardBenefits 
              icon={GiWorld} 
              content="Commitment to reducing carbon emissions through energy-efficient solutions."
            />
            <CardBenefits 
              icon={FaRecycle} 
              content="Investing in sustainable and recyclable materials for all installations."
            />
            <CardBenefits 
              icon={FaLeaf} 
              content="Encouraging eco-friendly practices in our daily operations and projects."
            />
        </ul>
      </div>
    </div>
  )
}

export default Sustainability

