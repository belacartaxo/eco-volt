const Services = () => {
  return (
    <div className="services bg-slate-100 p-20 pt-">
        <h2 className="custom-h2 flex flex-col items-center p-pEx pt-20 pb-0">Our Services</h2>
        <div className="services-content flex flex-col gap-28">
            <div className="service">
                <h3 className="custom-services-h3">Renewable Energy Installation</h3>
                <div className="service-sec">
                    <div>
                        <img src="" alt="" className="h-hImg bg-red-500"/>
                        <div className="service-sec-content">
                            <h4 className="custom-services-h4">Solar Panel Installation</h4>
                            <p>We offer customized solar panel systems for residential, commercial, and industrial properties, designed to meet your specific energy needs and maximize savings.</p>
                        </div>                    </div>
                    <div>
                        <h4 className="custom-services-h4">Wind Turbine Solutions</h4>
                        <p>For areas with strong wind potential, we provide efficient wind turbine installations, ideal for large-scale and industrial energy solutions.</p>
                    </div>
                    <div>
                        <h4 className="custom-services-h4">Geothermal Energy Systems</h4>
                        <p>We design and install geothermal systems for heating and cooling, offering sustainable solutions for eco-conscious businesses and homeowners.</p>
                    </div>
                </div>
            </div>

            <div className="service">
                <h3 className="custom-services-h3">Energy Storage Solutions</h3>
                <div className="service-sec">
                    <div>
                        <h4 className="custom-services-h4">Battery Storage</h4>
                        <p>Our battery storage systems allow you to store excess renewable energy, increasing energy independence and ensuring reliable power when you need it most.</p>
                    </div>
                    <div>
                        <h4 className="custom-services-h4">Microgrids</h4>
                        <p>We specialize in designing and managing microgrids for communities and organizations, giving you control over your energy production and reducing reliance on the main grid.</p>
                    </div>
                </div>
            </div>

            <div className="service">
                <h3 className="custom-services-h3">Energy Audits and Efficiency Consulting</h3>
                <div className="service-sec">
                    <div>
                        <h4 className="custom-services-h4">Energy Audits</h4>
                        <p>Our in-depth energy audits identify inefficiencies and provide actionable recommendations to help you reduce energy consumption and costs.</p>
                    </div>
                    <div>
                        <h4 className="custom-services-h4">Energy Efficiency Consulting</h4>
                        <p>We offer expert advice on energy-saving technologies and upgrades, such as LED lighting, energy-efficient HVAC systems, and smart thermostats, to help you optimize energy use.</p>
                    </div>
                </div>
            </div>

            <div className="service">
                <h3 className="custom-services-h3">Sustainable Building Solutions</h3>
                <div className="service-sec">
                    <div>
                        <h4 className="custom-services-h4">Green Building Design Consulting</h4>
                        <p>We collaborate with architects and builders to integrate renewable energy solutions into new construction projects, from solar-ready rooftops to energy-efficient designs.</p>
                    </div>
                    <div>
                        <h4 className="custom-services-h4">Net-Zero Building Services</h4>
                        <p>We assist in designing or retrofitting buildings to achieve net-zero energy consumption by combining energy-efficient upgrades with renewable energy installations.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
