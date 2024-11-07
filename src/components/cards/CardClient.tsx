import { ImQuotesLeft } from "react-icons/im";

interface CardBenefitsProps {
  clientImg: string;
  name: string;
  type: string
  content: string; 
}

const CardBenefits: React.FC<CardBenefitsProps> = ({ clientImg, name, type, content}) => {
  return (
    <li className="w-[290px] flex flex-col items-center rounded-lg p-6 pt-8 pb-6 shadow-2xl bg-white border">
        <div className='relative'>
            <div className=" absolute h-[70px] w-[70px] bg-green-100 rounded-tl-2xl rounded-tr-sm rounded-bl-sm rounded-br-2xl flex items-center justify-center left-2 top-2"></div>
            <img src={clientImg} alt="Client photo" className="rounded-full w-[70px] relative" />
        </div>
        <h3 className="font-bold text-xl pt-4">{name}</h3>
        <p className="text-sm pb-2">{type}</p>
        <p className="text-center">{content}</p>
        <ImQuotesLeft className="text-3xl mt-5"/>
    </li>
  );
}

export default CardBenefits;
