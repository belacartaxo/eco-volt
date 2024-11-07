import { FaArrowRightLong } from "react-icons/fa6";

interface CardServicesProps {
  img: string; 
  title: string;
  content: string; 
  alt: string;
}

const CardServices: React.FC<CardServicesProps> = ({ title, content, img, alt}) =>  {
  return (
    <div className="relative flex flex-col items-center mb-8">
        <img src={img} alt={alt} className="rounded-xl w-[400px] h-[250px]"/>
        <div className="flex flex-col items-center justify-center p-4 bg-white absolute top-44 shadow-lg rounded-lg w-[350px] h-[260px]">
            <h4 className="text-slate-600 text-xl font-bold pb-3 text-center">{title}</h4>
            <p className="text-center pb-3">{content}</p>
            <a href="#" className="text-[#01cc01] font-bold flex items-center gap-2">Request quote <FaArrowRightLong className="text"/></a>              
        </div>    
        <div className="h-[200px]"></div>  
    </div>
  )
}

export default CardServices
