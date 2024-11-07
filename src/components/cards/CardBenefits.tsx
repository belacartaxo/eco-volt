import { IconType } from 'react-icons';

interface CardBenefitsProps {
  icon: IconType; // Type for the icon prop, which should be a React icon component
  content: string; // Type for the content prop, which should be a string
}

const CardBenefits: React.FC<CardBenefitsProps> = ({ icon: Icon, content }) => {
  return (
    <li className="w-64 gap-3 flex flex-col items-center rounded p-2  pt-10 pb-10 shadow-lg">
        <div className='relative'>
            <div className=" absolute h-10 w-10 bg-green-100 rounded-tl-2xl rounded-tr-sm rounded-bl-sm rounded-br-2xl flex items-center justify-center left-1 top-1"></div>
            <Icon className="text-green-700 text-4xl relative" />
        </div>
        <p className="text-center">{content}</p>
    </li>
  );
}

export default CardBenefits;
