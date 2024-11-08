import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import servSec1Img1 from "../../assets/img/serv-sec1-img1.jpg"
import servSec1Img2 from "../../assets/img/serv-sec1-img2.jpg"
import servSec1Img3 from "../../assets/img/serv-sec1-img3.jpg"
import servSec2Img1 from "../../assets/img/serv-sec2-img1.png"
import servSec2Img2 from "../../assets/img/serv-sec2-img2.jpg"
import servSec3Img1 from "../../assets/img/serv-sec3-img1.jpg"
import servSec3Img2 from "../../assets/img/serv-sec3-img2.jpg"
import servSec4Img1 from "../../assets/img/serv-sec4-img1.jpg"
import servSec4Img2 from "../../assets/img/serv-sec4-img2.jpg"
import CardServices from "../cards/CardServices";

const Services = () => {
    const [isOpenServ1, setIsOpenServ1] = useState(true);
    const [isOpenServ2, setIsOpenServ2] = useState(false);
    const [isOpenServ3, setIsOpenServ3] = useState(false);
    const [isOpenServ4, setIsOpenServ4] = useState(false);

    const toggleSection1 = () => setIsOpenServ1(!isOpenServ1);
    const toggleSection2 = () => setIsOpenServ2(!isOpenServ2);
    const toggleSection3 = () => setIsOpenServ3(!isOpenServ3);
    const toggleSection4 = () => setIsOpenServ4(!isOpenServ4);

    return (
        <div className="services flex flex-col items-center bg-zinc-100 p-20">
            <h2 className="custom-h2 flex flex-col items-center !pb-2 ">Our Services</h2>
            <p className="w-[800px] pb-10 text-lg text-center text-zinc-600">At <span className='text-[#01cc01] font-bold'>EcoVolt</span>, we provide innovative and sustainable renewable energy solutions to meet the needs of homes, businesses, and industries. Our mission is to facilitate the transition to a greener future by reducing energy costs, lowering carbon emissions, and promoting energy efficiency. With a specialized team and cutting-edge technologies, we are committed to delivering long-term environmental and economic benefits.</p>
            
            <div className="services-content flex flex-col gap-5">
                <div className="service">
                    <div className="service-sec-title" onClick={toggleSection1}>
                        <IoIosArrowDown className={`text-2xl text-slate-700 transition-all duration-700  ${isOpenServ1 ? 'transform -rotate-180': ''}`} />
                        <h3 className="custom-h3">Renewable Energy Installation</h3>
                    </div>

                    <div
                    className={`service-sec transition-all duration-700 ease-in-out overflow-hidden ${isOpenServ1 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                    style={{
                        maxHeight: isOpenServ1 ? '1000px' : '0', // Ajuste a altura máxima conforme necessário
                    }}>
                        <CardServices 
                            title="Solar Panel Installation"
                            content="We offer customized solar panel systems for residential, commercial, and industrial properties, designed to meet your specific energy needs and maximize savings."
                            img= {servSec1Img1}
                            alt= "Solar Panel"
                        />

                        <CardServices
                        title="Wind Turbine Solutions"
                        content="For areas with strong wind potential, we provide efficient wind turbine installations, ideal for large-scale and industrial energy solutions."
                        img={servSec1Img2}
                        alt="Wind Turbine"
                        />

                        <CardServices
                        title="Geothermal Energy Systems"
                        content="We design and install geothermal systems for heating and cooling, offering sustainable solutions for eco-conscious businesses and homeowners."
                        img={servSec1Img3}
                        alt="Geothermal Energy System"
                        />
                    </div>
                </div>
                <div className="service">
                    <div className="service-sec-title" onClick={toggleSection2}>
                        <IoIosArrowDown className={`text-2xl text-slate-700 transition-all duration-700  ${isOpenServ2 ? 'transform -rotate-180': ''}`} />
                        <h3 className="custom-h3">Energy Storage Solutions</h3>
                    </div>
                    <div className={`service-sec transition-all duration-700 ease-in-out overflow-hidden ${isOpenServ2 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                    style={{
                        maxHeight: isOpenServ2 ? '1000px' : '0', // Ajuste a altura máxima conforme necessário
                    }}>
                        <CardServices
                            title="Battery Storage"
                            content="Our battery storage systems allow you to store excess renewable energy, increasing energy independence and ensuring reliable power when you need it most."
                            img={servSec2Img1}
                            alt="Battery"
                        />
                        <CardServices
                            title="Microgrids"
                            content="We specialize in designing and managing microgrids for communities and organizations, giving you control over your energy production and reducing reliance on the main grid."
                            img={servSec2Img2}
                            alt="Construction"
                        />
                    </div>
                </div>

                <div className="service">
                    <div className="service-sec-title" onClick={toggleSection3}>
                        <IoIosArrowDown className={`text-2xl text-slate-700 transition-all duration-700  ${isOpenServ3 ? 'transform -rotate-180': ''}`} />
                        <h3 className="custom-h3">Energy Audits and Efficiency Consulting</h3>
                    </div>
                    <div
                    className={`service-sec transition-all duration-700 ease-in-out overflow-hidden ${isOpenServ3 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                    style={{
                        maxHeight: isOpenServ3 ? '1000px' : '0', // Ajuste a altura máxima conforme necessário
                    }}>
                        <CardServices
                            title="Energy Audits"
                            content="Our in-depth energy audits identify inefficiencies and provide actionable recommendations to help you reduce energy consumption and costs."
                            img={servSec3Img1}
                            alt=""
                        />
                        <CardServices
                            title="Energy Efficiency Consulting"
                            content="We offer expert advice on energy-saving technologies and upgrades, such as LED lighting, energy-efficient HVAC systems, and smart thermostats, to help you optimize energy use."
                            img={servSec3Img2}
                            alt=""
                        />
                    </div>
                </div>

                <div className="service">
                    <div className="service-sec-title" onClick={toggleSection4}>
                        <IoIosArrowDown className={`text-2xl text-slate-700 transition-all duration-700  ${isOpenServ4 ? 'transform -rotate-180': ''}`} />
                        <h3 className="custom-h3">Sustainable Building Solutions</h3>
                    </div>
                    <div
                    className={`service-sec transition-all duration-700 ease-in-out overflow-hidden ${isOpenServ4 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                    style={{
                        maxHeight: isOpenServ4 ? '1000px' : '0', // Ajuste a altura máxima conforme necessário
                    }}>
                        <CardServices
                            title="Green Building Design Consulting"
                            content="We collaborate with architects and builders to integrate renewable energy solutions into new construction projects, from solar-ready rooftops to energy-efficient designs."
                            img={servSec4Img1}
                            alt=""
                        />
                        <CardServices
                            title="Net-Zero Building Services"
                            content="We assist in designing or retrofitting buildings to achieve net-zero energy consumption by combining energy-efficient upgrades with renewable energy installations."
                            img={servSec4Img2}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
