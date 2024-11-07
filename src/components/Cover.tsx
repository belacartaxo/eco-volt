import Button from "./sections/Button"
import coverImg from "../assets/img/cover-img.png" 

const Cover = () => {
  return (
    <div className='relative cover bg-green-100 h-[calc(100vh-75px)] flex p-pExt overflow-hidden'>
        <div className="cover-content w-[60%] flex flex-col justify-center">
            {/* TODO - Slider view */}
            <h1 className="text-slate-600 text-4xl font-bold pb-6">Empowering a <span className="text-green-600">Greener Future</span> with Sustainable Energy Solutions.</h1>
            <p className="text-slate-700 text-xl pb-6">At Eco Volt, we provide innovative renewable energy solutions to help you reduce your carbon footprint, lower energy costs, and build a sustainable future. Whether it’s solar power, energy storage, or electric vehicle charging, we tailor our services to meet your needs—while making a positive impact on the planet</p>
            <Button />
        </div>
        <div className="cover-img absolute bottom-0 right-0">
          <img src={coverImg} alt="" className="h-[650px]" />
        </div>
    </div>
  )
}

export default Cover
