import React from 'react'
interface CardProps {
 children?: React.ReactNode;
    image?: string;
}
const Card: React.FC<CardProps> = ({ image, children }) => {
  return (
    <div className='bg-white shadow-xl h-[264px] w-[300px] pt-8'>
      
      {image && (
                <img 
                    src={`/assets/images/${image}`} 
                  
                    className="w-10 h-10 object-cover ml-10"
                />
            )}
            { children }
    </div>
  )
}

export default Card
