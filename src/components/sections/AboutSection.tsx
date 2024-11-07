interface AboutSectionProps {
    img: string; 
    title: string; 
    content: string; 
    alt:string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ img, title, content, alt }) => {
  return (
    <div>
        <div className="mission flex items-center gap-24 pt-14">
            <img src={img} alt={alt} className="w-[400px]"/>
            <div className="w-[600px]">
                <h3 className="custom-services-h3 !text-3xl pb-3">{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    </div>
  )
}

export default AboutSection
