import { PiCompassRoseLight } from "react-icons/pi";
import { SiContentstack } from "react-icons/si";
import { SiOpencontainersinitiative } from "react-icons/si";
import { SiGooglecontaineroptimizedos } from "react-icons/si";
import { SiContributorcovenant } from "react-icons/si";
import { FaContao } from "react-icons/fa";
import { BiLayer } from "react-icons/bi";
import CardClient from "../cards/CardClient";
import clientImg1 from "../../assets/img/client-img1.jpg"
import clientImg2 from "../../assets/img/client-img2.jpg"
import clientImg3 from "../../assets/img/client-img3.jpg"
import clientImg4 from "../../assets/img/client-img4.jpg"

const Clients = () => {
  return (
    <>
        <div className="clients flex flex-col items-center p-20">
            <h2 className="custom-h2 !pb-4">Our Clients</h2>
            <p className="text-base w-[750px] text-center">We proudly serve a wide range of clients, from homeowners to large businesses, all committed to a sustainable future. Together, we're making a positive impact by embracing renewable energy solutions that save money and protect the environment.</p>
            <ul className="flex justify-between w-[100%] pt-10">
                <li><a href="#"><PiCompassRoseLight className="icon text-5xl"/></a></li>
                <li><a href="#"><SiContentstack className="icon text-5xl"/></a></li>
                <li><a href="#"><SiOpencontainersinitiative className="icon text-5xl"/></a></li>
                <li><a href="#"><SiGooglecontaineroptimizedos className="icon text-5xl"/></a></li>
                <li><a href="#"><SiContributorcovenant className="icon text-5xl"/></a></li>
                <li><a href="#"><FaContao className="icon text-5xl"/></a></li>
                <li><a href="#"><BiLayer className="icon text-5xl"/></a></li>
            </ul>
        </div>

        <div className="customer-feedback flex flex-col items-center pt-10 text-slate-600">
            <h3 className="custom-h3">What Our Clients Say</h3>
            <ul className="pt-10 flex gap-10">
                <CardClient 
                    clientImg={clientImg1}
                    name="John Mueller" 
                    type="Homeowner" 
                    content="Since installing the solar panels from Eco Volt, my energy bills have dropped by 40%. Not only am I saving money, but I also feel proud to contribute to a greener environment."
                />
                <CardClient 
                    clientImg={clientImg2}
                    name="William Davis" 
                    type="GreenTech Solutions' CO" 
                    content="Eco Volt helped us install a solar energy system that now powers 70% of our office, cutting our energy costs significantly. Their expertise and dedication to excellence were evident"
                />
                <CardClient 
                    clientImg={clientImg3}
                    name="Amy Johnson" 
                    type="Homeowner" 
                    content="I made the switch to geothermal heating and cooling with Eco Volt, and the difference is incredible. The team guided me every step of the way, and the installation was smooth and quick."
                />
                <CardClient 
                    clientImg={clientImg4}
                    name="Jennifer Jones" 
                    type="EcoTech Enterprises' CO" 
                    content="Working with Eco Volt has been a game-changer for our business. Their energy storage solutions have made our operations more reliable, especially during peak demand times."
                />
            </ul>
        </div>
    </>
  )
}

export default Clients
