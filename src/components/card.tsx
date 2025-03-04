import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
interface CardProps {
 children?: React.ReactNode;
    image?: string;
}
const Card: React.FC<CardProps> = ({ image, children }) => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  return (
  <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}bg-white shadow-xl h-[264px] w-[300px] pt-8`}>
      
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
