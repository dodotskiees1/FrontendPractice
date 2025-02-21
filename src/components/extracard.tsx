import React from 'react'

interface extraProps {
    size: 'large';
    children?: React.ReactNode;

}

const Extra: React.FC<extraProps> = ({ size, children, }) => {
    const sizeClasses = {
        large: 'h-[440px] w-[90%]',
    };
    return (
        <div className={`bg-gray-100 shadow-lg ${sizeClasses[size]} p-4`}>
            {children}
        
        </div>
    )
}

export default Extra