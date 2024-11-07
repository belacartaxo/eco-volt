const Cover = () => {
  return (
    <div className='cover bg-slate-100 h-[calc(100vh-75px)] flex p-pExt'>
        <div className="cover-content w-[60%] flex flex-col justify-center">
            {/* TODO - Slider view */}
            <h1 className="text-slate-600 text-4xl font-bold pb-6">Empowering a <span className="text-green-600">Greener Future</span> with Sustainable Energy Solutions.</h1>
            <p className="text-slate-700 text-xl pb-6">At Eco Volt, we provide innovative renewable energy solutions to help you reduce your carbon footprint, lower energy costs, and build a sustainable future. Whether it’s solar power, energy storage, or electric vehicle charging, we tailor our services to meet your needs—while making a positive impact on the planet</p>
            <button className="custom-button text-lg">Request a Quote</button>
        </div>
        <div className="cover-img">Img</div>
    </div>
  )
}

export default Cover
