import { IconType } from 'react-icons';

interface CardBenefitsProps {
  icon: IconType;
  content: string; 
}

const CardBenefits: React.FC<CardBenefitsProps> = ({ icon: Icon, content }) => {
  return (
    <li className="w-[290px] gap-3 flex flex-col items-center rounded p-6  pt-10 pb-10 shadow-lg bg-white">
        <div className='relative'>
            <div className=" absolute h-10 w-10 bg-green-100 rounded-tl-2xl rounded-tr-sm rounded-bl-sm rounded-br-2xl flex items-center justify-center left-1 top-1"></div>
            <Icon className="text-green-700 text-4xl relative" />
        </div>
        <p className="text-center">{content}</p>
    </li>
  );
}

export default CardBenefits;
