import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
interface extraProps {
    size: 'large';
    children?: React.ReactNode;

}

const Extra: React.FC<extraProps> = ({ size, children, }) => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  
    const sizeClasses = {
        large: 'h-[440px] w-[90%]',
    };
    return (
        <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} bg-gray-100 shadow-lg ${sizeClasses[size]} p-4`}>
            {children}
        
        </div>
    )
}

export default Extra