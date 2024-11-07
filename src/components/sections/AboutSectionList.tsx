import React from 'react';
import { IconType } from 'react-icons';

interface AboutSectionListProps {
    img: string;
    title: string;
    items: string[];
    alt: string;
    icons: IconType[];
}

const AboutSectionList: React.FC<AboutSectionListProps> = ({ img, title, items, alt, icons}) => {
  return (
    <div>
        <div className="mission flex items-center gap-24 pt-20">
            <div className="w-[600px]">
                <h3 className="custom-services-h3 !text-3xl pb-3">{title}</h3>
                <ul className='flex flex-col gap-3'>
                    {items.map((item, index) => {
                        const Icon = icons[index];
                        return (
                            <li key={index} className="flex items-center gap-3">
                                {Icon && <Icon className="text-[#01cc01] text-3xl" />}
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <img src={img} alt={alt} className="w-[400px]"/>
        </div>
    </div>
  );
};

export default AboutSectionList;
